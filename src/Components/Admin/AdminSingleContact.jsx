import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate,useParams } from 'react-router-dom'


import LeftNav from './LeftNav';
import { deleteContact, getContact, updateContact } from '../../Store/ActionCreators/ContactActionCreators';
export default function AdminSingleContact() {
    var [contact, setContact] = useState({})
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var {id} = useParams()
    var contacts = useSelector((state) => state.ContactStateData)

    function updateRecord(){
        dispatch(updateContact({...contact,status:"Done"}));
        setContact(old=>{
            return{
                ...old,
                ['status']:"Done"
            }
        })
        getAPIData()
    }
    function deleteRecord(){
        dispatch(deleteContact({ id: contact.id }));
        navigate("/admin-contact")
    }
    function getAPIData() {
        dispatch(getContact())
        var item = contacts.find((item)=>item.id === Number(id))
        if(item)
            setContact(item)
    }
    useEffect(() => {
        getAPIData()
    }, [contacts.length,contact.status])
  return (
    <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-md-9 col-12">
                        <h5 className='bg-primary text-center p-2 text-light'>Contact Us Detail</h5>
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <td>{contact.id}</td>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <td>{contact.name}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{contact.email}</td>
                                </tr>
                                <tr>
                                    <th>Phone</th>
                                    <td>{contact.phone}</td>
                                </tr>
                                <tr>
                                    <th>Status</th>
                                    <td>{contact.status}</td>
                                </tr>
                                <tr>
                                    <th>Subject</th>
                                    <td>{contact.subject}</td>
                                </tr>
                                <tr>
                                    <th>Message</th>
                                    <td>{contact.message}</td>
                                </tr>
                                <tr>
                                    <th>Date</th>
                                    <td>{contact.date}</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        {
                                            contact.status==="Done"?<button className='btn btn-primary w-100' onClick={deleteRecord
                                            }>Delete</button>:<button className='btn btn-primary w-100' onClick={updateRecord
                                            }>Change Status to Done</button>
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
  )
}
