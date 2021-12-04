const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

// Routes
const thoughtRoute = require('./routes/thought');


dotenv.config();



// Handles the database connection
mongoose.connect(process.env.DB_CONNECT,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    },()=>{
    console.log('Connected to Db!');
});

// Middleware
app.use(cors())
app.use(express.json());

// Route Middlewares
app.use('/api/thought',thoughtRoute);

// Server
const server = app.listen(process.env.PORT || 3000,()=>{
    console.log(`Server Running on port ${server.address().port}\n`);
})