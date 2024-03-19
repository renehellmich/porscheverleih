import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import multer from "multer";
import FahrzeugRouter from "./controller/fahrzeuge.js";
import BuchungRouter from "./controller/buchungen.js";
import { Buchung } from "./models/buchung.js";

const app = express();
const mult = multer();

await mongoose.connect(process.env.BACKEND_URI);

const PORT = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.post("/buchungen", mult.none(), async (req, res) => {
  const buchungen = req.body;
  const buchung = new Buchung(buchungen);
  await buchung.save();
  res.status(201).json(buchung);
});

app.use("/fahrzeuge", FahrzeugRouter);
app.use("/buchungen", BuchungRouter);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
