const horarioList = document.getElementById('horarioList');
const promosSection = document.getElementById('promos');
const promosGrid = document.getElementById('promosGrid');

/// Pide datos a la API y los devuelve como objeto JavaScript
async function obtenerJson(ruta) {
    const respuesta = await fetch(`${API_URL}${ruta}`);
    if (!respuesta.ok) {
        throw new Error(`Error ${respuesta.status} al pedir ${ruta}`);
    }
    return respuesta.json();
}

/// "22:00" -> "10:00 PM"
function formatearHora(hhmm) {
    const [horas, minutos] = hhmm.split(':').map(Number);
    const sufijo = horas >= 12 ? 'PM' : 'AM';
    const horas12 = horas % 12 === 0 ? 12 : horas % 12;
    return `${horas12}:${String(minutos).padStart(2, '0')} ${sufijo}`;
}

/// "2026-12-31" -> "31 de diciembre"
function formatearFecha(iso) {
    const [anio, mes, dia] = iso.split('-').map(Number);
    return new Date(anio, mes - 1, dia)
        .toLocaleDateString('es-CR', { day: 'numeric', month: 'long' });
}

function renderHorario(dias) {
    horarioList.innerHTML = '';

    dias.forEach(function (d) {
        const li = document.createElement('li');

        const spanDia = document.createElement('span');
        spanDia.textContent = d.dia;

        const spanHoras = document.createElement('span');
        spanHoras.textContent = d.cerrado
            ? 'Cerrado'
            : `${formatearHora(d.apertura)} - ${formatearHora(d.cierre)}`;

        li.appendChild(spanDia);
        li.appendChild(spanHoras);
        horarioList.appendChild(li);
    });
}

function crearTarjetaPromo(promo) {
    const card = document.createElement('article');
    card.classList.add('promo-card');

    if (promo.imagenUrl && promo.imagenUrl.startsWith('https://')) {
        const img = document.createElement('img');
        img.src = promo.imagenUrl;
        img.alt = promo.titulo;
        img.loading = 'lazy';
        img.addEventListener("error", function () {
          img.remove();
        });
        card.appendChild(img);
    }

    const cuerpo = document.createElement('div');
    cuerpo.classList.add('promo-body');

    const titulo = document.createElement('h3');
    titulo.textContent = promo.titulo;
    cuerpo.appendChild(titulo);

    if (promo.descripcion) {
        const descripcion = document.createElement('p');
        descripcion.textContent = promo.descripcion;
        cuerpo.appendChild(descripcion);
    }

    const vigencia = document.createElement('small');
    vigencia.textContent = `Válida hasta el ${formatearFecha(promo.fechaFin)}`;
    cuerpo.appendChild(vigencia);

    card.appendChild(cuerpo);
    return card;
}

async function cargarHorario() {
    try {
        const dias = await obtenerJson('/horario');
        renderHorario(dias);
    } catch (error) {
        console.error(error);
        horarioList.innerHTML = '';
        const li = document.createElement('li');
        li.textContent = 'No pudimos cargar el horario. Llámanos al +506-8775-3280.';
        horarioList.appendChild(li);
    }
}

async function cargarPromos() {
    try {
        const promos = await obtenerJson('/promos');
        if (promos.length === 0) return;

        promosGrid.innerHTML = '';
        promos.forEach(function (promo) {
            promosGrid.appendChild(crearTarjetaPromo(promo));
        });
        promosSection.hidden = false;
    } catch (error) {
        console.error(error);
    }
}

cargarHorario();
cargarPromos();