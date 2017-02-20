var xmlhttp = new XMLHttpRequest();
var url = "../data/url.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function Json(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a class="linkbox" href="' + arr[i].url + '">' +
        arr[i].url + '</a>';
    }
    document.getElementById("id01").innerHTML = out;
}
