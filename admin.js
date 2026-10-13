const CLAVE_SESION = 'fogata_auth';
const ERROR_NO_AUTORIZADO = 'No autorizado';

const loginSection = document.getElementById('loginSection');
const panelSection = document.getElementById('panelSection');
const loginForm = document.getElementById('loginForm');
const loginMensaje = document.getElementById('loginMensaje');
const logoutBtn = document.getElementById('logoutBtn');
const horarioAdmin = document.getElementById('horarioAdmin');
const promosAdmin = document.getElementById('promosAdmin');
const promoForm = document.getElementById('promoForm');
const promoMensaje = document.getElementById('promoMensaje');

/// ---------- Sesión ----------

function guardarCredenciales(usuario, clave) {
    sessionStorage.setItem(CLAVE_SESION, 'Basic ' + btoa(usuario + ':' + clave));
}

function obtenerAuth() {
    return sessionStorage.getItem(CLAVE_SESION);
}

function cerrarSesion(mensaje) {
    sessionStorage.removeItem(CLAVE_SESION);
    horarioAdmin.innerHTML = '';
    promosAdmin.innerHTML = '';
    panelSection.hidden = true;
    logoutBtn.hidden = true;
    loginSection.hidden = false;
    loginMensaje.textContent = mensaje || '';
}

function mostrarPanel() {
    loginSection.hidden = true;
    panelSection.hidden = false;
    logoutBtn.hidden = false;
    cargarHorarioAdmin();
    cargarPromosAdmin();
}

/// ---------- Peticiones ----------

async function leerMensajeError(respuesta) {
    try {
        const datos = await respuesta.json();
        return datos.message || 'Error ' + respuesta.status;
    } catch {
        return 'Error ' + respuesta.status;
    }
}

/// Hace una petición a la API enviando las credenciales
async function fetchAdmin(ruta, opciones = {}) {
    const headers = { 'Authorization': obtenerAuth() };
    if (opciones.body) {
        headers['Content-Type'] = 'application/json';
    }

    const respuesta = await fetch(API_URL + ruta, { ...opciones, headers });

    if (respuesta.status === 401) {
        cerrarSesion('Tu sesión expiró o las credenciales ya no son válidas.');
        throw new Error(ERROR_NO_AUTORIZADO);
    }
    if (!respuesta.ok) {
        throw new Error(await leerMensajeError(respuesta));
    }
    return respuesta;
}

/// ---------- Mensajes ----------

function mostrarMensaje(elemento, texto, tipo) {
    elemento.classList.remove('ok', 'error');
    if (tipo) {
        elemento.classList.add(tipo);
    }
    elemento.textContent = texto;
}

function mostrarError(elemento, error) {
    if (error.message === ERROR_NO_AUTORIZADO) return;
    const texto = error instanceof TypeError
        ? 'No se pudo conectar con el servidor.'
        : error.message;
    mostrarMensaje(elemento, texto, 'error');
}

/// ---------- Login ----------

loginForm.addEventListener('submit', async function (evento) {
    evento.preventDefault();
    loginMensaje.textContent = '';

    const usuario = document.getElementById('usuario').value.trim();
    const clave = document.getElementById('clave').value;

    try {
        guardarCredenciales(usuario, clave);
    } catch {
        loginMensaje.textContent = 'La contraseña tiene caracteres no soportados.';
        return;
    }

    try {
        await fetchAdmin('/admin/promos');
        document.getElementById('clave').value = '';
        mostrarPanel();
    } catch (error) {
        if (error.message === ERROR_NO_AUTORIZADO) {
            loginMensaje.textContent = 'Usuario o contraseña incorrectos.';
        } else {
            sessionStorage.removeItem(CLAVE_SESION);
            loginMensaje.textContent = 'No se pudo conectar con el servidor. Intenta de nuevo.';
        }
    }
});

logoutBtn.addEventListener('click', function () {
    cerrarSesion('Sesión cerrada.');
});

/// ---------- Horario ----------

function crearFilaHorario(dia) {
    const fila = document.createElement('div');
    fila.classList.add('horario-fila');

    const nombre = document.createElement('strong');
    nombre.textContent = dia.dia;

    const etiquetaCerrado = document.createElement('label');
    etiquetaCerrado.classList.add('check-cerrado');
    const checkCerrado = document.createElement('input');
    checkCerrado.type = 'checkbox';
    checkCerrado.checked = dia.cerrado;
    etiquetaCerrado.append(checkCerrado, ' Cerrado');

    const apertura = document.createElement('input');
    apertura.type = 'time';
    apertura.value = dia.apertura || '';

    const cierre = document.createElement('input');
    cierre.type = 'time';
    cierre.value = dia.cierre || '';

    const guardar = document.createElement('button');
    guardar.type = 'button';
    guardar.classList.add('btn-guardar');
    guardar.textContent = 'Guardar';

    const estado = document.createElement('span');
    estado.classList.add('estado');

    function actualizarCampos() {
        apertura.disabled = checkCerrado.checked;
        cierre.disabled = checkCerrado.checked;
    }
    checkCerrado.addEventListener('change', actualizarCampos);
    actualizarCampos();

    guardar.addEventListener('click', async function () {
        mostrarMensaje(estado, 'Guardando...');
        guardar.disabled = true;

        try {
            await fetchAdmin('/admin/horario/' + dia.id, {
                method: 'PUT',
                body: JSON.stringify({
                    apertura: checkCerrado.checked ? null : apertura.value,
                    cierre: checkCerrado.checked ? null : cierre.value,
                    cerrado: checkCerrado.checked
                })
            });
            mostrarMensaje(estado, 'Guardado ✓', 'ok');
        } catch (error) {
            mostrarError(estado, error);
        } finally {
            guardar.disabled = false;
        }
    });

    fila.append(nombre, etiquetaCerrado, apertura, cierre, guardar, estado);
    return fila;
}

