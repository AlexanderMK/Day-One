var Calculator = require('./../js/pingPong.js').calculatorModule
$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalcultor = new Calcultor("hot pink")
    var output = simpleCalcultor.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
