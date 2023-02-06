const express = require('express');
const router = express.Router();
const {Traveller,Trip} = require('../models');

router.get("/",(req,res)=>{
    Traveller.findAll().then(travData=>{
        res.json(travData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            msg:"oh no errorz!",
            err
        })
    })
})

router.post("/",(req,res)=>{
    Traveller.create({
        name:req.body.name,
        email:req.body.email
    }).then(travData=>{
        res.json(travData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            msg:"oh no errorz!",
            err
        })
    })
})
router.delete("/:id",(req,res)=>{
    Traveller.destroy({
       where:{
        id:req.params.id
       }
    }).then(travData=>{
        if(!travData){
            return res.status(404).json({msg:"no such record"})
        }
        res.json(travData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            msg:"oh no errorz!",
            err
        })
    })
})

module.exports = router;