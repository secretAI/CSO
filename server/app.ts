import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import routes from "./src/routes/router";
import { startServer } from "./src/start";
import { errorHandler } from "./src/middlewares/error-handler";

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api", routes);
app.use(errorHandler);

startServer(app);
