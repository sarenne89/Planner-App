var today = dayjs();
const calendarTimesArray = [
  //please excuse this minor hack!
  "0" + dayjs().hour(9).format("H A"),
  dayjs().hour(10).format("H A"),
  dayjs().hour(11).format("H A"),
  dayjs().hour(12).format("H A"),
  dayjs().hour(13).format("H A"),
  dayjs().hour(14).format("H A"),
  dayjs().hour(15).format("H A"),
  dayjs().hour(16).format("H A"),
  dayjs().hour(17).format("H A"),
];
const timeSlots = $("#timeSlots");

$(document).ready(function () {
  //creates calendar layout
  for (let i = 0; i < calendarTimesArray.length; i++) {
    //creates a row for each time slot
    var timeSlot = $("<div>");
    timeSlot.addClass("row");
    timeSlots.append(timeSlot);
    //creates a div for the time
    var hour = $("<div>");
    hour.addClass(
      "hour col-2 d-flex align-items-center justify-content-center"
    );
    hour.attr("id", "time" + [i]);
    hour.appendTo(timeSlot);
    hour.text(calendarTimesArray[i]);
    //creates the text box for the task description input
    var description = $("<div>");
    description.addClass(
      "description col-8 d-flex align-items-center justify-content-center"
    );
    description.attr("id", "description" + [i]);
    //detects the time of day and gives classes to the description div accordingly
    if (today.format("H A") > calendarTimesArray[i]) {
      description.addClass("past");
    } else if (today.format("H A") === calendarTimesArray[i]) {
      description.addClass("present");
    }
    if (today.format("H A") < calendarTimesArray[i]) {
      description.addClass("future");
    }
    description.attr("contenteditable", true);
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

  const allSaveButtons = $(".saveBtn");
  allSaveButtons.on("click", function hello() {
    console.log("hello there");
  });
  //end of doc.ready, functions go above here
});