async function cargarHorarioAdmin() {
    try {
        const respuesta = await fetch(API_URL + '/horario');
        if (!respuesta.ok) throw new Error('Error ' + respuesta.status);
        const dias = await respuesta.json();

        horarioAdmin.innerHTML = '';
        dias.forEach(function (dia) {
            horarioAdmin.appendChild(crearFilaHorario(dia));
        });
    } catch (error) {
        horarioAdmin.textContent = 'No se pudo cargar el horario.';
    }
}

/// ---------- Promos ----------

/// Fecha de hoy como "2026-10-13", usando la zona horaria del dispositivo
function hoyLocal() {
    const ahora = new Date();
    const mes = String(ahora.getMonth() + 1).padStart(2, '0');
    const dia = String(ahora.getDate()).padStart(2, '0');
    return ahora.getFullYear() + '-' + mes + '-' + dia;
}

function formatearFecha(iso) {
    const [anio, mes, dia] = iso.split('-').map(Number);
    return new Date(anio, mes - 1, dia)
        .toLocaleDateString('es-CR', { day: 'numeric', month: 'short', year: 'numeric' });
}

function estadoPromo(promo, hoy) {
    if (promo.fechaFin < hoy) return { texto: 'Vencida', clase: 'vencida' };
    if (promo.fechaInicio > hoy) return { texto: 'Programada', clase: 'programada' };
    return { texto: 'Vigente', clase: 'vigente' };
}

function crearFilaPromo(promo, hoy) {
    const fila = document.createElement('div');
    fila.classList.add('promo-admin-fila');

    const info = document.createElement('div');

    const titulo = document.createElement('strong');
    titulo.textContent = promo.titulo;

    const estado = estadoPromo(promo, hoy);
    const badge = document.createElement('span');
    badge.classList.add('badge', estado.clase);
    badge.textContent = estado.texto;

    const fechas = document.createElement('small');
    fechas.textContent = formatearFecha(promo.fechaInicio) + ' → ' + formatearFecha(promo.fechaFin);

    info.append(titulo, ' ', badge, fechas);

    const borrar = document.createElement('button');
    borrar.type = 'button';
    borrar.classList.add('btn-borrar');
    borrar.textContent = 'Borrar';

    borrar.addEventListener('click', async function () {
        if (!confirm('¿Borrar la promo "' + promo.titulo + '"?')) return;

        try {
            await fetchAdmin('/admin/promos/' + promo.id, { method: 'DELETE' });
            cargarPromosAdmin();
        } catch (error) {
            mostrarError(promoMensaje, error);
        }
    });

    fila.append(info, borrar);
    return fila;
}

async function cargarPromosAdmin() {
    try {
        const respuesta = await fetchAdmin('/admin/promos');
        const promos = await respuesta.json();
        const hoy = hoyLocal();

        promosAdmin.innerHTML = '';
        if (promos.length === 0) {
            promosAdmin.textContent = 'Todavía no hay promos.';
            return;
        }
        promos.forEach(function (promo) {
            promosAdmin.appendChild(crearFilaPromo(promo, hoy));
        });
    } catch (error) {
        if (error.message !== ERROR_NO_AUTORIZADO) {
            promosAdmin.textContent = 'No se pudo cargar la lista de promos.';
        }
    }
}

promoForm.addEventListener('submit', async function (evento) {
    evento.preventDefault();
    mostrarMensaje(promoMensaje, '');

    const datos = {
        titulo: document.getElementById('promoTitulo').value,
        descripcion: document.getElementById('promoDescripcion').value,
        imagenUrl: document.getElementById('promoImagen').value,
        fechaInicio: document.getElementById('promoInicio').value,
        fechaFin: document.getElementById('promoFin').value
    };

    try {
        await fetchAdmin('/admin/promos', {
            method: 'POST',
            body: JSON.stringify(datos)
        });
        promoForm.reset();
        establecerFechasPorDefecto();
        mostrarMensaje(promoMensaje, 'Promo creada ✓', 'ok');
        cargarPromosAdmin();
    } catch (error) {
        mostrarError(promoMensaje, error);
    }
});

/// ---------- Arranque ----------

function establecerFechasPorDefecto() {
    document.getElementById('promoInicio').value = hoyLocal();
    document.getElementById('promoFin').value = '';
}

establecerFechasPorDefecto();

if (obtenerAuth()) {
    mostrarPanel();
}