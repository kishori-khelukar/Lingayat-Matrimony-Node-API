const db = require("../models");
//const userModel = require("../models/user.model");
const User = db.users;
const Op = db.Sequelize.Op;

//fetch All users from database-
const getAllUsers = async (req, res) => {
    try {
        let users = await User.findAll({});
        res.status(200).send(users);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Error occured while fetching the users",
        });
    }
};
//fetch single student from database-
const getSingleUser = async (req, res) => {
    try {
        console.log(req.params.id);
        let users = await User.findOne({ where: { userId: req.params.id } });
        res.status(200).send(users);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Error occured while fetching the user  ",
        });
    }
}
//add student record to the database-
const addUsers = async (req, res) => {
    try {
        const users = await User.create(req.body);
        res.status(200).send({ success: "Record Save Sucessfully....!" });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Error occured while adding the users",
        });
    }
};
//Update student record-
const updateUser = async (req, res) => {
    try {
        const users = await User.update(req.body, { where: { userId: req.body.userId } });
        res.status(200).send({ success: "Record Update Sucessfully..!" });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Error occured while uploading the user",
        });
    }
};
module.exports = {
    getAllUsers,
    getSingleUser,
    addUsers,
    updateUser,
}
