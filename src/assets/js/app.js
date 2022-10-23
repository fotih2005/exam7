const teachersBtn = document.getElementById("teachersBtn");
const groupsBtn = document.getElementById("groupsBtn");
const coursesBtn = document.getElementById("coursesBtn");
const studentsBtn = document.getElementById("studentsBtn");

const delCourse = document.querySelectorAll('.delCourse')

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

const deleteCourse = async (id) => {
  let res = await fetch(`/deleteCourse/${id}`, {
    method: 'DELETE'
  })
  let req = await res.json()
  console.log(await req);
}


delCourse.forEach(btn => {
  btn.addEventListener('click', (e) => {
    deleteCourse(e.target.id);
  })
})