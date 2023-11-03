const express = require("express");
const { isAdminPrimium, goToLogin} = require("../middlewares/auth.middleware");
const {
    getWithQuerys,
    getProductById,
    addProduct,
    addManyProducts,
    deleteProduct,
    updateProduct, 
    getProductError 
   } = require ('../controller/products.controller');

const {productsUploader,usersUploader} = require('../utils/multer')

const router = new express.Router();
router.use(express.json());   
router.use(express.urlencoded({ extended: true }));

router.get("/", getWithQuerys); 
router.get("/:pid", isAdminPrimium, getProductById);
// router.post("/",goToLogin, isAdminPrimium, addProduct);  
router.post("/",addProduct); // sin middlewares para test
router.post("/many",goToLogin,isAdminPrimium, addManyProducts);
// router.delete("/:pid",goToLogin,isAdminPrimium, deleteProduct); 
router.delete("/:pid",deleteProduct); // sin middelewares para Test 
// router.put("/:id",goToLogin,isAdminPrimium,updateProduct);
router.put("/:id",updateProduct); // sin middlewares para Test
router.get("*", getProductError);

module.exports = router;
