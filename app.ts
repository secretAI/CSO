import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import routes from "./src/routes/router";
import { startServer } from "./src/start";

const app = express();

app.use("/public", express.static("public"));
app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
  origin: "*",
  optionsSuccessStatus: 200
}));
app.use(routes);

startServer(app);
