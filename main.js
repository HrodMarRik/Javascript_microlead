/**
 * @param {event} evt
 * @param {string} cityName
 */
function openCity(evt, cityName) {
  console.log(evt, cityName);
  // code
  var tabcontents = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.display = "none";
  }

  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";

  evt.currentTarget.className += " active";

}

