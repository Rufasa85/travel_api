const express = require('express');
const router = express.Router();
const {Location,Trip} = require('../models');

router.get("/",(req,res)=>{
    Location.findAll().then(locData=>{
        res.json(locData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            msg:"oh no errorz!",
            err
        })
    })
})

router.post("/",(req,res)=>{
    Location.create({
        name:req.body.name
    }).then(locData=>{
        res.json(locData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            msg:"oh no errorz!",
            err
        })
    })
})
router.delete("/:id",(req,res)=>{
    Location.destroy({
       where:{
        id:req.params.id
       }
    }).then(locData=>{
        if(!locData){
            return res.status(404).json({msg:"no such record"})
        }
        res.json(locData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            msg:"oh no errorz!",
            err
        })
    })
})

module.exports = router;