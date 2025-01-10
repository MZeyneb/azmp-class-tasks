const express = require("express")

const {
    getAllProducts,
    put,
    post,
    deleteProduct,
    getProductById
} = require("../controllers/index")

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);
router.post("/", post);
router.put("/:id", put);

module.exports = router;