// server/models/dataModel.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IData extends Document {
  name: string;
  value: number;
}

const dataSchema: Schema = new Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
});

const DataModel = mongoose.model<IData>('Data', dataSchema);

export default DataModel;
