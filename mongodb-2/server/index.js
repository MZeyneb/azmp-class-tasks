const express = require('express')
const mongoose = require('mongoose');
const axios = require('axios');

const app = express()
const port = 3000
app.get('/',(req, res) => {
  res.send("Hello World")
})


app.use(express.json())

mongoose.connect('mongodb+srv://zeynebmustafa05:z2005z@cluster0.xmyod.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    
    console.log('Connected!')
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })

});
const { Schema }= mongoose
const blogSchema = new Schema({
    title: String,
    author: String,
});

const modelBlog = mongoose.model("blog", blogSchema)


app.get('/blog', async(req, res) => {
    const blogs = await modelBlog.find()

  res.send(blogs)
})

app.delete("/blog/:id", async(req,res)=>{
    const id = req.params.id;
    const deleted = await modelBlog.findByIdAndDelete(id)
})