const express = require("express");
const router = express.Router()

const controllers = require("../controllers/products")

router.get("/" , controllers.getAllProducts)
router.get("/:id" , controllers.getSingleProduct)


module.exports = router ; 