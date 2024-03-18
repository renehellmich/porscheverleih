import mongoose, { Schema } from "mongoose";

const FahrzeugeSchema = new Schema({
  Modell: { type: String, required: true },
  Leistung: { type: Number, required: true },
  Farbe: { type: String, required: true },
  SerienNr: { type: String, required: true },
  Baujahr: { type: Number, required: true },
  Preis: { type: Number, required: true },
  Verfuegbar: { type: Boolean, required: true },
});

export const Fahrzeug = mongoose.model("Fahrzeuge", FahrzeugeSchema);
