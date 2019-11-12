// function order() {
//     var size= parseInt (document.getElementByID("size").value);
//     var deliver=parseInt (document.getElementByID("deliver").value);
//     var crust= parseInt (document.getElementByID("crust").value);

// var total = size + deliver + crust;

// return document.getElementById("total").innerHTML = size + " " + deliver + " " + crust + " " + total;

// } 
let total=0;

$(document).ready(function(){
    function Eat(flavour, size, deliver, crust,topping,total){
        this.flavour =flavour;
        this.size =size;
        this.deliver =deliver;
        this.crust =crust;
        this.total =total;
        this.topping =topping;
    }

    $("#btn_order").click(function(event){
    let pizzaFlavour =parseInt($("#flvr option:selected").val());
    let pizzaSize =parseInt($("#size option:selected").val());
    let pizzaDeliver =parseInt($("#deliver option:selected").val());
    let pizzaCrust =parseInt($("#crust option:selected").val());
    let pizzaTopping=[];

    $.each($("input[name='toppings']:checked"), function() {
        pizzaTopping.push($(this).val());
      });
    
      let total_topping = pizzaTopping.length * 80;
      total= pizzaSize+pizzaCrust+pizzaDeliver+pizzaTopping;

    $("#pFlavour").html($("#flvr option:selected").val());
    $("#pCrust").html($("#crust option:selected").val());
    $("#pSize").html($("#size option:selected").val());
    $("#pDeliver").html($("#deliver option:selected").val());
    $("#pTopping").html(pizzaTopping.join(","));
    $("#total").html(total);

    event.preventDefault();
    })
});