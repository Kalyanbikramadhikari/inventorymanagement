// CreatedBY: Kalyan Bikram Adhikari
// CreatedDate: 
// github: https://github.com/Kalyanbikramadhikari


import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Checkbox,
    IconButton,
    Paper
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const productData = [
    {
        id: 1,
        name: 'Iphone 15 Pro Max',
        code: '88974',
        price: 150000,
        quantity: 10,
        date: '2081/01/12',
        status: 'Paid',
    },
    {
        id: 2,
        name: 'Iphone 14 Pro Max',
        code: '88984',
        price: 150154.54,
        quantity: 1,
        date: '2081/01/12',
        status: 'Unpaid',
    },
    {
        id: 3,
        name: 'Iphone 11 Pro Max',
        code: '88774',
        price: 150000,
        quantity: 10,
        date: '2081/01/12',
        status: 'Paid',
    },
];


const ProductsTable = ({ setOpenVendorPreviewDialog, setUserClickedVendorId }) => {
    return (
        <TableContainer component={Paper} style={{ marginTop: '20px', }}>
            <Table sx={{ padding: '10px' }}>

                <TableHead style={{ background: '#F9FAFB' }}>
                    <TableRow>
                        {/* <TableCell>
                            <Checkbox />
                        </TableCell> */}
                        <TableCell style={{ padding: '10px', margin: '40px' }}>
                            <input type="checkbox" className='border-[1px] h-[18px] w-[18px]' />

                        </TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>S.N</TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Product Name</TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Product Code</TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Unit Price</TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Quantity</TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Received Date</TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Paid Status</TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {productData.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell style={{ padding: '10px' }}>
                                <input type="checkbox" className='border-[1px] h-[18px] w-[18px]' />

                            </TableCell>
                            <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }} >{product.id}</TableCell>
                            <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }} >{product.name}</TableCell>
                            <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }} >{product.code}</TableCell>
                            <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }} >{`Rs ${product.price.toLocaleString()}`}</TableCell>
                            <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }} >{product.quantity}</TableCell>
                            <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }} >{product.date}</TableCell>
                            <TableCell>
                                <div style={{
                                    backgroundColor: product.status === 'Paid' ? '#E2FFDD' : product.status === 'Unpaid' ? '#FFDDDE' : '#bcd',
                                    color: product.status === 'Paid' ? '#6CC55D' : product.status === 'Unpaid' ? '#C55D5F' : '#bcd',

                                    fontFamily: 'Roboto, sans-serif',
                                    fontSize: '16px',
                                    cursor: 'pointer',
                                    borderRadius: '5px',
                                    display:'flex',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    height:'40px',
                                    width:'95px'
                                }}
                                >
                                    {product.status}

                                </div>

                            </TableCell>
                            <TableCell>
                                <IconButton aria-label="edit" color="primary">
                                    <EditIcon />
                                </IconButton>
                                <IconButton aria-label="delete" color="red">
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell >
                        </TableRow >
                    ))}
                </TableBody >
            </Table >
        </TableContainer >
    );
};

export default ProductsTable;
