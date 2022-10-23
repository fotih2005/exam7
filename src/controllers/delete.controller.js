import { read, write } from "../utils/FS.js";

export default {
  DELETE_COURSE: (req, res) => {
    try {
      const { id } = req.params;
      const courses = read("courses.json");
      const groups = read("groups.json");
      const users = read("users.json")

      const foudCourse = courses.find((e) => e.id == id);
      const foundGroup = groups.filter((e) => e.courseId == foudCourse.id)
      
      let filteredCourses = courses.filter((e) => e.id != id);
      let filteredGroups = groups.filter((e) => e.courseId != foudCourse.id);
      let fileteredUsers = users.filter(e => foundGroup.filter(i => +e.groupId != +i.id))
      console.log(fileteredUsers);
      
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
