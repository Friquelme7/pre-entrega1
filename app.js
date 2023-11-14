let ciclo = false;
let precio = 0;
let precioFinal = 0;
let cantidadPersona = 0;
let cantidadHades = 0;
let cantidadPokemon = 0;
let cantidadFifa = 0;
let cantidadTotal = 0;
const PERSONA = 15000;
const HADES = 5000;
const POKEMON = 12000;
const FIFA = 20000;

alert("Bienvenido a Ustore");

do{
    ciclo = prompt("Ingrese los juegos que quiere añadir al carrito 🛒 \nPersona - 15.000$ \nHades - 5.000$ \nPokemon - 12.000$ \nFifa - 20.000$ \nesc - para dejar de comprar")

    switch(ciclo){
        case "persona":
            precio = precio + PERSONA;
            cantidadPersona++;
            alert("Agregaste Persona al carrito ✨")
            break;

        case "hades":
            precio = precio + HADES;
            cantidadHades++;
            alert("Agregaste Hades al carrito ✨")
            break;

        case "pokemon":
            precio = precio + POKEMON;
            cantidadPokemon++;
            alert("Agregaste Pokemon al carrito ✨")
            break;

        case "fifa":
            precio = precio + FIFA;
            cantidadFifa++;
            alert("Agregaste Fifa al carrito ✨")
            break;

        case "esc":
            break;

        default:
            alert("Ese juego no esta en nuestro catalogo :(")
            break;
    }

} while(ciclo !== "esc");

cantidadTotal = cantidadPersona + cantidadHades + cantidadPokemon + cantidadFifa;
if (precio > 0) {
    precioFinal = precio + precio; /// los impuestos para juegos de plataformas del estilo Steam son del 100% 
    alert(`Precio - ${precio} \nPrecio con impuestos incluidos - ${precioFinal} \nUsted compro un total de ${cantidadTotal} juegos`);
} else{
        alert("Usted no agrego ningun juego al carrito")
}
