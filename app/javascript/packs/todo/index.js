window.onload = function() {
$(":checkbox").click(function() {
  if ($(this).is(":checked")) {
    $(this).closest("tr").find("label").css("text-decoration-line", "line-through");
  } else {
    $(this).closest("tr").find("label").css("text-decoration-line", "none");
  }
});
}