import express, { json } from "express";
import cors from "cors";
import router from "./routes/index.routes.js";

const app = express();

app.use(json());
app.use(cors());
app.use(router);

const port = 5000;

app.listen(port, () => console.log(`O servidor está online na porta ${port}`));
