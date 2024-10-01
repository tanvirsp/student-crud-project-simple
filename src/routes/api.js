const express = require('express');
const router = express.Router();


const StudentController = require("../controllers/StudentController");





//Slider API
router.post("/student",   StudentController.AddStudent);
router.get("/student/:id",  StudentController.StudentDetails);
router.get("/students", StudentController.StudentList);
router.post("/student/:id",   StudentController.UpdateStudent);
router.delete("/student/:id",  StudentController.DeleteStudent);


 
 

module.exports = router;