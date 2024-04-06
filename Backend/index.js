const express = require("express");
const cors = require('cors');
const connectDB = require('./db')
const router = require('./routes/formRoutes')
const app = express();
const port = 5000;
app.use(express.json())
// app.use(express.static(path.join(__dirname, "public"))) //  middleware 

connectDB(); 
app.use(cors());


app.use("/form/signup",router)
app.use("/form/auth",router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});