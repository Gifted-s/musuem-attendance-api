require('dotenv').config()
const express = require("express");
const CORS = require("cors");
const helmet = require("helmet");
const visitorRoutes = require("./routes/visitor.router");
const app = express();

// Middleware
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(CORS());
app.use('/api/visitors',visitorRoutes)
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`Listening on PORT: ${PORT}`))