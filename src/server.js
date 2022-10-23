import express from "express";
import dotenv from 'dotenv'
import ejs from 'ejs'
import path from 'path'
import routes from "./router/routes.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
dotenv.config()

const PORT = process.env.PORT || 8080

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(process.cwd(), 'src', 'views'))

app.use('/assets', express.static(path.join(process.cwd(), 'src', 'assets')))

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
  }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(routes)

app.listen(PORT, () => {
    console.log(PORT);
})