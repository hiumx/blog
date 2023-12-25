import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';

const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Course = new Schema({
  name: { type: String },
  description: { type: String },
  image: { type: String },
  slug: { type: String, slug: "name" }
}, {
  timestamps: true
});

export default mongoose.model('Course', Course);

