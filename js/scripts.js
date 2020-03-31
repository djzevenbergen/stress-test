var makeSuggestion = function (warn, health) {
  if (health.includes("death")) {
    $("#suggestionThree").removeClass("hide");
  } else if (warn.includes("doom")) {
    $("#suggestionTwo").removeClass("hide");
  } else {
    $("#suggestionOne").removeClass("hide");
  }

}


function palindrome(word) {
  var forward = word.split("");
  var back = word.split("");
  var backward = back.reverse().slice();

  var f = forward.join();
  var b = backward.join();

  if (f === b) {
    return true;
  } else {
    return false;
  }
}

//   var f_index = 0;
//   var b_index = backward.length - 1;
//   var isTrue = true;
//   while (b_index >= 0) {
//     if (forward[f_index] === backward[b_index]) {
//       b_index--;
//       f_index++;
//     }
//     else {
//       isTrue = false;
//     }
//   }
//   return isTrue;
// }


$(document).ready(function () {
  $("#nextQuestion").click(function () {
    $("#questionOne").hide();
    $("#questionTwo").show();
    alert(palindrome("Hello olleH"));


  });

  $("#stressForm").submit(function (event) {
    event.preventDefault();

    $("#stressForm").hide();

    var warningArrays = [];
    var healthArrays = [];

    $("input:checkbox[name=warning-sign]:checked").each(function () {

      var warningSigns = $(this).val();
      warningArrays.push(warningSigns);

    });

    $("input:checkbox[name=health-symptom]:checked").each(function () {

      var healthSymptoms = $(this).val();
      healthArrays.push(healthSymptoms);

    });

    makeSuggestion(warningArrays, healthArrays);

  });

});

