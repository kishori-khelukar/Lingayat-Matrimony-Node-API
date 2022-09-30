const db = require("../models");
//const userModel = require("../models/user.model");
const User = db.users;
const Op = db.Sequelize.Op;

//login method
const getUserLogin = async (req, res) => {
    console.log(req.body)
    try {
        const users = await User.findOne({
            where: {
                [Op.and]: [

                    { contact: req.body.contact },
                    { password: req.body.password },
                ],
            },
        });
        res.status(200).send(users);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Error occured while fetching the user  ",
        });
    }
}

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
        const users = await User.findOne({ where: { userId: req.params.id } });
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
        const userExist = await User.count({ where: { contact: req.body.contact } });
        console.log(userExist);
        if (userExist) {
            res.status(409).send({ message: "Contact Already Exist...!!" });

        } else {
            const users = await User.create(req.body);
            console.log(users.dataValues);

            res.status(200).send({ success: "Record Save Sucessfully....!", userId: users.dataValues.userId });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Error occured while adding the users",
        });
    }
};
//Update student record-
const updateUser = async (req, res) => {
    try {
        const users = await User.update(req.body, { where: { userId: req.params.id } });
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
    getUserLogin,
}
