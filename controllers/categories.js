const Category = require("../models/category");
const Asset = require("../models/asset");
const defineSearchQuery = require("../utils/define-search-query");

const createCategory = async (req, res, next) => {
  try {
    const category = await new Category(req.body).save();
    res.status(200).json({ data: category });
  } catch (err) {
    next(err);
  }
};

const readCategories = async (req, res, next) => {
  try {
    const searchQuery = defineSearchQuery(req);
    const categories = await Category.find(searchQuery).sort("name");
    res.status(200).json({ data: categories });
  } catch (err) {
    next(err);
  }
};

const readCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json({ data: category });
  } catch (err) {
    next(err);
  }
};

const updateCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    await category.set(req.body).save();
    res.status(200).json({ data: category });
  } catch (err) {
    next(err);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const cat = await Category.findById(req.params.id);
    if (!cat) {
      return res.status(404).json({ error: "Category not found" });
    }
    const assets = await Asset.find({ category: cat._id });
    if (assets.length > 0) {
      return res
        .status(403)
        .json({ error: "Forbidden : Category is used in Asset documents" });
    }
    const deleted = await cat.deleteOne();
    res.status(200).json({ data: deleted });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createCategory,
  readCategories,
  readCategory,
  updateCategory,
  deleteCategory,
};
