import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';
import mongooseDelete from 'mongoose-delete'

const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String },
  description: { type: String },
  image: { type: String },
  slug: { type: String, slug: "name" }
}, {
  timestamps: true
});

mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
   deletedAt : true,
   overrideMethods: 'all'
});

export default mongoose.model('Course', Course);

