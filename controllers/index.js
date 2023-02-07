const express = require('express');
const router = express.Router();

const locationRoutes = require("./locationController")
router.use("/api/locations",locationRoutes);

const travellerRoutes = require("./travellerController")
router.use("/api/travellers",travellerRoutes);

const tripRoutes = require("./tripController")
router.use("/api/trips",tripRoutes);

router.get("/",(req,res)=>{
    res.send("routes are linked")
})

module.exports = router;