import express from "express";
import multer from "multer";
import { Fahrzeug } from "../models/fahrzeug.js";

const router = express.Router();
const mult = multer();

export default router;
