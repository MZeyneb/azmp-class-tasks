const axios = require("axios");
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const { Schema } = mongoose;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})



mongoose.connect('mongodb+srv://zeynebmustafa05:z2005z@cluster0.xmyod.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {

        console.log('Connected!')
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })

    });




const blogSchema = new Schema({
  title: String,
  author: String
});


const blogModel = mongoose.model("blog", blogSchema);

app.get("/blog", async (req, res)=>{
    const blogs = await blogModel.find()
    res.send(blogs)
})

app.delete("/blog/:id", async(req,res)=>{
    const id = req.params.id;
    const deleted = await blogModel.findByIdAndDelete(id)

})

