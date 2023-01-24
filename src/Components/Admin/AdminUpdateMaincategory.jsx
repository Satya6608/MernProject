import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { updateMaincategory } from '../../Store/ActionCreators/MaincategoryActionCreators'
import { useNavigate, useParams } from 'react-router-dom'

import LeftNav from './LeftNav'

export default function AdminUpdateMaincategory() {
    var [name,setname] = useState("")
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var maincategory = useSelector((state) => state.MaincategoryStateData)
    var {id} = useParams()
    function getData(e){
        setname(e.target.value)
    }
    function postData(e){
        e.preventDefault()
        var data = maincategory.find((item)=>item.name===name)
        if(data)
        alert("Maincategory Already Exist!!!")
        else{
            dispatch(updateMaincategory({id:id,name:name}))
            navigate("/admin-maincategory")
        }
    }
    useEffect(()=>{
        var data = maincategory.find((item)=>item.id===Number(id))
        if(data)
        setname(data.name)
    },[maincategory])
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
                                    <input type="text" className="form-control" id="name" name='name' onChange={getData} placeholder="Your Maincategory Name" required value={name}/>
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
