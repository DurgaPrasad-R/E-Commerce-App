const PORT = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://emcommerce-admin:123456780@cluster0.z8jcujg.mongodb.net/e-commerce"
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// storage for images using multer
const storage = multer.diskStorage({
  destination: "./uploads/images",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// API to upload images
app.use("/images", express.static(path.join(__dirname, "uploads/images")));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`,
  });
});

// schema for creating products
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

app.post("/addproduct", async (req, res) => {
  let products = await Product.find();
  let id;
  if (products.length > 0) {
    id = products[products.length - 1].id + 1;
  } else {
    id = 1;
  }
  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  console.log(product);
  try {
    await product.save();
    console.log("Product added successfully");
    // res.send(product);
    res.json({
      message: "Product added successfully",
      success: true,
      name: req.body.name,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// to remove a product
app.post("/removeproduct", async (req, res) => {
  try {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("removed successfully");
    res.json({ message: "Product removed successfully", success: true });
  } catch (error) {
    res.status(500).send(error);
  }
});

// to display all products
app.get("/products", async (req, res) => {
  try {
    let products = await Product.find();
    console.log("Fetched all products");
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});


app.listen(PORT, (error) => {
  if (error) return console.log(`Error: ${error}`);
  else console.log(`Server is running on port ${PORT}`);
});