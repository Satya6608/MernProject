import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Link, useNavigate } from 'react-router-dom'
import { getUser, addUser } from "../Store/ActionCreators/UserActionCreators"
export default function SignUP() {
    var [data, setdata] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        cpassword: ""
    })
    var [show, setshow] = useState(false)
    var [msg, setmsg] = useState("")
    var navigate = useNavigate()
    var dispatch = useDispatch()
    var users = useSelector((state) => state.UserStateData)
    function getData(e) {
        setshow(false)
        var name = e.target.name
        var value = e.target.value
        setdata((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    async function postData(e) {
        e.preventDefault()
        if (data.password !== data.cpassword) {
            setshow(true)
            setmsg("Password and Confirm Password Doesn't Matched!!!")
        }
        else {
            var u = users.find((item) => item.username === data.username)
            if (u) {
                setshow(true)
                setmsg("Username Already Taken!!!")
            } else {
                var item = {
                    name: data.name,
                    username: data.username,
                    email: data.email,
                    phone: data.phone,
                    password: data.password,
                    addressline1: "",
                    addressline2: "",
                    addressline3: "",
                    pin: "",
                    city: "",
                    state: "",
                    pic: "",
                    role: "User",
                    otp: ""
                }
                dispatch(addUser(item))
                navigate("/login")
            }
        }
    }
    useEffect(()=>{
        dispatch(getUser())
    },[])
    return (
        <>
            <div className="container-fluid mb-5">
                <div className="" style={{ margin: "Auto", width: "80%" }}>
                    <h5 className='bg-primary text-center p-2'>Signup Section</h5>
                    <div className="contact-form">
                        {
                            show ? <div className="alert alert-danger text-center alert-dismissible fade show" role="alert">
                                {msg}
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div> : ""
                        }
                        <form onSubmit={postData}>
                            <div className="row mb-3">
                                <div className="control-group col-md-6 col-12">
                                    <input type="text" className="form-control" onChange={getData} id="name" name='name' placeholder="Enter Full Name"
                                        required />
                                </div>
                                <div className="control-group col-md-6 col-12">
                                    <input type="text" className="form-control" onChange={getData} id="username" name='username' placeholder="Enter User Name"
                                        required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="control-group col-md-6 col-12">
                                    <input type="email" className="form-control" onChange={getData} id="email" name='email' placeholder="Enter Email Address"
                                        required />
                                </div>
                                <div className="control-group col-md-6 col-12">
                                    <input type="text" className="form-control" onChange={getData} id="phone" name='phone' placeholder="Enter Phone Number"
                                        required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="control-group col-md-6 col-12">
                                    <input type="password" className="form-control" onChange={getData} id="password" name='password' placeholder="Enter Password"
                                        required />
                                </div>
                                <div className="control-group col-md-6 col-12">
                                    <input type="password" className="form-control" onChange={getData} id="cpassword" name='cpassword' placeholder="Confirm Password"
                                        required />
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-primary py-2 px-4 w-100" type="submit" id="">Create Account</button>
                            </div>
                            <Link to="/login">Already User?Login to Your Account</Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
