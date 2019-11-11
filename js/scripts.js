function order() {
    var size= parseInt (document.getElementByID("size").value);
    var deliver=parseInt (document.getElementByID("deliver").value);
    var crust= parseInt (document.getElementByID("crust").value);

var total = size + deliver + crust;

document.getElementById("result").innerHTML = size + " " + deliver + " " + crust + " " + total;
}