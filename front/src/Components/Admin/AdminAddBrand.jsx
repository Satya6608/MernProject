import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBrand } from '../../Store/ActionCreators/BrandActionCreators'
import { useNavigate } from 'react-router-dom'

import LeftNav from './LeftNav'

export default function AdminAddBrand() {
    var [name, setname] = useState("")
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var brand = useSelector((state) => state.BrandStateData)
    function getData(e) {
        setname(e.target.value)
    }
    function postData(e) {
        e.preventDefault()
        var data = brand.find((item) => item.name === name)
        if (data)
            alert("Brand Already Exist!!!")
        else {
            dispatch(addBrand({ name }))
            navigate("/admin-brand")
        }
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-md-9 col-12">
                        <h5 className='bg-primary text-center p-2 text-light'>Brand </h5>
                        <form onSubmit={postData}>
                            <div className="control-group mb-3">
                                <input type="text" className="form-control" id="name" name='name' onChange={getData} placeholder="Your Brand Name" required />
                            </div>
                            <div>
                                <button className="btn btn-primary py-2 px-4 d-block w-100" type="submit" id="sendMessageButton">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
