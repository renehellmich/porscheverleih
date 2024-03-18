import express from "express";
import multer from "multer";
import { Buchung } from "../models/buchung.js";

const router = express.Router();
const mult = multer();

router.get("/", (req, res) => {
  const buchungen = Buchung.find();
  res.json(buchungen);
});

export default router;
