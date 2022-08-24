const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const path = require('path')
const PORT = process.env.PORT || 8080;


const dressRoutes = require('./routes/dressRoute');
const rentRoutes = require('./routes/rentRoute');
// const userRoutes = require('./routes/userRoute');

app.use(express.json());
app.use(cors());
app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/dress', dressRoutes);
app.use('/rent', rentRoutes);
// app.use('/users', userRoutes);


app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
