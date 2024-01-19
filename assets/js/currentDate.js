$(document).ready(function () {
  var currentDay = $("#currentDay");
  var now = dayjs().format("dddd D MMMM YYYY");
  currentDay.text(now);
});
