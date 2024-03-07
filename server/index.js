const PORT = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");

app.use(express.json());
app.use(
  cors({
    origin: ["https://e-commerce-app-beta-rust.vercel.app"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

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

// to fetch new collections
app.get("/newcollections", async (req, res) => {
  try {
    let products = await Product.find({ available: true });
    let newcollections = products.slice(1).slice(-8);
    console.log("Fetched new collections");
    res.send(newcollections);
  } catch (error) {
    res.status.send(error);
  }
});

// to fetch popular in women
app.get("/popularinwomen", async (req, res) => {
  try {
    let products = await Product.find({ category: "women", available: true });
    let popularinwomen = products.slice(0, 4);
    console.log("Fetched popular in women");
    res.send(popularinwomen);
  } catch (error) {
    res.status.send(error);
  }
});

// creating middleware to fetch user
const fetchuser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ message: "No token found" });
  }
  try {
    const data = jwt.verify(token, "secret_ecom");
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ message: "Invalid token" });
  }
};

// to add products in cart
app.post("/addtocart", fetchuser, async (req, res) => {
  try {
    let user = await Users.findById(req.user.id);
    user.cartData[req.body.id] += 1;
    await Users.updateOne({ _id: req.user.id }, { cartData: user.cartData });
    console.log("Added", req.body.id);
    res.json({ message: "Added to cart", success: true });
  } catch (error) {
    res.status(500).send(error);
  }
});

// to remove products from cart
app.post("/removefromcart", fetchuser, async (req, res) => {
  try {
    let user = await Users.findById(req.user.id);
    if (user.cartData[req.body.id] > 0) {
      user.cartData[req.body.id] -= 1;
      await Users.updateOne({ _id: req.user.id }, { cartData: user.cartData });
      console.log("Removed", req.body.id);
      res.json({ message: "Removed from cart", success: true });
    }
  } catch (error) {
    res.status.send(error);
  }
});

// to display cart items
app.post("/getcart", fetchuser, async (req, res) => {
  try {
    let user = await Users.findById(req.user.id);
    res.json(user.cartData);
  } catch (error) {
    res.status.send(error);
  }
});

// creating schema for users
const Users = mongoose.model("Users", {
  username: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// to register a user
app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res.json({ message: "User already exists", success: false });
  }
  // empty cart initializing for all the items..
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new Users({
    username: req.body.username,
    email: req.body.email,
    cartData: cart,
    password: req.body.password,
  });
  try {
    await user.save();
    const data = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(data, "secret_ecom");
    res.json({ token, success: true });
  } catch (error) {
    res.status(500).send(error);
  }
});

// to login a user
app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (!user) {
    return res.json({ message: "User does not exist", success: false });
  }
  if (user.password !== req.body.password) {
    return res.json({ message: "Invalid credentials", success: false });
  }
  const data = {
    user: {
      id: user.id,
    },
  };
  const token = jwt.sign(data, "secret_ecom");
  res.json({ token, success: true });
});

app.listen(PORT, (error) => {
  if (error) return console.log(`Error: ${error}`);
  else console.log(`Server is running on port ${PORT}`);
});
