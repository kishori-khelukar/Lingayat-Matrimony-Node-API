module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        userId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        //personal details-
        userName: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        dob: {
            type: Sequelize.STRING
        },
        contact: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.STRING
        },
        bloodGroup: {
            type: Sequelize.STRING
        },
        marriedStatus: {
            type: Sequelize.STRING
        },
        birthPlace: {
            type: Sequelize.STRING
        },
        birthTime: {
            type: Sequelize.STRING
        },
        branch: {
            type: Sequelize.STRING
        },
        zodiac: {
            type: Sequelize.STRING
        },

        //lifestyle
        appearance: {
            type: Sequelize.STRING
        },
        height: {
            type: Sequelize.STRING
        },
        weight: {
            type: Sequelize.STRING
        },

        habits: {
            type: Sequelize.STRING
        },
        languages_known: {
            type: Sequelize.STRING
        },

        //educational and job details-
        education: {
            type: Sequelize.STRING
        },
        business: {
            type: Sequelize.STRING
        },
        Annual_income: {
            type: Sequelize.STRING
        },
        designation: {
            type: Sequelize.STRING
        },
        workPlace: {
            type: Sequelize.STRING
        },
        //family details-
        father: {
            type: Sequelize.STRING
        },
        mother: {
            type: Sequelize.STRING
        },
        brother: {
            type: Sequelize.STRING
        },
        sister: {
            type: Sequelize.STRING
        },
        fatherContact: {
            type: Sequelize.STRING
        },
        motherContact: {
            type: Sequelize.STRING
        },
        sisterContact: {
            type: Sequelize.STRING
        },
        brotherContact: {
            type: Sequelize.STRING
        },
        careTaker: {
            type: Sequelize.STRING
        },
        careTakerContact: {
            type: Sequelize.STRING
        },
        //Desired partner-
        partnerAge: {
            type: Sequelize.STRING
        },
        partnerheight: {
            type: Sequelize.STRING
        },
        partnerMarriedStatus: {
            type: Sequelize.STRING
        },
        caste: {
            type: Sequelize.STRING
        },
        religion: {
            type: Sequelize.STRING
        },
        expectation: {
            type: Sequelize.STRING
        },
        partnerIncome: {
            type: Sequelize.STRING
        },
        partnerOccupation: {
            type: Sequelize.STRING
        },
        partnerEducation: {
            type: Sequelize.STRING
        },
        //upload photos
        passport: {
            type: Sequelize.STRING
        },
        fullPhoto: {
            type: Sequelize.STRING
        },

    });
    return User;
};
