/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import StudentStore from "../store/StudentStore";
import toast from 'react-hot-toast';
import FullScreenLoader from "../layout/FullScreenLoader";


const EditStudentModal = (props) => {

    const [data, setData] = useState({});

    //Global State by Zustand
    const {UpdateStudentRequest,  StudentListRequest, StudentDetailsRequest, StudentDetails, Loading} = StudentStore();

    useEffect(()=>{
        (async()=>{
            props.id && await StudentDetailsRequest(props.id)
        })()
    } ,[props.id]);




    const handleSubmit =async(e)=>{
        e.preventDefault();

        const result = await UpdateStudentRequest(props.id, data);
        if(result.status === "success"){
            toast.success("Student update successfully")
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


    if(Loading) {
        return <FullScreenLoader />
    }


    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Header closeButton>
                <Modal.Title>Edit Data</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className=" p-4 bg-white rounded-3">
                    
                    <form  onSubmit={handleSubmit} >
                        <label className="form-label mt-3">Name </label>
                        <input defaultValue={StudentDetails?.name} onBlur={(e)=>handleData("name", e.target.value)} required  className="form-control"  />

                        <label className="form-label mt-3">ID </label>
                        <input defaultValue={StudentDetails?.id} onBlur={(e)=>handleData("id", e.target.value)} required   className="form-control"  />

                        <label className="form-label mt-3">Department </label>
                        <input  defaultValue={StudentDetails?.department}  onBlur={(e)=>handleData("department", e.target.value)} required  className="form-control"  />

                        <label className="form-label mt-3">Email </label>
                        <input   defaultValue={StudentDetails?.email}  onBlur={(e)=>handleData("email", e.target.value)} type="email"  required className="form-control"  />
                            
                        <div className="text-end">
                            <input  className="btn btn-success mt-5" type="submit" value="Add Student"/>
                        </div>
                    </form>
                </div>

            </Modal.Body>
        
        </Modal>
    );
};

export default EditStudentModal;