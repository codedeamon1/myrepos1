const router = require("express").Router();
const { User } = require("../models/candidate");

router.post("/", async (req, res) => {
    try {
		const info = await User.findOne({ user_id: req.body.userid });
        if(!info){
           res.send({ message: "Invalid Email or Password" })}
        else{
            res.send({info,message: "Invalid Email or Password" })
        } ; 
    }
    catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});