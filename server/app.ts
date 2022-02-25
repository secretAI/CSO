import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import router from "./src/routes/router";
import { startServer } from "./src/start";
import { errorHandler } from "./src/middlewares/error-handler";

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api", router);
app.use(errorHandler);

startServer(app);
