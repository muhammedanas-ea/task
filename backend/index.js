import express from "express";
import env from "dotenv";
import cors from "cors";
import mysql from 'mysql2';
import Routes from "./routes/Routes.js";
import fileupload from "express-fileupload";
import { Cloudinary } from "./config/clodinary.js";
import { corsOptions } from "./config/clodinary.js";
const app = express();
env.config();

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'anasachu2000',
    database: 'adminData'
  });
  
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err.stack);
      return;
    }
    console.log('Connected to the database as id ' + connection.threadId);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "/temp/",
    limits: { fileSize: 100 * 2024 * 1024 },
  })
);

Cloudinary();

app.use(cors(corsOptions));
app.use("/", Routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
