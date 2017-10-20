var score = function(answer1, answer2, answer3, answer4, answer5) {
  return answer1 + answer2 + answer3 + answer4 + answer5;
};


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
  var input1 = parseInt($("#creative-logic").val());
  var input2 = parseInt($("#industry").val());
  var input3 = parseInt($("#easy-hard").val());
  var input4 = parseInt($("#start-up").val());
  var input5 = parseInt($("#desktop").val());

  var results = score(input1, input2, input3, input4, input5);

  if (results <= 6) {
    $("#design, .design, .card").show();
  } else if (results === 7) {
    $("#ruby, .ruby, .card").show();
  } else if (results > 7) {
    $("#c-sharp, .c-sharp, .card").show();
  }

  });
});
