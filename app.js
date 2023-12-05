const juegos = [new juego ("Persona 5", 40000, ["combate por turnos", " novela visual"], ["ps5", "pc", "xbox s"], "un solo jugador", "ingles"),
                new juego ("Hades", 15000, ["roguelike", " accion"], ["ps5", "pc"], "un solo jugador", ["ingles, español"]),
                new juego ("Hollow knight", 15000, ["plataformas", " 2D"], ["ps5", "pc", "xbox s"], "un solo jugador", ["ingles", "español"]),
                new juego ("It takes two", 50000, ["cooperativo", " puzzle"], ["ps5", "pc"], "multijugador", ["ingles, español"]),
                new juego ("Stardew valley", 10000, ["simulador", " 2D"], "pc", ["multijugador", "un solo jugador"], ["ingles, español"]),
                new juego ("God of war", 60000, ["accion", " aventura"], ["ps5, pc"], "un solo jugador", ["ingles, español"]),
                new juego ("Forza motorsport", 50000, ["carreras", " simulacion"], ["xbox s", "pc"], ["multijugador", "un solo jugador"], ["ingles, español"])
];

const carrito = [];

function listaJuegos(){
    let menu = ``;
    juegos.forEach((juego, index) => {
        menu = menu + 
        `${index + 1} - ${juego.nombre} \n      genero : ${juego.genero} \n      precio : ${juego.precio}$ \n\n`
    });
    let dato = prompt(menu);
    if(dato > 0 && dato <= juegos.length){
        carrito.push(juegos[dato - 1]);
        alert(`Usted agrego ${juegos[dato - 1].nombre}`)
    }
} 
function opciones(){
    let menu = `Bienvenido a U-store :) \n 1 - ver lista de juegos completa \n 2 - filtrar lista \n 3 - ver juegos en descuento \n 4 - ver carrito`;
    return prompt(menu);
}
function buscarJuego(){
    let menu = `Desea buscar su juego por : \n 1 - nombre \n 2 - genero \n 3 - plataformas`;
    let dato = +prompt(menu);
    switch(dato){
        case 1:
            let menu1 = `Ingrese el nombre del juego que desea buscar`;
            let dato2 = prompt(menu1); 
            const encontrado = juegos.find((jueg) => jueg.nombre === dato2)
            let dato3 = +prompt(`${encontrado.nombre} \ngenero : ${encontrado.genero}\nplataformas : ${encontrado.plataformas}\nmodo : ${encontrado.modo}\nprecio : ${encontrado.precio}$ \n\n 1 - para agregar al carrito \n 2 - para volver al menu principal`)
            if(dato3 == 1){
                carrito.push(encontrado)
            }else if (dato3 == 2){
                break
            };
    }

}
function menuPrincipal(){
    let dato;
    do{
        dato = opciones();
        if(dato == 1){
            listaJuegos();
        }
        else if(dato == 2){
            buscarJuego()
        }
    }while(dato != "esc")
}

menuPrincipal();