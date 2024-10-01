const { AddStudentService, StudentListService, StudentDetailsService, UpdateStudentService, DeleteStudentService } = require("../services/StudentServices");




exports.AddStudent = async( req, res) =>{
    const result = await AddStudentService(req);

    res.status(200).json(result)
}



exports.StudentList = async( req, res) =>{
    const result = await StudentListService(req);
    
    res.status(200).json(result)

}



exports.StudentDetails = async( req, res) =>{
    const result = await StudentDetailsService(req);
    
    res.status(200).json(result)
}



exports.UpdateStudent = async( req, res) =>{
    const result = await UpdateStudentService(req);
    
    res.status(200).json(result)
}


exports.DeleteStudent = async( req, res) =>{
    const result = await DeleteStudentService(req);

    res.status(200).json(result)
}



