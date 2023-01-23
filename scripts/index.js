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
  let hide = "hide";
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
  displayTask(task);
  clearForm();
}

function displayTask(task) {
  // let table = `
  // <table>
  // <thead>
  //   <tr>
  //     <th class="tablenumber">Pet #</th>
  //     <th class="tablename">Name</th>
  //     <th class="tableage">Age</th>
  //     <th class="tablegender">Gender</th>
  //     <th class="tablepayment">Payment</th>
  //     <th>Delete</th>
  //   </tr>
  //     </thead><tbody id="tableBody"></tbody></table>`;
  let display = `
  <div class="container flex-container-1">
      <div>${task.important}</div>
    <div>
    <h3><u>${task.title}</u></h3>
    <p id="description">${task.desc}</p>
    </div>
    <div><label>${task.due}</label>
    <label>${task.status}</label>
    </div>
    <div><label>${task.category}</label>
    <label>${task.contact}</label>
    </div>
    </div>
  `;
  $("#tasks").append(display);
  // $("#tasks").append(table);
  // $("#tableBody").append(display);
}
// Here is the Init function that will be called when the page loads
function init() {
  console.log("index.js loaded");

  //   Events
  $("#nI").click(makeImportant);
  $("#I").click(makeImportant);
  $("#btn-list").click(toggleForm);
  $("#btn-submit").click(submit);
}

window.onload = init;
