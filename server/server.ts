// server/server.ts
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dataRoutes from './routes/dataRoutes';

const app = express();

app.use(express.json());
app.use(cors());

const mongoURI = 'mongodb+srv://mhatreprathamesh94:soK4dOBSmOanoxR5@cluster0.aedudfo.mongodb.net/chart_data'; // Replace this with your actual MongoDB connection URL

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use('/api/data', dataRoutes);

const port = process.env.PORT || 5012;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});