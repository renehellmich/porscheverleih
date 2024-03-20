import express from "express";
import multer from "multer";
import { Buchung } from "../models/buchung.js";
import { Fahrzeug } from "../models/fahrzeug.js";

const router = express.Router();
const mult = multer();

router.get("/", async (req, res) => {
  const buchungen = await Buchung.find().lean().populate("Modell");
  res.json(buchungen);
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await Buchung.findOneAndDelete({ _id: req.params.id });
    if (result) {
      res.json({ message: "Buchung gelöscht" });
    } else {
      res.status(404).json({ message: "Buchung nicht gefunden" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ein Fehler ist aufgetreten" });
  }
});

export default router;
