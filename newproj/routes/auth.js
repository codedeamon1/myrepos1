const router = require("express").Router();
const { User } = require("../models/user");


router.post("/", async (req, res) => {
	try {
		console.log("inhere1")
		console.log(req.body.email,req.body.password)
		const user = await User.findOne({ email: req.body.email });
		if (!user){
			console.log("inhere2")
			return res.status(405).send({ message: "Invalid Email or Password" });}
		if (req.body.password != user.password){
			console.log("inhere3")
			return res.status(401).send({ message: "Invalid Email or Password" });}
		console.log("done!!")
		return res.send({user, message: "logged in successfully" });
	} catch (error) {
		console.log(error)
		res.status(500).send({ message: "Internal Server Error" });
	}
});



module.exports = router;