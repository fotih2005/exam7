import { read, write } from "../utils/FS.js";

export default {
  DELETE_STUDENT: (req, res) => {
    try {
      const { id } = req.params;
      const users = read("users.json");
      let filteredUsers = users.filter((e) => +e.id !== +id);
      write("users.json", filteredUsers);
      res.json({
        status: 200,
        message: "Student deleted",
      });
    } catch (err) {
      console.log(err);
      res.status(500);
    }
  },
  DELETE_GROUP: (req, res) => {
    const { id } = req.params;
    const users = read("users.json");
    const groups = read("groups.json");
    const foundGroup = groups.find((e) => e.id == id);
    const user = users.filter((e) => e.role !== "user");
    const filteredUsers = [];

    for (let i = 0; i < user.length; i++) {
      filteredUsers.push(user[i]);
    }
    const students = users.filter((e) => e.groupId != foundGroup.id);
    for (let i = 0; i < students.length; i++) {
      filteredUsers.push(students[i]);
    }

    const filteredGroups = groups.filter((e) => e.id != id);

    write("groups.json", filteredGroups);
    write("users.json", filteredUsers);
  },
  DELETE_COURSE: (req, res) => {
    try {
      const { id } = req.params;
      const courses = read("courses.json");
      const groups = read("groups.json");
      const users = read("users.json");

      const foudCourse = courses.find((e) => e.id == id);
      const foundGroup = groups.filter((e) => e.courseId == foudCourse.id);
      console.log(foundGroup);
      let filteredCourses = courses.filter((e) => e.id != id);
      let filteredGroups = groups.filter((e) => e.courseId != foudCourse.id);
      let fileteredUsers = [];

      const admins = users.filter((e) => e.role != "user");
      for (let i = 0; i < admins.length; i++) {
        fileteredUsers.push(admins[i])
      }
      const students = users.filter(e => e.role == 'user')
      const filteredStudents = students.filter(e => foundGroup.find(i => +i.id != +e.groupId))       

      console.log(filteredStudents);
      for (let i = 0; i < filteredStudents.length; i++) {
        fileteredUsers.push(filteredStudents[i])
      }

      write("groups.json", filteredGroups);
      write("courses.json", filteredCourses);
      write("users.json", fileteredUsers);
      res.json({
        status: 200,
        message: "Courses deleted",
      });
    } catch (err) {
      console.log(err);
      res.status(500);
    }
  },
};
