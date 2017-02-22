var xmlhttp = new XMLHttpRequest();
var url = "data/url.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        Jsonn(myArr);

    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

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
