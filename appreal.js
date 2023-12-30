const juegos = [new juego("Persona 5", 40000, ["combate por turnos", " novela visual"], ["ps5", "pc", "xbox s"], "un solo jugador", "ingles"),
new juego("Hades", 15000, ["roguelike", " accion"], ["ps5", "pc"], "un solo jugador", ["ingles, español"]),
new juego("Hollow knight", 15000, ["plataformas", " 2D"], ["ps5", "pc", "xbox s"], "un solo jugador", ["ingles", "español"]),
new juego("It takes two", 50000, ["cooperativo", " puzzle"], ["ps5", "pc"], "multijugador", ["ingles, español"]),
new juego("Stardew valley", 10000, ["simulador", " 2D"], "pc", ["multijugador", "un solo jugador"], ["ingles, español"]),
new juego("God of war", 60000, ["accion", " aventura"], ["ps5, pc"], "un solo jugador", ["ingles, español"]),
new juego("Forza motorsport", 50000, ["carreras", " simulador"], ["xbox s", "pc"], ["multijugador", "un solo jugador"], ["ingles, español"])
];

const carrito = [];

function agregarCarrito(juego){
    console.log("pepe")
    carrito.push(juegos[juego])
}
function mostrarCarrito(){
    console.log("carrito")

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

let btnHades;
btnHades = document.body.querySelector("#hades");
btnHades.addEventListener("click", () => {agregarCarrito(+btnHades.value)});

let btnGod;
btnGod = document.body.querySelector("#godOfWar");
btnGod.addEventListener("click", () => {agregarCarrito(+btnGod.value)});

let btnP5;
btnP5 = document.body.querySelector("#persona5");
btnP5.addEventListener("click", () => {agregarCarrito(+btnP5.value)});

let carritoHTML;
carritoHTML = document.body.querySelector("#carrito");
carritoHTML.addEventListener("click", mostrarCarrito);


