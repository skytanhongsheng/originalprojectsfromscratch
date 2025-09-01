// Run jQuery only when HTML is loaded
$(document).ready(function () {
  // 1. When user types in the input box
  //    The input event fires every time the user types, deletes, or pastes text into the input box.
  $("#inputBox").on("input", function () {
    // 2. Get number of characters typed
    var textLength = $(this).val().length;
    // 3. Update the counter
    $("#counter").text(textLength);
  });
});
