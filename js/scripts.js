//BUSINESS LOGIC
function Pizza(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
}

function makePizza(pizzaSize, pizzaToppings){
  var newPizza = new Pizza(pizzaSize, pizzaToppings);
  var finalPrice = newPizza.price().toFixed(2);
  return finalPrice;
}

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
    var pizzaPrice = makePizza(pizzaSize, pizzaToppings);
    console.log(pizzaPrice);

    //output
    $(".result").show();
    $(".input").hide();
    $("#start-over").click(function(){
      location.reload();
    });
    $("#make-changes").click(function(){
      $(".input").show();
      $(".result").hide();
    });
  });
});
