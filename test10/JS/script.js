var degree = prompt("Enter your degree");

if (degree == null) {
  alert("Please enter your degree");
} else if (degree == "") {
  alert("Please enter your degree");
} else if (degree > 100) {
  alert("Invalid degree");
} else if (degree >= 90 && degree <= 100) {
  alert("Excellent");
} else if (degree >= 80 && degree < 90) {
  alert("Very good");
} else if (degree >= 70 && degree < 80) {
  alert("Good");
} else if (degree < 70) {
  alert("Failed");
}