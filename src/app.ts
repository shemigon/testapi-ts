import express from "express";
import { parseClient } from "./handlers";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/api/v:V/parse', parseClient);

export const server = app.listen(port);
