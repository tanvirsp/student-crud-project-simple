
const mongoose = require('mongoose');
const SliderModel = require("../models/StudentModel");
const ObjectId= mongoose.Types.ObjectId;

exports.AddStudentService = async(req) =>{

    try {
        const reqBody = req.body;
        const data = await SliderModel.create(reqBody);

        return {status:"success", data:data};

    } catch (error) {

        return {status:"fail",data:error.toString()}

    }

}


exports.StudentListService = async(req) =>{
    try {
        const data = await SliderModel.find({});
        return {status:"success", data:data};

    } catch (error) {
        return {status:"fail",data:error.toString()}
    }

}


exports.StudentDetailsService = async(req) =>{
    try {
        const id = new ObjectId(req.params.id);

        const data = await SliderModel.findOne({_id: id});
        return {status:"success", data:data};

    } catch (error) {
        return {status:"fail",data:error.toString()}
    }

}


exports.UpdateStudentService = async(req) =>{
    try {
        const id = new ObjectId(req.params.id);
        const reqBody = req.body;

        const data = await SliderModel.updateOne({_id: id}, {$set: reqBody});
        return {status:"success", data:data};

    } catch (error) {
        return {status:"fail", data:error.toString()}
    }

}



exports.DeleteStudentService = async(req) =>{

    try {
        const id = new ObjectId(req.params.id);
        const data = await SliderModel.deleteOne({_id: id});
        return {status:"success", data:data};

    } catch (error) {
        return {status:"fail",data:error.toString()}

    }
}
