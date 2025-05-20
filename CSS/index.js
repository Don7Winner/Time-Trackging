$(document).ready(() => {
  $(".daily").hide();
  $(".monthly").hide();
  $("#daily").click(() => {
    $(".daily").show();
    $(".weekly").hide();
    $(".monthly").hide();
  });
  $("#weekly").click(() => {
    $(".daily").hide();
    $(".weekly").show();
    $(".monthly").hide();
  });
  $("#monthly").click(() => {
    $(".daily").hide();
    $(".weekly").hide();
    $(".monthly").show();
  });
});
