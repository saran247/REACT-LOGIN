const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const LoginformModel = require("./models/Loginform");

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5173"], 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type"], 
  }));
  


mongoose.connect("mongodb://localhost:27017/Loginform", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));

app.post("/login",(req,res)=>
{
    const {email,password}=req.body;
    LoginformModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }
            else{
                res.json("the password is incorrect")
            }
        }
        else{
            res.json("No Record Found")
        }
    })
})
app.post('/register', async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const user = await LoginformModel.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    console.error("Error inserting data:", err);
    res.status(500).json({ error: "Failed to register user" });
  }
});


app.listen(3001, () => {
  console.log("The Server is running on http://localhost:3001");
});