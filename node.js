// ACE MVP - Backend (Node.js + Express)

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const propertyRoutes = require('./routes/properties');
const bookingRoutes = require('./routes/bookings');
const paymentRoutes = require('./routes/payments');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to Database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('DB Connection Error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
