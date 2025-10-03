import mongoose from "mongoose";

const blogModelSchema = new mongoose.Schema(
  {
    title: String,
    subtitle: String,
    description: String,
    author: String,
  },
  {
    timestamps: true,
  }
);
const BlogModel = mongoose.model("Blog", blogModelSchema);
export default BlogModel;
