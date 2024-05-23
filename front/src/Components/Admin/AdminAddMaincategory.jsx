import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addMaincategory } from '../../Store/ActionCreators/MaincategoryActionCreators'
import { useNavigate } from 'react-router-dom'

import LeftNav from './LeftNav'

export default function AdminAddMaincategory() {
    var [name,setname] = useState("")
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var maincategory = useSelector((state) => state.MaincategoryStateData)
    function getData(e){
        setname(e.target.value)
    }
    function postData(e){
        e.preventDefault()
        var data = maincategory.find((item)=>item.name===name)
        if(data)
        alert("Maincategory Already Exist!!!")
        else{
            dispatch(addMaincategory({name}))
            navigate("/admin-maincategory")
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
                        <h5 className='bg-primary text-center p-2 text-light'>Maincategory </h5>
                        <form onSubmit={postData}>
                                <div className="control-group mb-3">
                                    <input type="text" className="form-control" id="name" name='name' onChange={getData} placeholder="Your Maincategory Name" required/>
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
