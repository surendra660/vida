//import from packages

const express = require("express");
const mongoose = require("mongoose");

//import from other file
const authRouter=require('./routes/auth');
const PORT=3001;
const app = express(); 
const DB="mongodb+srv://swati:vidaproject@cluster0.w0n05xa.mongodb.net/?retryWrites=true&w=majority";
//middleware
app.use(express.json());
app.use(authRouter);

//connections
mongoose.connect(DB).then( () => {
  console.log('connection successful');
}).catch (e=>{
    console.log(e); 
});
app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
  });
//init
 


app.listen(PORT, ()=>{
   console.log(`connected at port ${PORT}`);

});