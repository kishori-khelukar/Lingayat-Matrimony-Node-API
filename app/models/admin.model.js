module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admin", {
        adminId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        adminName: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.STRING
        },

    });
    return Admin;
};
