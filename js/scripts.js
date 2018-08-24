//BUSINESS LOGIC


function Pizza(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
}


function makePizza(pizzaSize, pizzaToppings){
  var newPizza = new Pizza(pizzaSize, pizzaToppings);
  console.log(newPizza);
}






Pizza.prototype.prize = function() {

}







//UI LOGIC

$(document).ready(function(){
  $("form.pizza-form").submit(function(event){
    event.preventDefault();
    var userName = $("input#name").val();
    var pizzaSize = $("#size").val();
    var pizzaToppings = $(".toppings:checkbox:checked").map(function(){
      return $(this).val();
    }).get();
    makePizza(pizzaSize, pizzaToppings);


    // console.log(userName + " " + pizzaSize + " " + typeof pizzaToppings);
  });
});
