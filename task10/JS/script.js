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


//------------------------------------------------------------------------------//


function looping(startNum, endNum, breakNum, contNum) {

    if (
        startNum == undefined ||
        endNum == undefined ||
        breakNum == undefined ||
        contNum == undefined
    ) {
        alert("please enter all number!");
        return;
    }
    else {

        for (let i = startNum; i <= endNum; i++) {

            if (i == contNum)
                continue;

            else if (i == breakNum)
                break;

            console.log(i);
        }
    }
}

looping(1, 10, 8, 4);

//---------------------------------------------------------------------------------//


var courses = ["html", "css", "js"];

var courseName = prompt("Please enter a course:");

if (courseName === "") {
    alert("Please enter a course name");
} else if (courses.includes(courseName)) {
    alert("This course already exists");
} else {
    courses.push(courseName);
    alert("Course added successfully");
    console.log(courses);
}