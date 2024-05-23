import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Link, useNavigate } from 'react-router-dom'
import { getUser } from "../Store/ActionCreators/UserActionCreators"
export default function Login() {
    var [data, setdata] = useState({
        username: "",
        password: ""
    })
    var [show, setshow] = useState(false)
    var navigate = useNavigate()
    var dispatch = useDispatch()
    var users = useSelector((state) => state.UserStateData)
    function getData(e) {
        var name = e.target.name
        var value = e.target.value
        setshow(false)
        setdata((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    async function postData(e) {
        e.preventDefault()
        var user = users.find((item) => item.username === data.username && item.password === data.password)
        if (user) {
            localStorage.setItem("login", true)
            localStorage.setItem("username", user.username)
            localStorage.setItem("name", user.name)
            localStorage.setItem("role", user.role)
            localStorage.setItem("userid", user.id)
            navigate("/profile")
        }
        else
            setshow(true)
    }
    useEffect(() => {
        dispatch(getUser())
    }, [])
    return (
        <>
            <div className="container-fluid mb-5">
                <div className="w-50" style={{ margin: "Auto" }}>
                    <h5 className='bg-primary text-center p-2'>Login Section</h5>
                    <div className="contact-form">
                        {
                            show ? <div className="alert alert-danger text-center alert-dismissible fade show" role="alert">
                                Invalid Username or Password!!!
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div> : ""
                        }
                        <form onSubmit={postData}>
                            <div className="control-group mb-3">
                                <input type="text" className="form-control" onChange={getData} id="username" name='username' placeholder="Enter User Name"
                                    required />
                            </div>
                            <div className="control-group mb-3">
                                <input type="password" className="form-control" onChange={getData} id="password" name='password' placeholder="Enter Password"
                                    required />
                            </div>
                            <div>
                                <button className="btn btn-primary py-2 px-4 w-100" type="submit" id="">Login</button>
                            </div>
                            <div className="d-flex justify-content-between">
                                <Link to="#">Forget Password</Link>
                                <Link to="/signup">New User?Create a Free Account</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
