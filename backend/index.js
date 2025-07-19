
const express = require('express')
const app=express()
const cors = require("cors");

const mongoose = require('mongoose');
const port=process.env.PORT || 5000;

require('dotenv').config()

//middleware

app.use(express.json());
app.use(cors({
  origin:['http://localhost:5173/'],
  credentials: true
}))

//routes
const booksRoutes=require('./src/books/book.route')
const orderRoutes = require("./src/orders/order.route")
app.use("/api/books",booksRoutes)
app.use("/api/orders",orderRoutes)




async function main() {

  await mongoose.connect(process.env.DB_URL);

  app.use('/',(req,res)=>{
    res.send("Book store server!");
});

}

main().then(()=> console.log("Mongodb connect successfully")).catch(err => console.log(err));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});















