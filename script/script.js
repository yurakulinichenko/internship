function showHide(element_id) {
  var div = document.getElementsByClassName("activity-text");
  Array.from(div).forEach((element) => (element.style.display = "none"));
  if (document.getElementById(element_id)) {
    var obj = document.getElementById(element_id);
    obj.style.display = "block";
  }
}
