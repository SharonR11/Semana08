import express from "express";
import morgan from "morgan"
import user from "./routes/usuario.routes";

const app = express();

//Settings
app.set("port",4000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use(user);

export default app;
