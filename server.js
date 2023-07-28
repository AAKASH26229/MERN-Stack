const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors(
  origin:["https://mern-stack-eued.vercel.app"],
  methods: ["POST","GET"]
  credentials: true
));

// const MONGO_USERNAME = 'your_username';
// const MONGO_PASSWORD = 'your_password';
// const MONGO_HOST = 'localhost';
// const MONGO_PORT = 27017;
// const MONGO_DB = 'restaurant';
// Connect to MongoDB database
//mongoose.connect("mongodb://127.0.0.1:27017")username:password@localhost:27017/mydatabase
mongoose.connect("mongodb://127.0.0.1:27017/restaurant",{useNewUrlParser:true, useUnifiedTopology: true })
//  mongoose.connect(`mongodb://${}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`)
// mongoose.connect('mongodb://localhost:27017/restaurant', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   connectTimeoutMS: 30000, // Increase timeout to 30 seconds (adjust as needed)
// })

  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });

// Define a schema for the menu item
const menuItemSchema = new mongoose.Schema({
  id: Number,
  name: String,
  image: String,
  category: String,
  label: String,
  price: String,
  description: String,
});

// Create a model based on the schema
const MenuItem = mongoose.model('MenuItem', menuItemSchema);

// Define API routes
app.get('/api/menu', async (req, res) => {
  try {
    console.log("Testiing!");
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  

  } catch (error) {
    console.log('Error retrieving menu items:', error);
    res.status(500).json({ error: 'Failed to retrieve menu items' });
  }
});

app.put('/api/menu/:id', async (req, res) => {
  const { id } = req.params;
  const { price } = req.body;

  try {
    await MenuItem.updateOne({ id }, { price });
    res.json({ message: 'Price updated successfully' });
  } catch (error) {
    console.log('Error updating price:', error);
    res.status(500).json({ error: 'Failed to update price' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
