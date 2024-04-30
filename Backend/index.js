const express = require("express");
const cors = require('cors');
const connectDB = require('./db')
const router = require('./routes/formRoutes')
const paymentRouter = require('./routes/payment.controller')
const app = express();
const port = 5000;
app.use(express.json())
// app.use(express.static(path.join(__dirname, "public"))) //  middleware 

connectDB(); 
app.use(cors());


app.use("/form/signup",router)
app.use("/form/auth",router)
app.use("/form/data",router)
// payment Routes
app.use("/payment",paymentRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});