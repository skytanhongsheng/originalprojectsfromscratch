// Run jQuery only when HTML is loaded
$(document).ready(function () {
  $("#inputBox").on("input", function () {
    var textLength = $(this).val().length;
    $("#counter").text(textLength);
  });
});
// When user types in the input box
// The input event fires every time the user types, deletes, or pastes text into the input box.
// Get number of characters typed
// Update the counter
