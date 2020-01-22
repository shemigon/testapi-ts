import express from "express";
import { parseRequest } from "./handlers";
import { Version } from "./types/Version";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/api/v1/parse', parseRequest(Version.v1));
app.post('/api/v2/parse', parseRequest(Version.v2));

export const server = app.listen(port);
