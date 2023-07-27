// server/controllers/dataController.ts
import { Request, Response } from 'express';
import DataModel from '../models/dataModel';

// Controller to fetch all data from the database
export const getAllData = async (req: Request, res: Response) => {
  try {
    const data = await DataModel.find();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
