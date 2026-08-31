var courses = ["html", "css", "js"];

var newCourse = prompt("Enter new course:");

var courseIndex = courses.findIndex(function(course) {
    return course == newCourse;
});

if (courseIndex != -1) {
    alert("This course already exists");
} else {
    courses.push(newCourse);
    alert("Course added successfully");
}

console.log(courses);