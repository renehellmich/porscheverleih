import express from 'express';
import mongoose from'mongoose';
import 'dotenv/config';
import cors from 'cors';
import multer from'multer';
import FahrzeugRouter from './routes/fahrzeuge.js';
import BuchungRouter from './routes/buchungen.js';

const app = express();	
const mult = multer();

await mongoose.connect(process.env.MONGODB_URI)

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use('/fahrzeuge', FahrzeugRouter)
app.use('/buchungen', BuchungRouter)








app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));