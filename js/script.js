// JavaScript source code
var xmlhttp = new XMLHttpRequest();
var url = "data/url.json";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        ContentDiv(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

/*
INNER HTML
function Jsonn(arr) {
    var out = "";
    var i;

    for (i = 0; i < arr.length; i++) {
        if (arr[i].priority == "true") {
            out += '<a class="linkbox fixedpost" href="' + arr[i].url + '">' +
        arr[i].display + '</a>';
        }
        if (arr[i].priority == "false") {
            out += '<a class="linkbox" href="' + arr[i].url + '">' +
            arr[i].display + '</a>';
        }

    }
    document.getElementById("id01").innerHTML = out;
}
 */

function Content(arr){
    var element = document.getElementById("id01");
    for (i = 0; i < arr.length; i++) {
            var anchor = document.createElement("a");
            anchor.className = 'linkbox';
            anchor.setAttribute('href', arr[i].url);
            var label = document.createTextNode(arr[i].display);
            anchor.appendChild(label);
            element.appendChild(anchor);

    }
}

function ContentDiv(arr) {
    var element = document.getElementById("id01");
    for (i = 0; i < arr.length; i++) {
        if (arr[i].status == "yes") {
            //div principal
            var firstDiv = document.createElement("div");
            firstDiv.className = 'linkdiv'

            /*enlace*/
            var anchor = document.createElement("a");
            anchor.className = 'linkbox';
            anchor.setAttribute('href', arr[i].url);
            anchor.setAttribute('target', 'blank');
            var label = document.createTextNode(arr[i].display);
            anchor.appendChild(label);

            /*parrafo*/
            var anchor1 = document.createElement("div");
            var label1 = document.createTextNode(arr[i].description);
            anchor1.appendChild(label1);
            anchor1.setAttribute('class', 'parrafo');



            element.appendChild(firstDiv);
            firstDiv.appendChild(anchor)
            anchor.appendChild(anchor1);
        }
        else if (arr[i].status == "no") {

        }


        
    }
}

function enlace() {
    /*window.location = arr;*/
}

/*Funcion de apertura y cerrada de about me*/
function aboutmeOn(){
    var Start = document.getElementById("footer");
    Start.setAttribute("class", "footerOff");
    Start.setAttribute("onclick", "aboutmeOff()");
}
function aboutmeOff(){
    var Start = document.getElementById("footer");
    Start.setAttribute("class", "footerOn");
    Start.setAttribute("onclick", "aboutmeOn()");
}
/*cierrre cuando pulso en otro lado*/
function down() {
    var footer = document.getElementById("footer");
    var estado = footer.getAttribute("class");

    if (estado == "footerOn") {
        footer.setAttribute("class", "footerOff");
        footer.setAttribute("onclick", "aboutmeOff()");
    }
}
