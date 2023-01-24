import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'


import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

import LeftNav from './LeftNav'
import { deleteBrand, getBrand } from '../../Store/ActionCreators/BrandActionCreators';
export default function AdminBrand() {
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var brand = useSelector((state) => state.BrandStateData)
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        {
            field: "edit",
            headerName: "Edit",
            sortable: false,
            renderCell: ({ row }) =>
                <Button onClick={() => {
                    navigate("/admin-update-brand/" + row.id)
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
                    dispatch(deleteBrand({ id: row.id }))
                    getAPIData()
                }}>
                    <span className="material-symbols-outlined">
                        delete_forever
                    </span>
                </Button>,
        }
    ];
    var rows = []
    for (let item of brand) {
        rows.push(item)
    }
    function getAPIData() {
        dispatch(getBrand())
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
                        <h5 className='bg-primary text-center p-2 text-light'>Brand <Link className='btn text-light float-right' to="/admin-add-brand"><span className="material-symbols-outlined float-right">add</span></Link></h5>
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
