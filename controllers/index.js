const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("routes are linked")
})

module.exports = router;