const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const dataRoute=require("./dataRoute.js");
const dotenv = require('dotenv');
const app = express();

mongoose.set('strictQuery', true);
dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(dataRoute);

app.listen(5000, () => console.log('Server running at port 5000...'));