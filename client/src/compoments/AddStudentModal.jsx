/* eslint-disable react/prop-types */
import { useState } from "react";
import { Modal } from "react-bootstrap";
import StudentStore from "../store/StudentStore";
import toast from 'react-hot-toast';


const AddStudentModal = (props) => {

    const [data, setData] = useState({});

    //Global State by Zustand
    const {AddStudentRequest, StudentListRequest} = StudentStore();





    const handleSubmit =async(e)=>{
        e.preventDefault();

        
        const result = await AddStudentRequest(data);
        if(result.status === "success"){
            toast.success("Student addeded successfully")
            await StudentListRequest();
            props.onHide();

        } else{
            toast.error("Something went wrong");
        }

    };


    const handleData =(name, value) =>{
        setData({
            ...data,
            [name]: value
        })

    }


    return (
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >

        <Modal.Header closeButton>
            <Modal.Title>Add Person</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <div className=" p-4 bg-white rounded-3">
                
                <form  onSubmit={handleSubmit} >
                    <label className="form-label mt-3">Name </label>
                    <input onBlur={(e)=>handleData("name", e.target.value)} required  className="form-control"  />

                    <label className="form-label mt-3">ID </label>
                    <input onBlur={(e)=>handleData("id", e.target.value)} required   className="form-control"  />

                    <label className="form-label mt-3">Department </label>
                    <input onBlur={(e)=>handleData("department", e.target.value)} required  className="form-control"  />

                    <label className="form-label mt-3">Email </label>
                    <input onBlur={(e)=>handleData("email", e.target.value)} type="email"  required className="form-control"  />
                        
                   
                    <div className="text-end">
                        <input  className="btn btn-success mt-5" type="submit" value="Add Student"/>
                    </div>
                </form>
            </div>

        </Modal.Body>
        
        </Modal>
    );
};

export default AddStudentModal;