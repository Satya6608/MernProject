import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { getUser, updateUser } from "../Store/ActionCreators/UserActionCreators"
export default function UpdateProfile() {
    var [data, setdata] = useState({
        name: "",
        pic: "",
        email: "",
        phone: "",
        addressline1: "",
        addressline2: "",
        addressline3: "",
        pin: "",
        city: "",
        state: "",
    })
    var navigate = useNavigate()
    var dispatch = useDispatch()
    var users = useSelector((state) => state.UserStateData)
    function getData(e) {
        var name = e.target.name
        var value = e.target.value
        setdata((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function getFile(e) {   
        var name = e.target.name
        var value = e.target.files[0].name
        setdata((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    async function postData(e) {
        e.preventDefault()
        var item = {
            id:data.id,
            name: data.name,
            username: data.username,
            email: data.email,
            phone: data.phone,
            password: data.password,
            addressline1: data.addressline1,
            addressline2: data.addressline2,
            addressline3: data.addressline3,
            pin: data.pin,
            city: data.city,
            state: data.state,
            pic: data.pic,
            role: "User",
            otp: data.otp,
            password:data.password
        }
        dispatch(updateUser(item))
        navigate("/profile")
    }
    useEffect(() => {
        dispatch(getUser())
        var data = users.find((item) => item.id === Number(localStorage.getItem("userid")))
        if (data)
            setdata(data)
    }, [])
    return (
        <>
            <div className="container-fluid mb-5">
                <div className="" style={{ margin: "Auto", width: "80%" }}>
                    <h5 className='bg-primary text-center p-2'>Update Profile Section</h5>
                    <div className="contact-form">
                        <form onSubmit={postData}>
                            <div className="row mb-3">
                                <div className="control-group col-md-6 col-12">
                                    <input type="text" className="form-control" onChange={getData} id="name" name='name' placeholder="Enter Full Name" value={data.name}/>
                                </div>
                                <div className="control-group col-md-6 col-12">
                                    <input type="file" className="form-control" onChange={getFile} id="pic" name='pic' />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="control-group col-md-6 col-12">
                                    <input type="email" className="form-control" onChange={getData} id="email" name='email' placeholder="Enter Email Address"  value={data.email}/>
                                </div>
                                <div className="control-group col-md-6 col-12">
                                    <input type="text" className="form-control" onChange={getData} id="phone" name='phone' placeholder="Enter Phone Number"  value={data.phone}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="control-group col-md-6 col-12">
                                    <input type="text" className="form-control" onChange={getData} id="addressline1" name='addressline1' placeholder="Enter House, Building or Floor Number"  value={data.addressline1}/>
                                </div>
                                <div className="control-group col-md-6 col-12">
                                    <input type="text" className="form-control" onChange={getData} id="addressline2" name='addressline2' placeholder="Enter Street Number or Near By"  value={data.addressline2}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="control-group col-md-6 col-12">
                                    <input type="text" className="form-control" onChange={getData} id="addressline3" name='addressline3' placeholder="Enter Village or Locality"  value={data.addressline3}/>
                                </div>
                                <div className="control-group col-md-6 col-12">
                                    <input type="text" className="form-control" onChange={getData} id="pin" name='pin' placeholder="Enter Pin Number" value={data.pin} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="control-group col-md-6 col-12">
                                    <input type="text" className="form-control" onChange={getData} id="city" name='city' placeholder="Enter City Name"  value={data.city}/>
                                </div>
                                <div className="control-group col-md-6 col-12">
                                    <input type="text" className="form-control" onChange={getData} id="state" name='state' placeholder="Enter State Name"  value={data.state}/>
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-primary py-2 px-4 w-100" type="submit" id="">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
