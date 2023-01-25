let important = `<i class="nImportant fa-solid fa-ban"></i>`;
function makeImportant() {
  console.log("makeImportant called");
  let hide = "hide";

  if ($("#I").hasClass(hide)) {
    $("#I").toggleClass(hide);
    $("#nI").toggleClass(hide);
    important = `<i class="important fa-solid fa-circle-exclamation"></i>`;
  } else if ($("#nI").hasClass(hide)) {
    $("#nI").toggleClass(hide);
    $("#I").toggleClass(hide);
    important = `<i class="nImportant fa-solid fa-ban"></i>`;
  }
}
// To hide the form
function toggleForm() {
  console.log("toggleForm called");
  // let hide = "hide";
  //   $("#task-form").toggleClass(hide);
  $("#task-form").toggle();
}
// To clear the form
function clearForm() {
  console.log("clearForm called");
  $("#txt-title").val("");
  $("#txt-desc").val("");
  $("#sel-due").val("");
  $("#sel-category").val("");
  $("#tel-contact").val("");
  $("#sel-status").val("");
}
// To submit the form
function submit() {
  console.log("submit called");
  let title = $("#txt-title").val();
  let desc = $("#txt-desc").val();
  let due = $("#sel-due").val();
  let category = $("#sel-category").val();
  let contact = $("#tel-contact").val();
  let status = $("#sel-status").val();

  let task = new Task(important, title, desc, due, category, contact, status);

  $.ajax({
    type: "POST",
    url: "https://fsdiapi.azurewebsites.net/api/tasks/",
    data: JSON.stringify(task),
    contentType: "application/json",
    success: function (res) {
      console.log(`${res}`);
      displayTask(task);
      clearForm();
    },
    error: function (error) {
      console.log(`${error}`);
      alert("there has been an error");
    },
  });
}

function displayTask(task) {
  let display = `
  <div class="container flex-container-1">
      <div class="imptsk">${task.important}</div>
    <div>
    <h3 class="title"><u>${task.title}</u></h3>
    <p id="description">${task.desc}</p>
    </div>
    <div class="imptsk"><label>${task.due}</label>
    <label>${task.status}</label>
    </div>
    <div class="imptsk"><label>${task.category}</label>
    <label>${task.contact}</label>
    </div>
    </div>
  `;
  $("#tasks").append(display);
}

function testRequest() {
  console.log("testRequest called");
  $.ajax({
    type: "GET",
    url: "https://fsdiapi.azurewebsites.net/",
    success: function (res) {
      console.log(`${res}`);
    },
    error: function (error) {
      console.log(`${error}`);
    },
  });
}

function taskLoad() {
  $.ajax({
    type: "GET",
    url: "https://fsdiapi.azurewebsites.net/api/tasks",
    success: function (res) {
      let tasks = JSON.parse(res);
      for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        if (task.name == "John") {
          displayTask(task);
        }
      }
    },
    error: function (error) {
      console.log(`${error}`);
    },
  });
}
// Here is the Init function that will be called when the page loads
function init() {
  console.log("index.js loaded");

  taskLoad();

  //   Events
  $("#nI").click(makeImportant);
  $("#I").click(makeImportant);
  $("#btn-list").click(toggleForm);
  $("#btn-submit").click(submit);
}

window.onload = init;
