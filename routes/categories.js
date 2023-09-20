const express = require("express");
const router = express.Router();
const {
  createCategory,
  readCategories,
  readCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categories");

router.post("/", createCategory);
router.get("/", readCategories);
router.get("/:id", readCategory);
router.patch("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
