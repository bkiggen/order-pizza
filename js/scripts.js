//BUSINESS LOGIC

//pizza object constructor
function Pizza(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.finalPrice = "";
}

//make pizza object
function makePizza(pizzaSize, pizzaToppings){
  var newPizza = new Pizza(pizzaSize, pizzaToppings);
  newPizza.finalPrice = newPizza.price().toFixed(2);
  return newPizza;
}

//calculate pizza cost
Pizza.prototype.price = function(newPizza) {
  var finalPrice = parseInt(this.pizzaSize) + (this.pizzaToppings.length * .5);
  return finalPrice;
}







//UI LOGIC
$(document).ready(function(){
  $("form.pizza-form").submit(function(event){
    //input
    event.preventDefault();
    var userName = $("input#name").val();
    var pizzaSize = $("#size").val();
    var pizzaToppings = $(".toppings:checkbox:checked").map(function(){
      return $(this).val();
    }).get();
    var pizzaObject = makePizza(pizzaSize, pizzaToppings);


    //output
    $(".result").show();
    $(".input").hide();
    $("#final-price").text("$" + pizzaObject.finalPrice);
    pizzaObject.pizzaToppings.forEach(function(item){
      $("#toppings-list").append(item + ", ");
    });
    $("#start-over").click(function(){
      location.reload();
    });
    $("#make-changes").click(function(){
      $(".input").show();
      $(".result").hide();
      $("#toppings-list").empty();
    });
  });
});
