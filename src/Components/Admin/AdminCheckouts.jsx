import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'


import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

import LeftNav from './LeftNav'
import { getCheckout } from '../../Store/ActionCreators/CheckoutActionCreators';
export default function AdminCheckouts() {
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var checkout = useSelector((state) => state.CheckoutStateData)
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'userid', headerName: 'User Id', width: 80 },
        { field: 'paymentmode', headerName: 'Payment Mode', width: 150 },
        { field: 'paymentStatus', headerName: 'Payment Status', width: 150 },
        { field: 'orderStatus', headerName: 'Order Status', width: 120 },
        { field: 'totalAmount', headerName: 'Total', width: 100, renderCell: ({ row }) =><p>&#8377;{row.totalAmount}</p> },
        { field: 'shippingAmount', headerName: 'Shipping', width: 100, renderCell: ({ row }) =><p>&#8377;{row.shippingAmount}</p> },
        { field: 'finalAmount', headerName: 'Final', width: 100, renderCell: ({ row }) =><p>&#8377;{row.finalAmount}</p> },
        {
            field: "view",
            headerName: "View",
            sortable: false,
            renderCell: ({ row }) =>
                <Button onClick={() => {
                    navigate("/admin-single-checkout/"+row.id)
                }}>
                    <span className="material-symbols-outlined">
                        visibility
                    </span>
                </Button>,
        }
    ];
    var rows = []
    for (let item of checkout) {
        rows.push(item)
    }
    function getAPIData() {
        dispatch(getCheckout())
    }
    useEffect(() => {
        getAPIData()
    }, [checkout.length])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-md-9 col-12">
                        <h5 className='bg-primary text-center p-2 text-light'>Checkouts</h5>
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
