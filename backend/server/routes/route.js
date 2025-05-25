const express = require("express")
const router = express.Router()
const upload = require("../middleware/multer")
const {createUser, getAllUser, getUserById,updateUserById, deleteUser,loginUser,SendOtp,verifyOtp} = require("../api/user/userController")
const {loginAdmin} = require("../config/seed")
const {creatproduct,getAllProducts,getProductById,updateProductById,deleteProduct}=require("../api/products/productcontroller")
const{createMilkType,getAllMilkTypes,getMilkTypeById,updateMilkTypeById,deleteMilkType } =require("../api/milktype/milktypecontroller")
const{createDairyEntry,getAllDairyEntries,getDairyEntryById,updateDairyEntryById,deleteDairyEntry} =require("../api/dairyEntry/dairyentrycontroller")
const { createSalary, getAllSalaries, getSalaryById, updateSalaryById, deleteSalary, getSalaryByBoyId}=require("../api/salary/salarycontroller")
const{createEnquiry,getAllEnquiries,getEnquiryById,updateEnquiryById,deleteEnquiry,}=require("../api/veiwenquiry/enquirycontroller")
const {createMonthlyBill,getAllMonthlyBills,getMonthlyBillById,updateMonthlyBill,deleteMonthlyBill,getMonthlyBillsByCustomerId} = require("../api/monthlyBill/monthlyController")

router.post("/sendotp",SendOtp)
router.post("/verifyotp",verifyOtp)
router.post("/createbill",createMonthlyBill)
router.post("/getallmonthsbill",getAllMonthlyBills)
router.post("/getmonthbillbyid",getMonthlyBillById)
router.post("/updatemonthbillbyid",updateMonthlyBill)
router.post("/deletemonthbillbyid",deleteMonthlyBill)
router.post("/getMonthlyBillsByCustomerId", getMonthlyBillsByCustomerId);

// ENQUIRY ROUTES
router.post("/createEnquiry",createEnquiry)
router.post("/getAllEnquiries",getAllEnquiries)
router.post("/getEnquiryById",getEnquiryById)
router.post("/updateEnquiryById",updateEnquiryById)
router.post("/deleteEnquiry",deleteEnquiry)

// SALARY ROUTES
router.post("/createSalary",createSalary)
router.post("/getAllSalaries",getAllSalaries)
router.post("/getSalaryById",getSalaryById)
router.post("/updateSalaryById",updateSalaryById)
router.post("/getSalaryByBoyId",getSalaryByBoyId)
router.post("/deleteSalary",deleteSalary)



// DAIRY ENTRY ROUTES
router.post("/createDairyEntry",createDairyEntry)
router.post("/getAllDairyEntries",getAllDairyEntries)
router.post("/getDairyEntryById",getDairyEntryById)
router.post("/updateDairyEntryById",updateDairyEntryById)
router.post("/deleteDairyEntry",deleteDairyEntry)

// MILK TYPE ROUTES
router.post("/createMilkType",createMilkType)
router.post("/getMilkTypeById",getMilkTypeById)
router.post("/getAllMilkTypes",getAllMilkTypes)
router.post("/updateMilkTypeById",updateMilkTypeById)
router.post("/deleteMilkType",deleteMilkType)


// PRODUCT TYPE ROUTES
router.post("/getAllProducts",getAllProducts)
router.post("/creatproduct",creatproduct)
router.post("/getProductById",getProductById)
router.post("/updateProductById",updateProductById)
router.post("/deleteProduct",deleteProduct)


router.post("/loginadmin",loginAdmin)
router.post('/createuser',upload.single("idProof"),createUser);

router.post("/getalluser",getAllUser)
router.post("/getuserby",getUserById)
router.post("/updateUserById",updateUserById)
router.post("/deleteUser",deleteUser)
router.post("/loginuser",loginUser)



module.exports = router