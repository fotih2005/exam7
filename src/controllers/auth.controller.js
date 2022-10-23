// import { read } from "../utils/FS.js"

export default {
  GET_LOGIN: (_, res) => {
    res.render("login.ejs");
  },
  LOGIN: (req, res) => {
    const { role, userId} = req;
    if (role === "admin") {
      return res.redirect("/admin");
    }

    if (role === "teacher") {
      return res.redirect(`/teacher/${userId}`);
    }

    if (role === "user") {
      return res.redirect(`/user/${userId}`);
    }

    if(!cookie){
      return res.redirect('/auth')
    }
  },
};
