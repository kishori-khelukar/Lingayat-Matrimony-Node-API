module.exports = (sequelize, Sequelize) => {
    const Feedback = sequelize.define("feedback", {
        cId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING
        },
        contact: {
            type: Sequelize.STRING
        },
        feedback: {
            type: Sequelize.STRING
        },

    });
    return Feedback;
};
