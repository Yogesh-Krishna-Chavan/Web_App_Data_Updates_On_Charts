// server/routes/dataRoutes.ts
import express from 'express';
import { getAllData } from '../controllers/dataController';

const router = express.Router();

router.get('/', getAllData);

export default router;
