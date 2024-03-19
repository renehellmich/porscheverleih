import express from "express";
import multer from "multer";
import { Fahrzeug } from "../models/fahrzeug.js";

const router = express.Router();
const mult = multer();

router.get("/", async (req, res) => {
  const Fahrzeuge = await Fahrzeug.find().lean();
  res.send(Fahrzeuge);
});

router.post("/", mult.none(), async (req, res) => {
  const buchungen = req.body;
  const buchung = new Fahrzeug(buchungen);
  await buchung.save();
  res.status(201).json(buchung);
});

export default router;
