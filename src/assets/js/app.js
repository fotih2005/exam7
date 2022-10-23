const teachersBtn = document.getElementById("teachersBtn");
const groupsBtn = document.getElementById("groupsBtn");
const coursesBtn = document.getElementById("coursesBtn");
const studentsBtn = document.getElementById("studentsBtn");

const deleteStudent = document.querySelectorAll(".deleteStudent");
const delGroup = document.querySelectorAll(".delGroup");

const students = document.getElementById("students");
const teachers = document.getElementById("teachers");
const groups = document.getElementById("groups");
const courses = document.getElementById("courses");

teachersBtn.addEventListener("click", () => {
  teachers.classList.remove("d-none");
  teachers.classList.add("d-block");
  groups.classList.add("d-none");
  students.classList.add("d-none");
  courses.classList.add("d-none");
});

groupsBtn.addEventListener("click", () => {
  groups.classList.remove("d-none");
  groups.classList.add("d-block");
  teachers.classList.add("d-none");
  students.classList.add("d-none");
  courses.classList.add("d-none");
});

coursesBtn.addEventListener("click", () => {
  courses.classList.remove("d-none");
  courses.classList.add("d-block");
  teachers.classList.add("d-none");
  students.classList.add("d-none");
  groups.classList.add("d-none");
});

studentsBtn.addEventListener("click", () => {
  students.classList.remove("d-none");
  students.classList.add("d-block");
  teachers.classList.add("d-none");
  courses.classList.add("d-none");
  groups.classList.add("d-none");
});

const delStudent = async (id) => {
  let res = await fetch(`/deleteStudent/${id}`, {
    method: "DELETE",
  });
  let req = await res.json();
  console.log(await req);
};
const deleteGroup = async (id) => {
  let res = await fetch(`/deleteGroup/${id}`, {
    method: "DELETE",
  });
  let req = await res.json();
  console.log(await req);
};

deleteStudent.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    delStudent(e.target.id);
  });
});

delGroup.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    deleteGroup(e.target.id);
  });
});
