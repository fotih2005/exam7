import { Router } from "express";
import userController from "../controllers/user.controller.js";
import authController from "../controllers/auth.controller.js";
import { loginMiddleware } from "../middlewares/auth.middleware.js";
import postController from "../controllers/post.controller.js";
import deleteController from "../controllers/delete.controller.js";

const route = Router();

export default route
  .get("/auth", authController.GET_LOGIN)
  .post("/login", loginMiddleware, authController.LOGIN)
  .get("/admin", userController.GET_ADMIN)
  .get("/teacher/:id", userController.GET_TEACHER)
  .get("/user/:id", userController.GET_USER)
  .post("/addHomework/:id", postController.ADD_HOMEWORK)
  .post("/addGroup", postController.ADD_GROUP)
  .post("/addCourse", postController.ADD_COURSE)
  .post("/addTeacher", postController.ADD_TEACHER)
  .post("/addStudent", postController.ADD_STUDENT)
  .delete("/deleteCourse/:id", deleteController.DELETE_COURSE)
  .get("/*", userController.GET);