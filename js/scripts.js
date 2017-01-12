$(document).ready(function() {

  var age = parseInt(prompt("What is your age?"));

  if (age > 21) {
    $("#adults").show();
    } else {
      $("#kids").show();
    };



});
