const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const authRoutes = require('./routes/auth');
const employeeRoutes = require('./routes/employee');

dotenv.config();

const app = express();

mongoose.connect(process.env.mogo_url);

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);      // Auth routes
app.use('/api/employees', employeeRoutes);  // Employee CRUD routes

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
