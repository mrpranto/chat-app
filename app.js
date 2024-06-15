// External Import
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const loginRouter = require("./router/loginRouter");
const userRouter = require("./router/userRouter");
const inboxRouter = require("./router/inboxRouter");


//Internel Import
const {notFoundHandler, errorHandler} = require("./middleware/common/errorHandler")


const app = express();
dotenv.config();



// Database Connection

mongoose.connect(process.env.MONGO_CONNECTION_STRING)
.then(() => console.log("Database connection successful!"))
.catch(err => console.log(err));


// Request params

app.use(express.json());

app.use(express.urlencoded({
    extended:true
}))


// Set view engine

app.set("view engine", "ejs");


// Set static folder

app.use(express.static(path.join(__dirname, "public")));


// Parse cookies

app.use(cookieParser(process.env.COOKIE_SECRET));


// Routing setup

app.use('/', loginRouter);
app.use('/users', userRouter);
app.use('/inbox', inboxRouter);


// Error handling

// 404 handler

app.use(notFoundHandler);


// common handler

app.use(errorHandler);



app.listen(process.env.PORT, () => {

    console.log(`App listening to port ${process.env.PORT}`)
});