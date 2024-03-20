import express from "express";
import multer from "multer";
import { Buchung } from "../models/buchung.js";

const router = express.Router();
const mult = multer();

router.get("/", async (req, res) => {
  const buchungen = await Buchung.find().lean();
  res.status(200).json(buchungen);
});

export default router;
