const express = require("express");
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db");
require("dotenv").config();

const categoriesRoutes = require("./routes/categories");
const locationsRoutes = require("./routes/locations");
const assetsRoutes = require("./routes/assets");

// app
const app = express();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "This is Assest Manager API" });
});

app.use("/api/categories", categoriesRoutes);
app.use("/api/locations", locationsRoutes);
app.use("/api/assets", assetsRoutes);

app.use((err, req, res, next) => {
  console.log(err.message);
  res
    .status(500)
    .json({ error: "Server Error", code: err.code, message: err.message });
});

//db
const listen = async () => {
  const conn = await connectDB();
  if (conn) {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  }
};
listen();
