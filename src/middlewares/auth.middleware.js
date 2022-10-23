import { read } from "../utils/FS.js";
import { sign } from "../utils/jwt.js";


export const loginMiddleware = (req, res, next) => {
  const { name, password } = req.body;
  
  const foudUser = read("users.json").find(e => e.name === name && e.password === password);
  if (!foudUser) {
    res.render("pathNotFound.ejs", { data: "User not found" });
    return;
  }
  req.userId = foudUser.id
  req.role = foudUser.role;
  res.cookie('token', sign({role: foudUser.role, id: foudUser.id}))
  next();
};