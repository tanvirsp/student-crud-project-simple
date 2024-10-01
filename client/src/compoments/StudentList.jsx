import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import AddStudentModal from "./AddStudentModal";
import { useEffect, useState } from "react";
import StudentStore from "../store/StudentStore";
import { Table } from "react-bootstrap";
import RowSkeleton from "../skeletons/RowSkeleton";
import Empty from "./Empty";
import Swal from "sweetalert2";
import EditStudentModal from "./EditStudentModal";
import { GrView } from "react-icons/gr";
import DetailsModal from "./DetailsModal";




const StudentList = () => {

    const [addModalShow, setAddModalShow] = useState(false);
    const [detailsModalShow, setDetailsModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [studentId, setStudentId] = useState("")

    //Global State by Zustand
    const {StudentListRequest, StudentList, DeleteStudentRequest} = StudentStore();


    useEffect(()=>{
        (async()=>{
            StudentList === null && await StudentListRequest()
        })()
    } ,[]);



    
    const handleEditModal = (id)=>{
        setEditModalShow(true);
        setStudentId(id)
    }


    const handleDetailsModal = (id)=>{
        setDetailsModalShow(true);
        setStudentId(id)
    }



//delete slider
    const handleDelete = async(id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              (async()=>{
                const res = await DeleteStudentRequest(id);
                if(res.status=== "success"){ 
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    await StudentListRequest()
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                }
              })()
            }
          });

    }






    return (
        <div>
            <div className="bg-white p-4 mt-2 rounded-3 d-flex justify-content-between align-items-center">
                <button onClick={() =>setAddModalShow(true)} className="btn btn-success">Add New Data</button>
                <h6>Total: {StudentList?.length}</h6>
            </div>
            <div className="bg-white p-4 rounded-3 mt-2" >
                <Table  className="align-middle text-center">
                    <thead >
                        <tr >
                            <th>Sl</th>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Department</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            StudentList === null ? <tr><td colSpan="6"> <RowSkeleton /> </td></tr> :
                            StudentList.length === 0 ? <tr><td colSpan="6"> <Empty title="Student" /> </td></tr> :
                            StudentList.map( (item, index) =>{
                                return(
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.id}</td>
                                        <td>{item.department}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <button onClick={()=>handleDetailsModal(item._id)}  className="btn btn-outline-info " title="View"> <GrView /> </button> 
                                            <button onClick={()=>handleEditModal(item._id)}  className="btn btn-outline-success mx-2 " title="Edit"> <FaRegEdit /> </button> 
                                            <button onClick={()=>handleDelete(item._id)} className="btn btn-outline-danger " title="Delete"> <RiDeleteBin2Line  /> </button> 
                                        </td>
                                    </tr>
                                )
                            } )
                        }
                    
                    </tbody>
                </Table>

                <DetailsModal  show={detailsModalShow}  onHide={() => setDetailsModalShow(false)} />
                <AddStudentModal  show={addModalShow}  onHide={() => setAddModalShow(false)} />
                <EditStudentModal id={studentId} show={editModalShow}  onHide={() => setEditModalShow(false)} />

            </div>
            
        </div>
    );
};

export default StudentList;