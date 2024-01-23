var today = dayjs();
const calendarTimesArray = [
  dayjs().hour(9).format("HH 00"),
  dayjs().hour(10).format("HH 00"),
  dayjs().hour(11).format("HH 00"),
  dayjs().hour(12).format("HH 00"),
  dayjs().hour(13).format("HH 00"),
  dayjs().hour(14).format("HH 00"),
  dayjs().hour(15).format("HH 00"),
  dayjs().hour(16).format("HH 00"),
  dayjs().hour(17).format("HH 00"),
];

const timeSlots = $("#timeSlots");
var savedData = JSON.parse(localStorage.getItem("savedData"));
var savedDescription = $("this.previousSibling.textContent");

//creates calendar layout
for (let i = 0; i < calendarTimesArray.length; i++) {
  //creates a row for each time slot
  var timeSlot = $("<div>");
  timeSlot.addClass("row");
  timeSlots.append(timeSlot);
  //creates a div for the time
  var hour = $("<div>");
  hour.addClass("hour col-2 d-flex align-items-center justify-content-center");
  hour.attr("id", "time" + [i]);
  hour.appendTo(timeSlot);
  hour.text(calendarTimesArray[i]);
  //creates the text box for the task description input
  var description = $("<textarea>");
  description.addClass("description col-8");
  description.attr("id", "description" + [i]);
  description.attr("contenteditable", true);
  //retrieves any saved data from local storage
  description.val(JSON.parse(localStorage.getItem("saveData" + [i])));
  //detects the time of day and gives classes to the description textarea accordingly
  if (today.format("HH 00") > calendarTimesArray[i]) {
    description.addClass("past");
  } else if (today.format("HH 00") === calendarTimesArray[i]) {
    description.addClass("present");
  }
  if (today.format("HH 00") < calendarTimesArray[i]) {
    description.addClass("future");
  }
  description.value += JSON.parse(localStorage.getItem("saveData1"));
  description.appendTo(timeSlot);
  //creates the save button for each time slot
  var saveButton = $("<div>");
  saveButton.addClass(
    "col-2 saveBtn d-flex align-items-center justify-content-center"
  );
  saveButton.attr("id", "save" + [i]);
  saveButton.appendTo(timeSlot);
  var saveIcon = $(
    '<i class="fa-regular fa-floppy-disk" style="color: #ffffff;"></i>'
  );
  saveButton.append(saveIcon);
}

$(document).ready(function () {
  //functionality for each save button
  var saveButton1 = $("#save0");
  saveButton1.on("click", function () {
    localStorage.setItem("saveData0", JSON.stringify($("#description0").val()));
    console.log("Saved 9am task!");
  });

  var saveButton1 = $("#save1");
  saveButton1.on("click", function () {
    localStorage.setItem("saveData1", JSON.stringify($("#description1").val()));
    console.log("Saved 10am task!");
  });

  var saveButton1 = $("#save2");
  saveButton1.on("click", function () {
    localStorage.setItem("saveData2", JSON.stringify($("#description2").val()));
    console.log("Saved 11am task!");
  });

  var saveButton1 = $("#save3");
  saveButton1.on("click", function () {
    localStorage.setItem("saveData3", JSON.stringify($("#description3").val()));
    console.log("Saved 12pm task!");
  });

  var saveButton1 = $("#save4");
  saveButton1.on("click", function () {
    localStorage.setItem("saveData4", JSON.stringify($("#description4").val()));
    console.log("Saved 1pm task!");
  });

  var saveButton1 = $("#save5");
  saveButton1.on("click", function () {
    localStorage.setItem("saveData5", JSON.stringify($("#description5").val()));
    console.log("Saved 2pm task!");
  });

  var saveButton1 = $("#save6");
  saveButton1.on("click", function () {
    localStorage.setItem("saveData6", JSON.stringify($("#description6").val()));
    console.log("Saved 3pm task!");
  });

  var saveButton1 = $("#save7");
  saveButton1.on("click", function () {
    localStorage.setItem("saveData7", JSON.stringify($("#description7").val()));
    console.log("Saved 4pm task!");
  });

  var saveButton1 = $("#save8");
  saveButton1.on("click", function () {
    localStorage.setItem("saveData8", JSON.stringify($("#description8").val()));
    console.log("Saved 5pm task!");
  });
  //end of doc.ready, functions go above here
});
