/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import axios from 'axios';

const StudentStore = create( (set) =>({
    

    Loading: false,

    AddStudentRequest: async(data) =>{
        const res = await axios.post(`/api/v1/student`, data);
        return res["data"];
    },
    
    StudentDetails:  null,
    StudentDetailsRequest: async(id)=>{
        set({StudentDetails: null, Loading: true });
        const res = await axios.get(`/api/v1/student/${id}`);
        if(res.data.status === "success"){
            set({StudentDetails: res.data.data, Loading: false  })
        }

    },


    StudentList: null,
    StudentListRequest: async()=>{
        set({StudentList: null});
        const res = await axios.get(`/api/v1/students`);
        if(res.data.status === "success"){
            set({StudentList: res.data.data })
        }
    },



    UpdateStudentRequest: async(id, data) =>{
        const res = await axios.post(`/api/v1/student/${id}`, data);
        return res["data"];
    },


    DeleteStudentRequest: async(id) =>{
        const res = await axios.delete(`/api/v1/student/${id}`);
        return res["data"];
    },




}) )



export default StudentStore;