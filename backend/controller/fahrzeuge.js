import express from "express";
import multer from "multer";
import { Fahrzeug } from "../models/fahrzeug.js";
import { Buchung } from "../models/buchung.js";

const router = express.Router();
const mult = multer();

router.get("/", async (req, res) => {
  const Fahrzeuge = await Fahrzeug.find().lean();
  res.send(Fahrzeuge);
});

router.get("/free", async (req, res) => {
  // const Fahrzeuge = await Fahrzeug.find()
  const start = req.query.start
  const ende = req.query.ende

  const Buchungen = await Buchung.find({
    StartDatum : {$lte: new Date(start)},
    EndDatum: {$gte: new Date(ende)}
  }, {Modell: 1})
  
  // const Fahrzeuge = await Fahrzeug.find({
  //   StartDatum : {$lte: new Date(start)},
  //   EndDatum: {$gte: new Date(ende)}},
  //   )
  res.json(Buchungen)
})

router.get('/free', async (req, res) => {
  res.send([])
})

router.post("/", mult.none(), async (req, res) => {
  const buchungen = req.body;
  const buchung = new Fahrzeug(buchungen);
  await buchung.save();
  res.status(201).json(buchung);
});

export default router;
