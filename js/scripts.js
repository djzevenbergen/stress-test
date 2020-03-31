var makeSuggestion = function (warn, health) {
  if (health.includes("death")) {
    $("#suggestionThree").removeClass("hide");
  } else if (warn.includes("doom")) {
    $("#suggestionTwo").removeClass("hide");
  } else {
    $("#suggestionOne").removeClass("hide");
  }

}


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

