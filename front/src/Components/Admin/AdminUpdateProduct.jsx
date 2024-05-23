import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { getProduct, updateProduct } from '../../Store/ActionCreators/ProductActionCreators'
import { getMaincategory } from '../../Store/ActionCreators/MaincategoryActionCreators'
import { getSubcategory } from '../../Store/ActionCreators/SubcategoryActionCreators'
import { getBrand } from '../../Store/ActionCreators/BrandActionCreators'

import LeftNav from './LeftNav'

export default function AdminUpdateProduct() {
    var [data, setdata] = useState({
        name: "",
        maincategory: "",
        subcategory: "",
        brand: "",
        baseprice: 0,
        discount: 0,
        finalprice: 0,
        color: "",
        size: "",
        stock: "In Stock",
        description: "This is a Sample Product",
        pic1: "",
        pic2: "",
        pic3: "",
        pic4: ""
    })
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var maincategory = useSelector((state) => state.MaincategoryStateData)
    var subcategory = useSelector((state) => state.SubcategoryStateData)
    var brand = useSelector((state) => state.BrandStateData)
    var product = useSelector((state) => state.ProductStateData)
    var {id} = useParams()
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
    function postData(e) {
        e.preventDefault()
        var fp = parseInt(data.baseprice-data.baseprice*data.discount/100)
        var item = {
            id:id,
            name: data.name,
            maincategory: data.maincategory,
            subcategory: data.subcategory,
            brand: data.brand,
            color: data.color,
            size: data.size,
            baseprice: data.baseprice,
            discount: data.discount,
            finalprice:fp,
            color: data.color,
            size: data.size,
            stock: data.stock,
            description: data.description,
            pic1: data.pic1,
            pic2: data.pic2,
            pic3: data.pic3,
            pic4: data.pic4,
        }
        dispatch(updateProduct(item))
        navigate("/admin-product")
    }
    useEffect(() => {
        dispatch(getMaincategory())
        dispatch(getSubcategory())
        dispatch(getBrand())
        dispatch(getProduct())
        setdata(product.find((item)=>item.id===Number(id)))
    }, [])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-md-9 col-12">
                        <h5 className='bg-primary text-center p-2 text-light'>Product </h5>
                        <form onSubmit={postData}>
                            <div className="control-group mb-3">
                                <label htmlFor="name" className='form-label'>Name<span className='text-danger'>*</span></label>
                                <input type="text" className="form-control" id="name" name='name' onChange={getData} placeholder="Your Product Name" required value={data.name} />
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-3 col-md-6 col-12">
                                    <label htmlFor="maincategory" className='form-label'>Maincategory<span className='text-danger'>*</span></label>
                                    <select name='maincategory' onChange={getData} className="form-control">
                                        {
                                            maincategory.map((item, index) => {
                                                return <option key={index} value={item.name} selected={data.maincategory===item.name}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <label htmlFor="maincategory" className='form-label'>Subcategory<span className='text-danger'>*</span></label>
                                    <select name='subcategory' onChange={getData} className="form-control">
                                        {
                                            subcategory.map((item, index) => {
                                                return <option key={index} value={item.name}selected={data.subcategory===item.name}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <label htmlFor="maincategory" className='form-label'>Brand<span className='text-danger'>*</span></label>
                                    <select name='brand' onChange={getData} className="form-control">
                                        {
                                            brand.map((item, index) => {
                                                return <option key={index} value={item.name}selected={data.brand===item.name}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <label htmlFor="maincategory" className='form-label'>Stock<span className='text-danger'>*</span></label>
                                    <select name='stock' onChange={getData} className="form-control">
                                        <option value="In Stock" selected={data.stock==="In Stock"}>In Stock</option>
                                        <option value="Out Of Stock" selected={data.maincategory==="Out Of Stock"}>Out Of Stock</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 col-12">
                                    <label htmlFor="color" className='form-label'>Color<span className='text-danger'>*</span></label>
                                    <input type="text" name="color" onChange={getData} required placeholder="Enter Color " className='form-control' value={data.color}/>
                                </div>
                                <div className="col-md-6 col-12">
                                    <label htmlFor="color" className='form-label'>Size<span className='text-danger'>*</span></label>
                                    <input type="text" name="size" onChange={getData} required placeholder="Enter Size " className='form-control'  value={data.size}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 col-12">
                                    <label htmlFor="color" className='form-label'>Base Price<span className='text-danger'>*</span></label>
                                    <input type="number" name="baseprice" onChange={getData} required placeholder="Enter Base Price " className='form-control'  value={data.baseprice}/>
                                </div>
                                <div className="col-md-6 col-12">
                                    <label htmlFor="color" className='form-label'>Discount<span className='text-danger'>*</span></label>
                                    <input type="number" name="discount" onChange={getData} required placeholder="Enter Discount  " className='form-control'  value={data.discount}/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description">Description</label>
                                <textarea name="description" onChange={getData} rows="5" value={data.description} className="form-control"></textarea>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 col-12">
                                    <label htmlFor="pic1">Pic1</label>
                                    <input type="file" name="pic1" onChange={getFile} className="form-control" />
                                </div>
                                <div className="col-md-6 col-12">
                                    <label htmlFor="pic2">Pic2</label>
                                    <input type="file" name="pic2" onChange={getFile} className="form-control" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 col-12">
                                    <label htmlFor="pic3">Pic3</label>
                                    <input type="file" name="pic3" onChange={getFile} className="form-control" />
                                </div>
                                <div className="col-md-6 col-12">
                                    <label htmlFor="pic4">Pic4</label>
                                    <input type="file" name="pic4" onChange={getFile} className="form-control" />
                                </div>
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
