const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
});

const links = document.querySelectorAll('.nav-links a');

links.forEach(function (link) {
    link.addEventListener('click', function () {
        navLinks.classList.remove('active');
    });
});

const menuData = [
    ///---------- Drinks ---------------- ///

    ///---------- Cervezas ----------------
    {
        tipo: "Drinks",
        categoria: "Cervezas",
        nombre: "Imperial",
        precio: 1900
    },
    {
        tipo: "Drinks",
        categoria: "Cervezas",
        nombre: "Imperial Light",
        precio: 1900
    },
    {
        tipo: "Drinks",
        categoria: "Cervezas",
        nombre: "Pilsen",
        precio: 1900
    },
    {
        tipo: "Drinks",
        categoria: "Cervezas",
        nombre: "Bavaria",
        precio: 2700
    },
    {
        tipo: "Drinks",
        categoria: "Cervezas",
        nombre: "Corona",
        precio: 2700
    },
    {
        tipo: "Drinks",
        categoria: "Cervezas",
        nombre: "Heineken",
        precio: 2700
    },
    {
        tipo: "Drinks",
        categoria: "Cervezas",
        nombre: "Sol",
        precio: 2000
    },
    ///---------- Cocteles ----------------
    {
        tipo: "Drinks",
        categoria: "Cocteles",
        nombre: "Margarita",
        descripcion: "Tequila, triple sec y limón. Regular, fresa o mango",
        precio: 4500
    },
    {
        tipo: "Drinks",
        categoria: "Cocteles",
        nombre: "Mojito",
        descripcion: "Ron, limón, syrup, menta y limones",
        precio: 5500
    },
    {
        tipo: "Drinks",
        categoria: "Cocteles",
        nombre: "Piña Colada",
        descripcion: "Ron, piña, leche de coco y dulce",
        precio: 5000
    },
    {
        tipo: "Drinks",
        categoria: "Cocteles",
        nombre: "Daiquiri",
        descripcion: "Ron, limón y fresa congelada",
        precio: 4500
    },
    {
        tipo: "Drinks",
        categoria: "Cocteles",
        nombre: "Junquillal Vice",
        descripcion: "Piña Colada mezclada con Daiquiri",
        precio: 5000
    },
    {
        tipo: "Drinks",
        categoria: "Cocteles",
        nombre: "Long Island Ice Tea",
        descripcion: "Ron, vodka, tequila, triple sec, sweet and sour y Coca-Cola",
        precio: 5000
    },
    {
        tipo: "Drinks",
        categoria: "Cocteles",
        nombre: "Martini",
        descripcion: "Vodka clásico o Dirty",
        precio: 5500
    },
    ///---------- Licores ----------------
    {
        tipo: "Drinks",
        categoria: "Licores",
        nombre: "Ron",
        precio: 2500
    },
    {
        tipo: "Drinks",
        categoria: "Licores",
        nombre: "Vodka",
        precio: 2500
    },
    {
        tipo: "Drinks",
        categoria: "Licores",
        nombre: "Tequila",
        precio: 2500
    },
    {
        tipo: "Drinks",
        categoria: "Licores",
        nombre: "Whiskey",
        precio: 3500
    },
    {
        tipo: "Drinks",
        categoria: "Licores",
        nombre: "Cacique",
        precio: 1500
    },
    ///---------- Licores Premium ----------------
    {
        tipo: "Drinks",
        categoria: "Licores Premium",
        nombre: "Ron 7 años",
        precio: 3000
    },
    {
        tipo: "Drinks",
        categoria: "Licores Premium",
        nombre: "Johnnie Walker",
        precio: 5000
    },
    {
        tipo: "Drinks",
        categoria: "Licores Premium",
        nombre: "Ketel One Vodka",
        precio: 4000
    },
    {
        tipo: "Drinks",
        categoria: "Licores Premium",
        nombre: "Patron Silver",
        precio: 4500
    },
    ///---------- Locales ----------------
    {
        tipo: "Drinks",
        categoria: "Locales",
        nombre: "Chilimango",
        precio: 2000
    },
    {
        tipo: "Drinks",
        categoria: "Locales",
        nombre: "Chilimaracuyá",
        precio: 2000
    },
    ///---------- Food ----------------///

    ///---------- Aperitivos ----------------
    {
        tipo: "Food",
        categoria: "Aperitivos",
        nombre: "Chips y Frijoles",
        descripcion: "Frijoles negros con queso. Adicional Guacamole ₡1,000",
        precio: 3500
    },
    {
        tipo: "Food",
        categoria: "Aperitivos",
        nombre: "Nachos",
        descripcion: "Frijoles, queso, repollo, pico gallo, salsa de chipotle",
        precio: 5000
    },
    {
        tipo: "Food",
        categoria: "Aperitivos",
        nombre: "Alitas/Wings",
        descripcion: "Jumbo Wings (6), tu elección de Buffalo, BBQ, Garlic Parmesan",
        precio: 7500
    },
    {
        tipo: "Food",
        categoria: "Aperitivos",
        nombre: "Boquita de Chicharrón",
        descripcion: "Ensalada, papas fritas y 200 g de chicharrón",
        precio: 6500
    },
    {
        tipo: "Food",
        categoria: "Aperitivos",
        nombre: "Patacamarones",
        descripcion: "Patacones fritos con guacamole, camarones fritos, pico de gallo y salsa de aguacate",
        precio: 7500
    },
    ///---------- Chifrijos ----------------
    {
        tipo: "Food",
        categoria: "Chifrijos",
        nombre: "Chifri Clásico",
        descripcion: "Arroz, frijoles tiernos, chicharrón, pico de gallo y tortillas tostadas",
        precio: 6000
    },
    {
        tipo: "Food",
        categoria: "Chifrijos",
        nombre: "Chifri Pollo",
        descripcion: "Arroz, frijoles tiernos, trocitos de pollo empanizado, pico de gallo y tortillas tostadas",
        precio: 6500
    },
    {
        tipo: "Food",
        categoria: "Chifrijos",
        nombre: "Chifri Camarón",
        descripcion: "Arroz, frijoles tiernos, camarones empanizados, pico de gallo, aguacate y tortillas tostadas",
        precio: 7000
    },
    {
        tipo: "Food",
        categoria: "Chifrijos",
        nombre: "Chifri Mix",
        descripcion: "Arroz, frijoles tiernos, chicharrón, pollo, pico de gallo y tortillas tostadas",
        precio: 7000
    },
    ///---------- Ceviches ----------------
    {
        tipo: "Food",
        categoria: "Ceviches",
        nombre: "Ceviche Clásico",
        descripcion: "Chips de tortilla con ceviche de pescado",
        precio: 6500
    },
    {
        tipo: "Food",
        categoria: "Ceviches",
        nombre: "Ceviche Frito",
        descripcion: "Ceviche de camarón, marlín, pargo frito, patacones, aguacate, leche de tigre estilo peruano y cebolla",
        precio: 10000
    },
    ///---------- Handhelds ----------------
    {
        tipo: "Food",
        categoria: "Handhelds",
        nombre: "Hamburguesa con Queso",
        descripcion: "Lechuga, tomate, cebolla y queso cheddar. Incluye papas fritas o ensalada. Tocino adicional ₡1,000",
        precio: 6000
    },
    {
        tipo: "Food",
        categoria: "Handhelds",
        nombre: "Hamburguesa de Frijol",
        descripcion: "Lechuga, tomate, cebolla y queso cheddar. Incluye papas fritas o ensalada",
        precio: 5000
    },
    {
        tipo: "Food",
        categoria: "Handhelds",
        nombre: "Hamburguesa de Aguacate",
        descripcion: "Aguacate, lechuga, tomate, cebolla y queso cheddar. Incluye papas fritas o ensalada",
        precio: 6000
    },
    {
        tipo: "Food",
        categoria: "Handhelds",
        nombre: "Hamburguesa de Pollo Empanizado",
        descripcion: "Pollo empanizado con ranch, tomate y mix de repollo. Incluye papas fritas o ensalada",
        precio: 6500
    },
    {
        tipo: "Food",
        categoria: "Handhelds",
        nombre: "Dedos de Pollo",
        descripcion: "Dedos de pollo con papas fritas o ensalada. Salsa a elegir: BBQ, ranch o honey mustard",
        precio: 6500
    },
    {
        tipo: "Food",
        categoria: "Handhelds",
        nombre: "Pollo Frito con Papas",
        descripcion: "3 piezas de pollo frito con papas fritas",
        precio: 7000
    },
    {
        tipo: "Food",
        categoria: "Handhelds",
        nombre: "Alitas con Papas Fritas",
        descripcion: "3 alitas jumbo con papas fritas. Salsa a elegir: Buffalo, BBQ o Garlic Parmesan",
        precio: 6200
    },
    ///---------- Tacos ----------------
    {
        tipo: "Food",
        categoria: "Tacos",
        nombre: "Cilantro Lime Taco",
        descripcion: "Tortilla de maíz con repollo, pico de gallo y salsa cilantro",
        precio: 1900
    },
    {
        tipo: "Food",
        categoria: "Tacos",
        nombre: "The Extra Street Taco",
        descripcion: "Tortilla de maíz con queso, pico de gallo y salsa de aguacate. A elegir: pollo, bistec o carnitas",
        precio: 1900
    },
    {
        tipo: "Food",
        categoria: "Tacos",
        nombre: "Chipotle Taco",
        descripcion: "Tortilla de maíz con repollo, pico de gallo y salsa chipotle. A elegir: pollo, bistec o carnitas",
        precio: 1900
    },
    {
        tipo: "Food",
        categoria: "Tacos",
        nombre: "Taco de Chicharrón",
        descripcion: "Chicharrones sobre tortilla de maíz con cebolla caramelizada, salsa chipotle y cilantro",
        precio: 1700
    },
    {
        tipo: "Food",
        categoria: "Tacos",
        nombre: "Mexicanas",
        descripcion: "Tortilla de maíz con carne picante, cebolla, cilantro, pico de gallo y salsa picante",
        precio: 1700
    },
    {
        tipo: "Food",
        categoria: "Tacos",
        nombre: "Corona Shrimp Taco",
        descripcion: "Camarones fritos sobre tortilla de maíz con repollo, pico de gallo y salsa de aguacate",
        precio: 2500
    },
    {
        tipo: "Food",
        categoria: "Tacos",
        nombre: "Fish Taco",
        descripcion: "Pescado frito sobre tortilla de maíz, repollo, pico de gallo y salsa de avocado",
        precio: 2500
    },
    {
        tipo: "Food",
        categoria: "Tacos",
        nombre: "Mix 6 Tacos",
        descripcion: "Elige hasta 6 tacos de las opciones del menú",
        precio: 10800
    },
    {
        tipo: "Food",
        categoria: "Tacos",
        nombre: "The Veggie Taco",
        descripcion: "Frijoles sobre tortilla de maíz con aguacate, cebolla caramelizada, repollo, pico de gallo y salsa de aguacate",
        precio: 1600
    },
    ///---------- Ensaladas ----------------
    {
        tipo: "Food",
        categoria: "Ensaladas",
        nombre: "Ensalada Cobb",
        descripcion: "Pollo a la parrilla, lechuga, tocino, huevo, tomate, aguacate y queso",
        precio: 7000
    },
    {
        tipo: "Food",
        categoria: "Ensaladas",
        nombre: "Ensalada de Camarones",
        descripcion: "Camarones fritos o a la plancha, lechuga, pico de gallo, queso y aguacate",
        precio: 7500
    },
    {
        tipo: "Food",
        categoria: "Ensaladas",
        nombre: "Ensalada con Pollo",
        descripcion: "Pollo a la parrilla o frito con lechuga, tomate, cebolla y queso",
        precio: 6500
    },
    ///---------- Parrilla ----------------
    {
        tipo: "Food",
        categoria: "Parrilla",
        nombre: "Brochetas de Pollo",
        descripcion: "2 brochetas de pollo, verduras a la mantequilla y papas fritas",
        precio: 6000
    },
    {
        tipo: "Food",
        categoria: "Parrilla",
        nombre: "Brochetas de Carne",
        descripcion: "2 brochetas de lomito, verduras a la mantequilla y papas fritas",
        precio: 7000
    },
    {
        tipo: "Food",
        categoria: "Parrilla",
        nombre: "Brochetas de Camarón",
        descripcion: "2 brochetas de camarón, verduras a la mantequilla y papas fritas",
        precio: 8000
    },
    {
        tipo: "Food",
        categoria: "Parrilla",
        nombre: "Bistec Encebollado",
        descripcion: "Bistec con verduras y papas",
        precio: 7000
    },
    {
        tipo: "Food",
        categoria: "Parrilla",
        nombre: "Churrasco a la Parrilla",
        descripcion: "Churrasco de 450 g con papas en gajo y verduras asadas",
        precio: 12000
    },
    ///---------- Casados ----------------
    {
        tipo: "Food",
        categoria: "Casados",
        nombre: "Casado de Pollo",
        descripcion: "Arroz, frijoles, vegetales y pollo",
        precio: 5500
    },
    {
        tipo: "Food",
        categoria: "Casados",
        nombre: "Casado de Carne",
        descripcion: "Arroz, frijoles, vegetales y carne de res",
        precio: 6500
    },
    {
        tipo: "Food",
        categoria: "Casados",
        nombre: "Casado de Pescado",
        descripcion: "Arroz, frijoles y pescado. Sustitución por pescado: ₡2,000 adicionales",
        precio: 7000
    },
    {
        tipo: "Food",
        categoria: "Casados",
        nombre: "Casado de Chicharrón",
        descripcion: "Arroz, frijoles, vegetales y 200 g de chicharrón",
        precio: 6500
    },
    {
        tipo: "Food",
        categoria: "Casados",
        nombre: "Casado Vegano",
        descripcion: "Arroz, frijoles, ensalada, vegetales y aguacate",
        precio: 5000
    },
    ///---------- Arroces ----------------
    {
        tipo: "Food",
        categoria: "Arroces",
        nombre: "Arroz con Pollo",
        precio: 6500
    },
    {
        tipo: "Food",
        categoria: "Arroces",
        nombre: "Arroz con Camarones",
        precio: 7500
    },
    {
        tipo: "Food",
        categoria: "Arroces",
        nombre: "Arroz Jardinero",
        descripcion: "Arroz vegetariano",
        precio: 5500
    },
    ///---------- Especiales ----------------
    {
        tipo: "Food",
        categoria: "Especiales",
        nombre: "Sopa Azteca",
        descripcion: "Sopa de tomate mexicana con o sin chile, tortilla de maíz frita, queso y aguacate",
        precio: 4500
    },
    {
        tipo: "Food",
        categoria: "Especiales",
        nombre: "Crispy Chicken Mac N Cheese",
        descripcion: "Macarrones con queso cubiertos con trozos crujientes de dedos de pollo. Pollo estilo Buffalo adicional ₡500",
        precio: 5500
    },
    {
        tipo: "Food",
        categoria: "Especiales",
        nombre: "Mar y Tierra",
        descripcion: "Lomito premium de 250 g a la parrilla con 2 brochetas de camarón y vegetales a la parrilla o a la mantequilla",
        precio: 14000
    },
    {
        tipo: "Food",
        categoria: "Especiales",
        nombre: "Surtido para 2 Personas",
        descripcion: "6 alitas, fajitas de lomito, dedos de pescado, chicharrones, pico de gallo, tortillas de maíz, frijoles molidos y chips",
        precio: 20000
    },
    ///---------- Mariscos ----------------
    {
        tipo: "Food",
        categoria: "Mariscos",
        nombre: "Filet de Pescado",
        descripcion: "Pescado frito o al ajillo con papas y ensalada. Sustitución por pescado: ₡2,000 adicionales",
        precio: 7000
    },
    {
        tipo: "Food",
        categoria: "Mariscos",
        nombre: "Camarones",
        descripcion: "Camarones fritos o al ajillo con papas y ensalada",
        precio: 7500
    },
    {
        tipo: "Food",
        categoria: "Mariscos",
        nombre: "Filet de Pescado y Camarones",
        descripcion: "Pescado y camarones fritos o al ajillo con papas y ensalada. Sustitución por pescado: ₡2,000 adicionales",
        precio: 10500
    },
    {
        tipo: "Food",
        categoria: "Mariscos",
        nombre: "Fajitas de Camarón",
        descripcion: "Camarones a la plancha con cebolla y chile dulce, acompañados de 3 tortillas de maíz y papas fritas",
        precio: 8500
    },
    {
        tipo: "Food",
        categoria: "Mariscos",
        nombre: "Pescado Entero",
        descripcion: "Pescado del día a la plancha o frito, acompañado de papas y ensalada",
        precio: 12000
    },
    {
        tipo: "Food",
        categoria: "Mariscos",
        nombre: "Dedos de Pescado",
        descripcion: "3 dedos de pargo rojo acompañados de papas y ensalada",
        precio: 9000
    },
    {
        tipo: "Food",
        categoria: "Mariscos",
        nombre: "Hamburguesa de Pescado",
        descripcion: "Tilapia frita con lechuga y tomate. Incluye papas fritas o ensalada. Sustitución por pescado: ₡2,000 adicionales",
        precio: 7000
    },
    ///---------- Menu de Niños ----------------
    {
        tipo: "Food",
        categoria: "Menú de Niños",
        nombre: "Cheese Burger",
        precio: 3500
    },
    {
        tipo: "Food",
        categoria: "Menú de Niños",
        nombre: "Mac N Cheese",
        precio: 2500
    },
    {
        tipo: "Food",
        categoria: "Menú de Niños",
        nombre: "Chicken Tenders",
        precio: 3500
    },
    ///---------- Acompañamientos ----------------
    {
        tipo: "Food",
        categoria: "Acompañamientos",
        nombre: "Papas Fritas",
        precio: 2000
    },
    {
        tipo: "Food",
        categoria: "Acompañamientos",
        nombre: "Arroz y Frijoles",
        precio: 1500
    },
    {
        tipo: "Food",
        categoria: "Acompañamientos",
        nombre: "Ensalada",
        precio: 2500
    },
    ///---------- Bebidas sin Alcohol ----------------
    {
        tipo: "Drinks",
        categoria: "Bebidas sin Alcohol",
        nombre: "Café",
        precio: 1000
    },
    {
        tipo: "Drinks",
        categoria: "Bebidas sin Alcohol",
        nombre: "Frescos Naturales",
        precio: 2500
    },
    {
        tipo: "Drinks",
        categoria: "Bebidas sin Alcohol",
        nombre: "Agua Embotellada",
        precio: 1200
    },
    {
        tipo: "Drinks",
        categoria: "Bebidas sin Alcohol",
        nombre: "Gaseosas",
        precio: 1500
    }

];

