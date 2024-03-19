import mongoose, { Schema } from "mongoose";

const BuchungSchema = new Schema({
  AutoNr: { type: String, required: true },
  Datum: { type: Date, required: true, default: Date.now },
  StartDatum: { type: Date, required: true },
  EndDatum: { type: Date, required: true },
  Vorname: { type: String, required: true },
  Nachname: { type: String, required: true },
  AutoId: { type: mongoose.Types.ObjectId, ref: 'Fahrzeug'}
});

export const Buchung = mongoose.model("Buchung", BuchungSchema, "buchungen");
