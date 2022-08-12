const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const dressRoutes = require('./routes/dressRoute');
const rentRoutes = require('./routes/rentRoute');
// const userRoutes = require('./routes/userRoute');

app.use(express.json());

app.use('/dress', dressRoutes);
app.use('/rent', rentRoutes);
// app.use('/users', userRoutes);


app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});