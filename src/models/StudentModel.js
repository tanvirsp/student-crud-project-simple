const mongoose = require('mongoose');

const dataSchema = mongoose.Schema( {
    name : {type: String, required: true},
    id : {type: String, required: true },
    department : {type: String, required: true  },
    email : {type: String, required: true  },


}, {timestamps: true, versionKey:false});



const StudentModel = mongoose.model("students", dataSchema );

module.exports = StudentModel