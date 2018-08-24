//BUSINESS LOGIC



















//UI LOGIC

$(document).ready(function(){
  $("form.pizza-form").submit(function(event){
    event.preventDefault();
    var userName = $("input#name").val();
    var pizzaSize = $("#size").val();
    var pizzaToppings = $(".toppings:checkbox:checked").val();

    console.log(userName + " " + pizzaSize + " " + pizzaToppings);
  });
});
