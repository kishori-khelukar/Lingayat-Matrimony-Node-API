const db = require("../models");
//const userModel = require("../models/user.model");
const Feedback = db.feedback;
const Op = db.Sequelize.Op;

//add student record to the database-
const addFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.create(req.body);
        res.status(200).send({ success: "Record Save Sucessfully....!" });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Error occured while adding the feedback",
        });
    }
};

module.exports = {
    addFeedback,
}
