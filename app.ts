import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import routes from "./src/routes/router";
import { startServer } from "./src/start";
import { errorHandler } from "./src/middlewares/error-handler";

const app = express();

app.use("/public", express.static("public"));
app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(cookieParser());
app.use(routes);
app.use(errorHandler);

startServer(app);
