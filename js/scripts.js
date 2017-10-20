var score = function(answer1, answer2, answer3, answer4, answer5) {
  return answer1 + answer2 + answer3 + answer4 + answer5;
};


$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();
  var input1 = parseInt($("#creative-logic").val());
  var input2 = parseInt($("#solo-group").val());
  var input3 = parseInt($("#ui").val());
  var input4 = parseInt($("#performance").val());
  var input5 = parseInt($("#desktop").val());

  var results = score(input1, input2, input3, input4, input5); {

  if (results         ) {
    $("#front-end").show();
  } else if (results            ) {
    $("#back-end").show();
  } else if (results          ) {
    $("#full-stack").show();
  }



  }

  });



});
