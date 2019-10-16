/* ¿Alguna vez te has preguntado cómo sería tu nombre de superhéroe? ¡Descubrámoslo!

Te voy a dar un array con títulos de héroe masculino:
const titulos_masculino = ["Boy", "Man", "Man", "Man", "Man", "Guy", "Mr.", "Doctor" , "El", "Professor", "Captain", "Agent", "The", "The", "The", "The", "Lord", "Sgt.", "General"]

También te voy a dar un array con títulos de héroes femeninas:
const titulos_femenino = ["Girl", "Woman", "Woman", "Woman", "Woman", "Gal", "Miss", "Doctor", "Professor", "Captain", "Agent", "The", "The", "The", "Sgt.", "General"]

También te voy a dar un array con adjetivos molones:
const adjetivos = ["Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic", "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega", "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden", "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"]

Y finalmente un array con sustantivos:
const sustantivos = ["Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger", "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame", "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon", "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night", "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino", "Mole", "Sloth"]

Tu misión va a ser crear una función que elija al azar:
Un título
Un sustantivo
Un adjetivo

Y que retorne un string concatenándolos todos. Por ejemplo: “GENERAL GIANT MOLE” */ 


function getRandom(numMax) {
    return Math.round(Math.random() * (numMax-1) + 0)
}


//funcion mujer


function generarSuperHeroeMujer() {
    //const titulos_masculino = ["Boy", "Man", "Man", "Man", "Man", "Guy", "Mr.", "Doctor" , "El", "Professor", "Captain", "Agent", "The", "The", "The", "The", "Lord", "Sgt.", "General"];
    const titulos_femenino = ["Girl", "Woman", "Woman", "Woman", "Woman", "Gal", "Miss", "Doctor", "Professor", "Captain", "Agent", "The", "The", "The", "Sgt.", "General"];
    const sustantivos = ["Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger", "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame", "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon", "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night", "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino", "Mole", "Sloth"];
    const adjetivos = ["Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic", "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega", "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden", "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"];

    let resultado = "";
    resultado += titulos_femenino[getRandom(titulos_femenino.length)] + " " +  sustantivos[getRandom(sustantivos.length)] + " " + adjetivos[getRandom(adjetivos.length)]

    return resultado;


}



//funcion hombre

function generarSuperHeroeHombre() {

    const titulos_masculino = ["Boy", "Man", "Man", "Man", "Man", "Guy", "Mr.", "Doctor" , "El", "Professor", "Captain", "Agent", "The", "The", "The", "The", "Lord", "Sgt.", "General"];
    //const titulos_femenino = ["Girl", "Woman", "Woman", "Woman", "Woman", "Gal", "Miss", "Doctor", "Professor", "Captain", "Agent", "The", "The", "The", "Sgt.", "General"];
    const sustantivos = ["Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger", "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame", "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon", "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night", "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino", "Mole", "Sloth"];
    const adjetivos = ["Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic", "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega", "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden", "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"];

    
    let resultado = "";

    resultado += titulos_masculino[getRandom(titulos_masculino.length)] + " " +  sustantivos[getRandom(sustantivos.length)] + " " + adjetivos[getRandom(adjetivos.length)]
    return resultado;
       
}  


//botones

let miBotonMujer = document.querySelectorAll(".btn-mujer")[0] //se genero una class en el html para darle un nombre al boton
miBotonMujer.addEventListener("click", function () { 
                                        let input = document.querySelector("#exampleFormControlInput1"); //este es el id del value
                                        input.value = generarSuperHeroeMujer();
                                    })


 let miBotonHombre = document.querySelectorAll(".btn-hombre")[0] //se genero una class en el html para darle un nombre al boton
miBotonHombre.addEventListener("click", function () { 
                                        let input = document.querySelector("#exampleFormControlInput1"); //este es el id del value
                                        input.value = generarSuperHeroeHombre();
                                    })
/*
let miBoton = document.querySelectorAll("body > form > button:nth-child(3)")[0]
miBoton.addEventListener("click", function () { 
    document.write(generarSuperHeroeHombre());
}) */

