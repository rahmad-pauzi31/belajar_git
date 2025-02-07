var nilaihasil = prompt("nilai hasil", 0);
var jawab = nilaihasil; 
var a = 90
var b = 70
var c = 60
var d = 60
var e = 40
switch(true){
    case (jawab > a):
        document.body.innerHTML = "<h1>sangat baik</h1>";
        break;
    case (jawab > b):
        document.body.innerHTML = "<h1>baik</h1>";
        break;
    case (jawab > c):
        document.body.innerHTML = "<h1>cukup baik</h1>";
        break;
    case (jawab > d):
        document.body.innerHTML = "<h1>cukup</h1>";
        break;
    case (jawab < e):
        document.body.innerHTML = "<h1>tidak lulus</h1>";
        break;
}