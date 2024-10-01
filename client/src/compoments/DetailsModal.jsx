/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import StudentStore from "../store/StudentStore";

import FullScreenLoader from "../layout/FullScreenLoader";


const DetailsModal = (props) => {

    //Global State by Zustand
    const {StudentDetailsRequest, StudentDetails, Loading} = StudentStore();

    useEffect(()=>{
        (async()=>{
            props.id && await StudentDetailsRequest(props.id)
        })()
    } ,[props.id]);







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
                <Modal.Title>Student Details</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className=" p-4 bg-white rounded-3 text-center">
                    <h2>{StudentDetails?.name}</h2>
                    <h6>ID: {StudentDetails?.id}</h6>
                    <p>Department: {StudentDetails?.department}</p>
                    <p>Email: {StudentDetails?.email}</p>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default DetailsModal;