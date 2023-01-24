import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'


import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

import LeftNav from './LeftNav'
import { deleteProduct, getProduct } from '../../Store/ActionCreators/ProductActionCreators';
export default function AdminProduct() {
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var product = useSelector((state) => state.ProductStateData)
    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'maincategory', headerName: 'Maincategory', width: 100 },
        { field: 'subcategory', headerName: 'Subcategory', width: 100 },
        { field: 'brand', headerName: 'Brand', width: 100 },
        { field: 'color', headerName: 'Color', width: 50 },
        { field: 'size', headerName: 'Size', width: 50 },
        { field: 'baseprice', headerName: 'Base Price', width: 100 },
        { field: 'discount', headerName: 'Discount', width: 80 },
        { field: 'finalprice', headerName: 'Final Price', width: 100 },
        { field: 'stock', headerName: 'Stock', width: 50 },
        { field: 'pic1', headerName: 'Pic1' ,renderCell: (params) => <img src={`assets/productimages/${params.value}`} width="50px" height="50px" className='rounded' alt='' /> },
        { field: 'pic2', headerName: 'Pic2' ,renderCell: (params) => <img src={`assets/productimages/${params.value}`} width="50px" height="50px" className='rounded' alt='' /> },
        { field: 'pic3', headerName: 'Pic3' ,renderCell: (params) => <img src={`assets/productimages/${params.value}`} width="50px" height="50px" className='rounded' alt='' /> },
        { field: 'pic4', headerName: 'Pic4' ,renderCell: (params) => <img src={`assets/productimages/${params.value}`} width="50px" height="50px" className='rounded' alt='' /> },
        {
            field: "edit",
            headerName: "Edit",
            sortable: false,
            renderCell: ({ row }) =>
                <Button onClick={() => {
                    navigate("/admin-update-product/" + row.id)
                }}>
                    <span className="material-symbols-outlined">
                        edit
                    </span>
                </Button>,
        },
        {
            field: "delete",
            headerName: "Delete",
            sortable: false,
            renderCell: ({ row }) =>
                <Button onClick={() => {
                    dispatch(deleteProduct({ id: row.id }))
                    getAPIData()
                }}>
                    <span className="material-symbols-outlined">
                        delete_forever
                    </span>
                </Button>,
        }
    ];
    var rows = []
    for (let item of product) {
        rows.push(item)
    }
    function getAPIData() {
        dispatch(getProduct())
    }
    useEffect(() => {
        getAPIData()
    }, [])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-md-9 col-12">
                        <h5 className='bg-primary text-center p-2 text-light'>Product <Link className='btn text-light float-right' to="/admin-add-product"><span className="material-symbols-outlined float-right">add</span></Link></h5>
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                            // checkboxSelection
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
