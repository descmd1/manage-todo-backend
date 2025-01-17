// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const taskRoutes = require('./routes/taskRoutes');
// require('dotenv').config();


// const app = express();

// // Middleware
// app.use(cors({
//     // origin: 'http://localhost:3000',
//     origin: 'https://taskmaneja.netlify.app/'
//   }));
// app.use(express.json());

// // Routes
// app.use('/api', taskRoutes);

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((error) => console.log('Error connecting to MongoDB:', error));


// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



const connectDB = require('./connectDB');
const Task = require('../models/Task');
const { getTasks, addTask, editTask, deleteTask, toggleTaskCompletion } = require('../controllers/taskController');

module.exports = async (req, res) => {
  // Ensure DB connection is established
  await connectDB();

  switch (req.method) {
    case 'GET':
      await getTasks(req, res);
      break;
    case 'POST':
      await addTask(req, res);
      break;
    case 'PUT':
      await editTask(req, res);
      break;
    case 'DELETE':
      await deleteTask(req, res);
      break;
    case 'PATCH':
      await toggleTaskCompletion(req, res);
      break;
    default:
      res.status(405).json({ message: 'Method not allowed' });
  }
};
