// Run jQuery only when HTML is loaded
$(document).ready(function() {
  // When user types in the input box
  // The input event fires every time the user types, deletes, or pastes text into the input box.
  $('#inputBox').on('input', function() {
    var textLength = $(this).val().length; // Get number of characters typed
    $('#counter').text(textLength);        // Update the counter
  });
});
