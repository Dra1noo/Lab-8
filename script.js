// ================= Part 1: Understanding and Creating Objects =================
const student = {
    name: "Demar Payne",
    age: 21,
    enrolled: true,
    courses: ["JavaScript Basics", "Advanced CSS", "React Fundamentals"],
    displayInfo: function() {
        return `${this.name} is ${this.age} years old and enrolled in ${this.courses.length} courses.`;
    }
};

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log(student.displayInfo());

// ================= Part 2: Working with JSON =================
const studentJSON = JSON.stringify(student);
console.log("JSON String:", studentJSON);

const parsedStudent = JSON.parse(studentJSON);
console.log("Parsed Object:", parsedStudent);
console.log("Objects are equal:", JSON.stringify(student) === JSON.stringify(parsedStudent));

// ================= Part 3: Destructuring Assignment =================
const { name, courses } = student;
console.log("Destructured Name:", name);
console.log("Destructured Courses:", courses);

const scores = [85, 92, 78, 90];
const [firstScore, secondScore] = scores;
console.log("First Score:", firstScore);
console.log("Second Score:", secondScore);

// ================= Part 4: The Spread Operator =================
const clonedStudent = { ...student, graduationYear: 2026 };
console.log("Cloned Student with Grad Year:", clonedStudent);

const newCourses = ["Node.js", "Express"];
const mergedCourses = [...student.courses, ...newCourses];
console.log("Merged Courses:", mergedCourses);

// ================= Part 5: Object Methods =================
student.addCourse = function(courseName) {
    this.courses.push(courseName);
    console.log(`Course "${courseName}" added!`);
};

student.totalCourses = function() {
    return this.courses.length;
};

student.addCourse("MongoDB");
console.log("Total Courses Now:", student.totalCourses());

// ================= Bonus Task: Average Score =================
const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log("Average Score:", averageScore);
