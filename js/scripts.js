var score = function(answer1, answer2, answer3, answer4, answer5) {
  return answer1 + answer2 + answer3 + answer4 + answer5;
};


$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();
  var answer1 = parseInt($("creative-logic").val());
  var answer2 = parseInt($("solo-group").val());
  var answer3 = parseInt($("ui").val());
  var answer4 = parseInt($("performance").val());
  var answer5 = parseInt($("desktop").val());
  
  });



});
