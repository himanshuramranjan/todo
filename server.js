const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

dotenv.config({path:'./config.env'}); 

// Close Down server on any uncaught exception
process.on('uncaughtException', err => {

    console.log(err.message);
    console.log('Some Uncaught Exception ! Closing Down the server ...');
    
    // Exit the app
    process.exit(1);
});

// Define MongoDB connection URI
const DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PSWD
);

// Connect to DB
mongoose.connect(DB, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology: true
}).then(con => {
    console.log('Connected w/ MongoDB');
});


const PORT = process.env.PORT || 8080;

const server = app.listen(PORT,() => {
    console.log(`App is running on the port: ${PORT}`);
});

// Close Down Server on Unhadled Rejections from promise
process.on('unhandledRejection', err => {
    console.log(err.message);
    console.log('Some Unhandled Rejections from promise ! Closing Down the server ...');
    
    // Close any active connection
    server.close(() => {
        process.exit(1);
    })
});