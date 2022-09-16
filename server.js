const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
    origin: "*"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route

//include routes in server.js 
const userRouter = require('./app/routes/router');
app.use("/user", userRouter);

const feedbackRouter = require('./app/routes/router');
app.use("/feedback", feedbackRouter);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

