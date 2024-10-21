$(function() {
  $("#menuPanel").panel();
  // programmatically open the panel  when the app starts if the resolution is > 1024 pixel
  if (window.screen.availWidth >= 1024) {
    $("#menuPanel").panel("open");
  }
});
