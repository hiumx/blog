import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Course = new Schema({
  id: { type: String },
  name: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now},
  updatedAt: { type: Date, default: Date.now}
});

export default mongoose.model('Course', Course);

