const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("hoge") 
})

module.exports = router