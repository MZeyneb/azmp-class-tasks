const modelProduct = require("../models/index");
const getAllProducts = async(req, res)=>{
    const products = await modelProduct.find()

}

const getProductById = async(req, res)=>{
    const id = req.params.id
    const product = await modelProduct.findById(id)
}

const deleteProduct =  async (req, res) => {
    const id = req.params.id
    const deleted = modelProduct.findByIdAndDelete(id)

}

const post =  async (req, res) => {
    const newProduct = modelProduct({ ...req.body });
    await newProduct.save();

}

const put = async (req, res) => {
    const id = req.params.id
    const updated = await modelProduct.findByIdAndUpdate(
        id,
        {
            ...req.body,
        },
        {
            new: true
        }
    )
    res.json(updated)

}

module.exports = {
    getAllProducts,
    put,
    post,
    deleteProduct,
    getProductById
}
