import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import BlogModel from "./Models/blogModel.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const mongoDb = mongoose
  .connect(
    "mongodb+srv://hello:hello@cluster0.m21n6zg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Database is connected successfully.");
  });

app.get("/", async (req, res) => {
  const blogs = await BlogModel.find();
  res.status(200).json({
    message: "DAta read successfully.",
    data: blogs,
  });
});

app.get("/read/:id", async (req, res) => {
  const id = req.params.id;
  const blog = await BlogModel.findById(id);
  req.status(200).json({
    message: "Single Blog read.",
    data: blog,
  });
});

app.post("/create", async (req, res) => {
  await BlogModel.create({
    title: req.body.title,
    subtitle: req.body.subtitle,
    description: req.body.description,
  });
  res.status(200).json({
    message: "Blog created successfully",
  });
});

app.patch("/update/:id", async (req, res) => {
  const id = req.params.id;
  const { title, subtitle, description } = req.body;
  await BlogModel.findByIdAndUpdate(id, {
    title,
    subtitle,
    description,
  });
  res.status(200).json({
    message: "Blog updated successfully.",
  });
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await BlogModel.findByIdAndDelete(id);
  res.status(200).json({
    message: "Blog deleted successfully.",
  });
});

app.listen(2000, () => {
  console.log("The server is running in 2000 port.");
});
