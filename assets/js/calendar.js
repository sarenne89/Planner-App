const calendarTimesArray = [
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
];
const timeSlots = $("#timeSlots");

for (let i = 0; i < calendarTimesArray.length; i++) {
  var timeSlot = $("<div>");
  timeSlot.addClass("row");
  timeSlots.append(timeSlot);
  var hour = $("<div>");
  hour.addClass("hour col-2 d-flex align-items-center justify-content-center");
  hour.appendTo(timeSlot);
  hour.text(calendarTimesArray[i]);
  var description = $("<div>");
  description.addClass(
    "description future col-8 d-flex align-items-center justify-content-center"
  );
  description.appendTo(timeSlot);
  var saveButton = $("<div>");
  saveButton.addClass(
    "col-2 saveBtn d-flex align-items-center justify-content-center"
  );
  saveButton.appendTo(timeSlot);
}
