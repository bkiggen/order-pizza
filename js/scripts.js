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
  switch(newPizza.pizzaSize){
    case "5":
      newPizza.pizzaSize = "Really Small";
      break;
    case "7":
      newPizza.pizzaSize = "Small";
      break;
    case "9":
      newPizza.pizzaSize = "Medium";
      break;
    case "11":
      newPizza.pizzaSize = "Big";
      break;
    case "13":
      newPizza.pizzaSize = "Really Big";
      break;
  };
  return newPizza;
}

//calculate pizza cost
Pizza.prototype.price = function(newPizza) {
  var finalPrice = parseInt(this.pizzaSize) + (this.pizzaToppings.length * .5);
  return finalPrice;
};

Pizza.prototype.toppingsList = function(){
  var listArray = [];
  this.pizzaToppings.forEach(function(item){
    listArray.push(item);
  });
  var listString = listArray.join(", ");
  return listString;
};



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
    $(".input").hide();
    $(".result").fadeIn();
    $("#name-output").text(userName);
    $("#final-price").text("$" + pizzaObject.finalPrice);
    $("#pizza-size-output").text(pizzaObject.pizzaSize);
    // console.log(pizzaObject);
    var toppings = pizzaObject.toppingsList();
      $("#pizza-toppings-output").text(toppings);
    if(pizzaObject.pizzaToppings.length === 0) {
      $("#pizza-toppings-output").text("None");
    };
    $("#start-over").click(function(){
      location.reload();
    });

    $("#make-changes").click(function(){
      $(".input").fadeIn();
      $(".result").hide();
      $("#toppings-list").empty();
    });
  });
});
