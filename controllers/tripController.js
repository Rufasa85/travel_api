const express = require('express');
const router = express.Router();
const {Trip} = require('../models');

router.post("/",(req,res)=>{
    Trip.create({
        budget: req.body.budget,
        numTravellers:req.body.numTravellers,
        TravellerId:req.body.TravellerId,
        LocationId:req.body.LocationId
    }).then(tripData=>{
        res.json(tripData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            msg:"oh no errorz!",
            err
        })
    })
})
router.delete("/:id",(req,res)=>{
    Trip.destroy({
       where:{
        id:req.params.id
       }
    }).then(tripData=>{
        if(!tripData){
            return res.status(404).json({msg:"no such record"})
        }
        res.json(tripData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            msg:"oh no errorz!",
            err
        })
    })
})

module.exports = router;