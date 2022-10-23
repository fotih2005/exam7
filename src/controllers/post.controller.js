import { read, write } from "../utils/FS.js";

export default {
  ADD_HOMEWORK: (req, res) => {
    try {
      const { id } = req.params;
      const { homework } = req.body;
      const groups = read("groups.json");
      groups.find((e) => e.id == id).homework = homework;
      write("groups.json", groups);
      res.json({
        status: 200,
        message: "Homework added",
      });
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
  ADD_GROUP: (req, res) => {
    try {
      const { name, courseId, teacherId } = req.body;
      const groups = read("groups.json");
      groups.push({
        id: groups.at(-1).id + 1 || 1,
        name,
        courseId,
        teacherId,
        homework: "",
      });
      write("groups.json", groups);
      res.json({
        status: 200,
        data: groups,
      });
    } catch (err) {
      console.log(err);
      res.status(500);
    }
  },
  ADD_COURSE: (req, res) => {
    try {
      const { name, description, price } = req.body;
      const courses = read("courses.json");
      courses.push({
        id: courses.at(-1).id + 1 || 1,
        name,
        description,
        price,
      });
      write("courses.json", courses);
      res.json({
        status: 200,
        message: "new course added",
      });
    } catch (err) {
      console.log(err.message);
      res.status(500);
    }
  },
  ADD_TEACHER: (req, res) => {
    try {
      const { name, tel, special, password } = req.body;
      const users = read("users.json");
      users.push({
        id: users.at(-1).id + 1 || 1,
        name,
        tel,
        password,
        special,
        role: "teacher",
      });
      write("users.json", users);
      res.json({
        status: 200,
        message: "Teacher added",
      });
    } catch (err) {
      console.log(err);
      res.status(500);
    }
  },
  ADD_STUDENT: (req, res) => {
    try {
      const { name, tel, groupId, password } = req.body;
      const users = read('users.json')
      users.push({id: users.at(-1).id + 1 || 1, name, tel, groupId, password, role: 'user'})
      write('users.json', users)
      res.json({
        status: 200,
        message: 'Student added'
      })
    } catch (err) {
      console.log(err);
      res.status(500);
    }
  },
};
