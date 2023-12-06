const juegos = [new juego("Persona 5", 40000, ["combate por turnos", " novela visual"], ["ps5", "pc", "xbox s"], "un solo jugador", "ingles"),
new juego("Hades", 15000, ["roguelike", " accion"], ["ps5", "pc"], "un solo jugador", ["ingles, español"]),
new juego("Hollow knight", 15000, ["plataformas", " 2D"], ["ps5", "pc", "xbox s"], "un solo jugador", ["ingles", "español"]),
new juego("It takes two", 50000, ["cooperativo", " puzzle"], ["ps5", "pc"], "multijugador", ["ingles, español"]),
new juego("Stardew valley", 10000, ["simulador", " 2D"], "pc", ["multijugador", "un solo jugador"], ["ingles, español"]),
new juego("God of war", 60000, ["accion", " aventura"], ["ps5, pc"], "un solo jugador", ["ingles, español"]),
new juego("Forza motorsport", 50000, ["carreras", " simulacion"], ["xbox s", "pc"], ["multijugador", "un solo jugador"], ["ingles, español"])
];

const carrito = [];

function listaJuegos() {
    let menu = ``;
    juegos.forEach((juego, index) => {
        menu = menu + `${index + 1} - ${juego.nombre} \n      precio : ${juego.precio}$ \n\n`
    });
    let dato;
    do {
        dato = +prompt(menu);
    } while (dato === 0 || dato > juegos.length)
    if (dato > 0 && dato <= juegos.length) {
        do {
            dato2 = +prompt(`Usted selecciono:\n\n${juegos[dato - 1].nombre}\nGenero : ${juegos[dato - 1].genero}\nPlataformas : ${juegos[dato - 1].plataformas}\nPrecio : ${juegos[dato - 1].precio}\n\n 1 : agregar al carrito \n 2 : volver al menu principal`)
        } while (dato2 <= 0 || dato2 > 2)
    }

    if (dato2 === 1) {
        carrito.push(juegos[dato - 1]);
        alert(`Usted agrego ${juegos[dato - 1].nombre}`)
    }

}



function opciones() {
    let menu = `Bienvenido a U-store :) \n 1 - Agregar juegos al carrito \n 2 - Buscar juegos \n 3 - Ver carrito`;
    return prompt(menu).toLowerCase();
}

function buscarJuego() {
    let menu = `Desea buscar su juego por : \n 1 - Nombre \n 2 - Genero \n 3 - Plataformas \n 4 - Vovler al menu anterior`;
    let dato;
    do {
        dato = +prompt(menu);
    } while (dato <= 0 || dato > 4)
    switch (dato) {
        case 1:
            let menu1 = `Ingrese el nombre del juego que desea buscar`;
            let dato2 = prompt(menu1);
            let dato3;
            const encontrado = juegos.find((jueg) => jueg.nombre.toUpperCase() === dato2.toUpperCase())
            if (encontrado != undefined) {
                dato3 = +prompt(`${encontrado.nombre} \ngenero : ${encontrado.genero}\nplataformas : ${encontrado.plataformas}
            \nmodo : ${encontrado.modo}\nprecio : ${encontrado.precio}$ \n\n 1 - para agregar al carrito \n 2 - para volver al menu principal`)
            }
            else {
                alert("Lo sentimos, ese juego no se encuentra en nuestro catalogo");
                break;
            }
            if (dato3 == 1) {
                carrito.push(encontrado)
                break
            } else if (dato3 == 2) {
                break
            };
        case 2:
            let menu2 = "ingrese el genero que quiere buscar"
            let dato4 = prompt(menu2);

        case 3:
            let menu3 = "ingrese la plataforma que quiere buscar"
            let dato5 = prompt(menu3);
        
        case 4: 
            break;
    }

}

function verCarrito() {
    let menu = `CARRITO 🛒\n\n`;
    let total = 0;
    if (carrito.length > 0) {
        carrito.forEach((juego, index) => {
            total += juego.precio;
            menu = menu + `${index + 1} - ${juego.nombre} \n      precio : ${juego.precio}$ \n\n`
        });
        menu = menu + ` Precio total : ${total}$`
        alert(menu);
    }
    else {
        menu = "CARRITO 🛒\n\nUsted no agregado ningun juego al carrito"
        alert(menu);
    }
}
function menuPrincipal() {
    let dato;
    do {
        dato = opciones();
        if (dato == 1) {
            listaJuegos();
        }
        else if (dato == 2) {
            buscarJuego()
        }
        else if (dato == 3) {
            verCarrito()
        }
    } while (dato != "esc")
}

menuPrincipal();