const users = require("../controllers/user.controller.js");
const feedback = require("../controllers/feedback.controller");
var router = require("express").Router();
//login
router.post("/getUserLogin", users.getUserLogin);
//users
router.get("/getAllUsers", users.getAllUsers);
router.get("/getSingleUser/:id", users.getSingleUser);
router.post("/addUsers", users.addUsers);
router.put("/updateUser/:id", users.updateUser);
//contactUs
router.post("/addFeedback", feedback.addFeedback);

module.exports = router;
