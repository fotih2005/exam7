import { read } from "../utils/FS.js";

export default {
  GET: (_, res) => {
    try {
      res.render("pathNotFound.ejs", { data: "404 path not found" });
    } catch (err) {
      console.log(err.message);
      res.status(500);
    }
  },
  GET_ADMIN: (_, res) => {
    const users = read("users.json");
    const courses = read("courses.json");
    const groups = read("groups.json");

    groups.filter(
      (e) => (e.course = courses.find((i) => e.courseId == i.id).name)
    );

    let students = users.filter(
      (e) => e.role !== "admin" && e.role !== "teacher"
    );
    let teachers = users.filter((e) => e.role !== "admin" && e.role !== "user");
    students.filter((e) => (e.group = groups.find((j) => e.groupId == j.id)));
    res.render("admin.ejs", { courses, teachers, groups, students });
  },
  GET_TEACHER: (req, res) => {
    try {
      const { id } = req.params;
      const foudTeacher = read("users.json").find((e) => e.id == id);
      const courses = read("courses.json");
      const foundCourses = read("groups.json").filter(
        (e) => e.teacherId == foudTeacher.id
      );
      foundCourses.map((e) => (e.teacher = foudTeacher.name));
      foundCourses.filter(
        (e) => (e.course = courses.find((i) => i.id == e.courseId).name)
      );
      res.render("teacher.ejs", { groups: foundCourses });
    } catch (err) {
      console.log(err.message);
      res.status(500);
    }
  },
  GET_USER: (req, res) => {
    try {
      const { id } = req.params;
      const foundUser = read("users.json").filter(
        (e) => e.role !== "admin" && e.role !== "teacher" && e.id == id
      );
      const groups = read('groups.json')
      const teachers = read('users.json').filter(e => e.role !== 'admin' && e.role !== 'user')
      foundUser.filter(e => e.group = groups.find(i => i.id == e.groupId))
      foundUser.filter(e => e.group.teacher = teachers.find(i => i.id == e.group.teacherId).name)
      console.log(foundUser);

      res.render("user.ejs", { user: foundUser });
    } catch (err) {
      console.log(err.message);
      res.status(500);
    }
  },
};
