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
    $("#epicodus").hide();
  } else if (results === 7) {
    $("img.ruby, #ruby, .card").fadeIn();
    $("#epicodus").hide();
  } else if (results > 7) {
    $("img.c-sharp, #c-sharp, .card").fadeIn();
    $("#epicodus").hide();
  }

  $("img.design, #design").click(function() {
    $("img.design, #design, .card").fadeOut();
    $("#epicodus").fadeIn();
    $("form")[0].reset();
  });

  $("img.c-sharp, #c-sharp").click(function() {
    $("img.c-sharp, #c-sharp, .card").fadeOut();
    $("#epicodus").fadeIn();
    $("form")[0].reset();
  });

  $("img.ruby, #ruby").click(function() {
    $("img.ruby, #ruby, .card").fadeOut();
    $("#epicodus").fadeIn();
    $("form")[0].reset();
  });

  });
});
