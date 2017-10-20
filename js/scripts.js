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
    $("img.design, #design, .card").fadeIn();
  } else if (results === 7) {
    $("img.ruby, #ruby, .card").fadeIn();
  } else if (results > 7) {
    $("img.c-sharp, #c-sharp, .card").fadeIn();
  }

  $("img.design, #design").click(function() {
    $("img.design, #design, .card").hide();
    $("form")[0].reset();
  });

  $("img.c-sharp, #c-sharp").click(function() {
    $("img.c-sharp, #c-sharp, .card").hide();
    $("form")[0].reset();
  });

  $("img.ruby, #ruby").click(function() {
    $("img.ruby, #ruby, .card").hide();
    $("form")[0].reset();
  });

  });
});
