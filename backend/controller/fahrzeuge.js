import express from "express";
import multer from "multer";
import { Fahrzeug } from "../models/fahrzeug.js";

const router = express.Router();
const mult = multer();

router.get("/fahrzeug", (req, res) => {
  const Fahrzeuge = Fahrzeug.find();
  res.send(Fahrzeuge);
});

export default router;
