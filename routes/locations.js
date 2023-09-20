const express = require("express");
const router = express.Router();
const {
  createLocation,
  readLocations,
  readLocation,
  updateLocation,
  deleteLocation,
} = require("../controllers/locations");

router.post("/", createLocation);
router.get("/", readLocations);
router.get("/:id", readLocation);
router.patch("/:id", updateLocation);
router.delete("/:id", deleteLocation);

module.exports = router;
