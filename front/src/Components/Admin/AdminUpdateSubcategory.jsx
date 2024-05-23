import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { updateSubcategory } from '../../Store/ActionCreators/SubcategoryActionCreators'
import { useNavigate, useParams } from 'react-router-dom'

import LeftNav from './LeftNav'

export default function AdminUpdateSubcategory() {
    var [name,setname] = useState("")
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var subcategory = useSelector((state) => state.SubcategoryStateData)
    var {id} = useParams()
    function getData(e){
        setname(e.target.value)
    }
    function postData(e){
        e.preventDefault()
        var data = subcategory.find((item)=>item.name===name)
        if(data)
        alert("Subcategory Already Exist!!!")
        else{
            dispatch(updateSubcategory({id:id,name:name}))
            navigate("/admin-subcategory")
        }
    }
    useEffect(()=>{
        var data = subcategory.find((item)=>item.id===Number(id))
        if(data)
        setname(data.name)
    },[subcategory])
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
                                    <input type="text" className="form-control" id="name" name='name' onChange={getData} placeholder="Your Subcategory Name" required value={name}/>
                                </div>
                                <div>
                                    <button className="btn btn-primary py-2 px-4 d-block w-100" type="submit" id="sendMessageButton">Update</button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </>
    )
}
