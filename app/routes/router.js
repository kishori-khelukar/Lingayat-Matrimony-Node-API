const users = require("../controllers/user.controller.js");
const feedback = require("../controllers/feedback.controller");
var router = require("express").Router();
//admin

//users
router.get("/getAllUsers", users.getAllUsers);
router.get("/getSingleUser/:id", users.getSingleUser);
router.post("/addUsers", users.addUsers);
router.put("/updateUser", users.updateUser);

//contactUs
router.post("/addFeedback", feedback.addFeedback);



module.exports = router;
