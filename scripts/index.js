function makeImportant() {
  console.log("makeImportant called");
  let hide = "hide";
  if ($("#I").hasClass(hide)) {
    $("#I").toggleClass(hide);
    $("#nI").toggleClass(hide);
  } else if ($("#nI").hasClass(hide)) {
    $("#nI").toggleClass(hide);
    $("#I").toggleClass(hide);
  }
}

function toggleForm() {
  console.log("toggleForm called");
  let hide = "hide";
  //   $("#task-form").toggleClass(hide);
  $("#task-form").toggle();
}
// Here is the Init function that will be called when the page loads
function init() {
  console.log("index.js loaded");

  //   Events
  $("#nI").click(makeImportant);
  $("#I").click(makeImportant);
  $("#btn-list").click(toggleForm);
}

window.onload = init;
