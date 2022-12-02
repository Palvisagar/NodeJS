const router = require('express').Router()
var categorycontroller = require('../controller/categoryController')
var productcontroller = require('../controller/productController')


router.post('/addcategory',categorycontroller.addcategory)
router.get('/listcategory',categorycontroller.listCategory)
router.get('/addproduct',productcontroller.addProduct)
router.get('/listproduct',productcontroller.listProduct)

module.exports = router
