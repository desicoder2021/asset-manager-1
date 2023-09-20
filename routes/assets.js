const express = require("express");
const router = express.Router();
const {
  createAsset,
  readAssets,
  readAsset,
  updateAsset,
  deleteAsset,
} = require("../controllers/assets");

router.post("/", createAsset);
router.get("/", readAssets);
router.get("/:id", readAsset);
router.patch("/:id", updateAsset);
router.delete("/:id", deleteAsset);

module.exports = router;
