import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { getUrlPreview } from "./url.controller.js";

const app = express();
const PORT = process.env.SERVER_PORT || 8000;

app.use(bodyParser.json());
app.use(cors());

app.get("/health", (req, res) => {
  return res.status(200).json({ status: "Server running" });
});

app.post("/preview", getUrlPreview);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
