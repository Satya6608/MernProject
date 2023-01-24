import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addSubcategory } from '../../Store/ActionCreators/SubcategoryActionCreators'
import { useNavigate } from 'react-router-dom'

import LeftNav from './LeftNav'

export default function AdminAddSubcategory() {
    var [name,setname] = useState("")
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var subcategory = useSelector((state) => state.SubcategoryStateData)
    function getData(e){
        setname(e.target.value)
    }
    function postData(e){
        e.preventDefault()
        var data = subcategory.find((item)=>item.name===name)
        if(data)
        alert("Subcategory Already Exist!!!")
        else{
            dispatch(addSubcategory({name}))
            navigate("/admin-subcategory")
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
                        <h5 className='bg-primary text-center p-2 text-light'>Subcategory </h5>
                        <form onSubmit={postData}>
                                <div className="control-group mb-3">
                                    <input type="text" className="form-control" id="name" name='name' onChange={getData} placeholder="Your Subcategory Name" required/>
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
