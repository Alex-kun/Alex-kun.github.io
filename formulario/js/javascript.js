// JS Web Code
function Inicio(){
    var inicio = document.getElementById("iniciotxt");
    
    while (inicio == "España") {
        inicio.setAttribute("class", "");
    }
   
}
function GeneralOn() {
    
    var Start = document.getElementById("Start");
    Start.setAttribute("class", "startformOff");

    var General = document.getElementById("General");
    General.setAttribute("class", "GeneralOn");
   
    var Energia = document.getElementById("Energia");
    Energia.setAttribute("class", "EnergiaOff");
//-------------
    var Agua = document.getElementsByClassName("AguaOff");
    Agua.setAttribute("class", "AguaOff");

    var Materiales = document.getElementsByClassName("MaterialesOff");
    Materiales.setAttribute("class", "MaterialesOff");

    var Transportes = document.getElementsByClassName("TransportesOff");
    Transportes.setAttribute("class", "TransportesOff");
}

function EnergiaOn() {
    var Start = document.getElementById("Start");
    Start.setAttribute("class", "startformOff");

    var General = document.getElementById("General");
    General.setAttribute("class", "GeneralOff");

    var Energia = document.getElementById("Energia");
    Energia.setAttribute("class", "EnergiaOn");
//--------------------
    var Agua = document.getElementById("Agua");
    Agua.setAttribute("class", "AguaOff");

    var Materiales = document.getElementById("Materiales");
    Materiales.setAttribute("class", "MaterialesOff");

    var Transportes = document.getElementById("Transportes");
    Transportes.setAttribute("class", "TransportesOff");
}

function ResetBtn() {
    var Start = document.getElementById("Start");
    Start.setAttribute("class", "startform");

    var General = document.getElementById("General");
    General.setAttribute("class", "GeneralOff");

    var Energia = document.getElementById("Energia");
    Energia.setAttribute("class", "EnergiaOff");
}


    //General.element.class[0]("EnergiaOn");
    


function GeneralShowHide() {
//Energia
    var myElement = document.querySelector(".Energia");
    myElement.style.display = "none";
//Agua
    var myElement2 = document.querySelector(".Agua");
    myElement2.style.display = "none";
//Materiales
    var myElement3 = document.querySelector(".Materiales");
    myElement3.style.display = "none";
//Transportes
    var myElement4 = document.querySelector(".Transportes");
    myElement4.style.display = "none";
//General
    var myElement5 = document.querySelector(".General");
    myElement5.style.display = "initial";

    
}
function EnergiaShowHide() {
    //Energia
    var myElement = document.querySelector(".Energia");
    myElement.style.display = "initial";
    //Agua
    var myElement2 = document.querySelector(".Agua");
    myElement2.style.display = "none";
    //Materiales
    var myElement3 = document.querySelector(".Materiales");
    myElement3.style.display = "none";
    //Transportes
    var myElement4 = document.querySelector(".Transportes");
    myElement4.style.display = "none";
    //General
    var myElement5 = document.querySelector(".General");
    myElement5.style.display = "none";


}



//----Teoria 2------//







//----Teoria------
function PruebaUno() {
    alert("Cuidadorrr funcioooooon");
    document.write("hola");
}
function PruebaDos(texto) {
    alert(texto);
    var x = "</br>" + 2 + texto;
    document.Write(x);
}
function Multiplicacion() {
    
    var num1 = parseInt(prompt("Escriba un numero"));
    var num2 = parseInt(prompt("Escriba un numero"));

    
    
    var multi = (num1 + num2);
    if (multi == 0) {
        document.write("No texto");
    }
    else {
        document.write(multi);
    }
    
}
function encabezado() {
    var num1 = prompt("Escriba un numero del 1 al 6");
    if (num1 <= 6) {
        document.write("<h" + num1 + ">Hola</h" + num1 + ">");
    }
    else {
        error();

    }
    
}

function error() {
    alert("Error");
    encabezado();
}
function Array(){
    var car = ["x", "y", "z"];
    
    for (i = 0; i < car.length; i++) {
        document.write(car[i] + "<br/>");
    }
}


//------------