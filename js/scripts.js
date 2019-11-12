// function order() {
//     var size= parseInt (document.getElementByID("size").value);
//     var deliver=parseInt (document.getElementByID("deliver").value);
//     var crust= parseInt (document.getElementByID("crust").value);

// var total = size + deliver + crust;

// return document.getElementById("total").innerHTML = size + " " + deliver + " " + crust + " " + total;

// } 

$(document).ready(function(){
    $("#btn_order").click(function(event){
    let pizzaFlavour =$("#name option:selected").val();
    let pizzaSize =$("#size option:selected").val();
    let pizzaDeliver =$("#deliver option:selected").val();
    let pizzaCrust =$("#crust option:selected").val();
    
    })
});