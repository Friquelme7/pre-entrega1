const juegos = [new juego("Persona 5", 40000, ["combate por turnos", " novela visual"], ["ps5", "pc", "xbox s"], "un solo jugador", "ingles", "./media/Persona 5.jpg"),
new juego("Hades", 15000, ["roguelike", " accion"], ["ps5", "pc"], "un solo jugador", ["ingles, español"], "./media/Hades.jpg"),
new juego("Hollow knight", 15000, ["plataformas", " 2D"], ["ps5", "pc", "xbox s"], "un solo jugador", ["ingles", "español"]),
new juego("It takes two", 50000, ["cooperativo", " puzzle"], ["ps5", "pc"], "multijugador", ["ingles, español"]),
new juego("Stardew valley", 10000, ["simulador", " 2D"], "pc", ["multijugador", "un solo jugador"], ["ingles, español"], "./media/stardew.jpg"),
new juego("God of war", 60000, ["accion", " aventura"], ["ps5, pc"], "un solo jugador", ["ingles, español"], "./media/GodofWar.jpg"),
new juego("Forza motorsport", 50000, ["carreras", " simulador"], ["xbox s", "pc"], ["multijugador", "un solo jugador"], ["ingles, español"])
];

const carrito = [];


function agregarCarrito(juego) {
    console.log("pepe")
    carrito.push(juegos[juego])
    actualizarContador();
    actualizarCarrito();
}

function quitarCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
    actualizarContador();
}

function actualizarCarrito() {
    tablaHTML.innerHTML = "";
    carrito.forEach((item, index) => {
        let n;
        n = item.nombre.split(" ").join("");
        tablaHTML.innerHTML +=
                                `
                                <th>${index + 1}</th>
                                <td><img class="juegosCarrito" src="${item.imagen}"></img></td>
                                <td>${item.nombre}</td>
                                <td>${item.genero}</td>
                                <td>${item.precio}</td>
                                <td><button id="${n + (index + 1)}" value="${index}" class="btn btn-danger">X</button></td>
                                ` ;
        let btnsCarrito = document.querySelectorAll(".btn-danger");
        btnsCarrito.forEach(item => {
            item.addEventListener("click", () => {
                quitarCarrito(item.value);
            })
        })

    })
}

function actualizarContador() {
    contadorHTML.innerText = `${carrito.length}`;
}

let btnHades;
btnHades = document.body.querySelector("#hades");
btnHades.addEventListener("click", () => { agregarCarrito(+btnHades.value) });

let btnGod;
btnGod = document.body.querySelector("#godOfWar");
btnGod.addEventListener("click", () => { agregarCarrito(+btnGod.value) });

let btnP5;
btnP5 = document.body.querySelector("#persona5");
btnP5.addEventListener("click", () => { agregarCarrito(+btnP5.value) });

let btnStardew;
btnStardew = document.body.querySelector("#stardew");
btnStardew.addEventListener("click", () => { agregarCarrito(+btnStardew.value) });

let carritoHTML;
carritoHTML = document.body.querySelector("#carrito");


let contadorHTML;
contadorHTML = document.body.querySelector("#contador");

let btnItems;
btnItems = document.body.querySelector("btn-danger")

const tablaHTML = document.body.querySelector("#items");