/*Convertimos los datos en HTML*/

const menuAccordion = document.getElementById('menuAccordion');

/// Agrupa los elementos por categoría - Tenemos como queremos que se almacenen
function agruparPorCategoria(items) {
    const grupos = {};
    items.forEach(function (item) {
        if (!grupos[item.categoria]) {
            grupos[item.categoria] = [];
        }
        grupos[item.categoria].push(item);
    });
    return grupos;
}

/// Crea un acordeón para cada categoría - Tenemos como queremos que se vea los platillos en el menú
function crearAcordeonCategoria(categoria, platillos) {
    const details = document.createElement('details');

    const summary = document.createElement('summary');
    summary.textContent = categoria;
    details.appendChild(summary);

    const grid = document.createElement('div');
    grid.classList.add('menu-items');

    platillos.forEach(function (item) {
        const card = document.createElement('div');
        card.classList.add('menu-item');
        card.innerHTML = `
            <div class="menu-item-header">
                <h3>${item.nombre}</h3>
                <span class="menu-item-price">₡${item.precio.toLocaleString()}</span>
            </div>
            <p>${item.descripcion ? item.descripcion : ''}</p>
        `;
        grid.appendChild(card);
    });

    details.appendChild(grid);
    return details;
}
/// Renderiza el menú en el HTML - Tenemos como queremos que se vea el menú en la página
function renderMenu(items) {
    menuAccordion.innerHTML = '';

    const tipos = ["Food", "Drinks"];

    tipos.forEach(function (tipo) {
        const itemsDelTipo = items.filter(function (item) {
            return item.tipo === tipo;
        });

        if (itemsDelTipo.length === 0) return;

        const tituloTipo = document.createElement('h3');
        tituloTipo.classList.add('menu-tipo-titulo');
        tituloTipo.textContent = tipo === "Food" ? "Food" : "Drinks";
        menuAccordion.appendChild(tituloTipo);

        const grupos = agruparPorCategoria(itemsDelTipo);

        for (const categoria in grupos) {
            const acordeon = crearAcordeonCategoria(categoria, grupos[categoria]);
            menuAccordion.appendChild(acordeon);
        }
    });
}

renderMenu(menuData);