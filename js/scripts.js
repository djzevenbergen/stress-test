var makeSuggestion = function (warn, health) {



}


$(document).ready(function () {
  $("#nextQuestion").click(function () {
    $("#questionOne").hide();
    $("#questionTwo").show();
  });

  $("#stressForm").submit(function (event) {
    event.preventDefault();

    $("#stressForm").hide();

    $("input:checkbox[name=warning-sign]:checked").each(function () {

      var warningSigns = $(this).val();


    })

    $("input:checkbox[name=health-symptom]:checked").each(function () {

      var healthSymptoms = $(this).val();

    })






  });



})