const express = require('express');
const connectDB = require('./src/models/db');
const routes = require('./src/routes/index');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();
app.use('/api', routes);
app.use('/',(req,res)=>{
  res.send("server is running")
})
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
