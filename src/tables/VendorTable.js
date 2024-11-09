import React from 'react';
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

const vendorData = [
    {
        id: '20548798',
        name: 'Rajendra Kumar Ghimire',
        phone: '+977 - 9854878741',
        address: 'Thamel, Lalitpur',
        email: 'rajn132@gmail.com',
        balanceDue: 'Rs 150,154.54',
        lastTransaction: '20th July, 2024'
    },
    {
        id: '205487981',
        name: 'Rajendra Kumar Ghimire',
        phone: '+977 - 9854878741',
        address: 'Thamel, Lalitpur',
        email: 'rajn132@gmail.com',
        balanceDue: 'Rs 150,154.54',
        lastTransaction: '20th July, 2024'
    }
];

const VendorTable = ({setOpenVendorPreviewDialog, setUserClickedVendorId}) => {
    return (
        <TableContainer component={Paper} style={{ marginTop: '20px' ,}}>
            <Table sx={{padding:'10px'}}>
                <TableHead style={{ background: '#F9FAFB', padding: '5px', paddingLeft:'30px' }}>
                    <TableRow sx={{ marginLeft:'10px'}}>
                        <TableCell style={{ padding: '10px', margin:'40px' }}>
                            <input type="checkbox" className='border-[1px] h-[18px] w-[18px]' />

                        </TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', border: '1px solid blue' }}>Vendor Id</TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Vendor Name</TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Phone</TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Address</TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Email</TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Balance Due</TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Last Transaction</TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {vendorData.map((vendor) => (
                        <TableRow key={vendor.id}>
                            <TableCell style={{ padding: '10px' }}>
                                <input type="checkbox" className='border-[1px] h-[18px] w-[18px]' />

                            </TableCell>
                            <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', cursor:'pointer' }} onClick={()=>{setOpenVendorPreviewDialog(true); setUserClickedVendorId(vendor.id)}}>{vendor.id}</TableCell>
                            <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', cursor:'pointer' }} onClick={()=>{setOpenVendorPreviewDialog(true); setUserClickedVendorId(vendor.id)}}>{vendor.name}</TableCell>
                            <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', cursor:'pointer' }} onClick={()=>{setOpenVendorPreviewDialog(true); setUserClickedVendorId(vendor.id)}}>{vendor.phone}</TableCell>
                            <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', cursor:'pointer' }} onClick={()=>{setOpenVendorPreviewDialog(true); setUserClickedVendorId(vendor.id)}}>{vendor.address}</TableCell>
                            <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', cursor:'pointer' }} onClick={()=>{setOpenVendorPreviewDialog(true); setUserClickedVendorId(vendor.id)}}>{vendor.email}</TableCell>
                            <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', cursor:'pointer' }} onClick={()=>{setOpenVendorPreviewDialog(true); setUserClickedVendorId(vendor.id)}}>{vendor.balanceDue}</TableCell>
                            <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', cursor:'pointer' }} onClick={()=>{setOpenVendorPreviewDialog(true); setUserClickedVendorId(vendor.id)}}>{vendor.lastTransaction}</TableCell>
                            <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}>
                                <IconButton aria-label="edit" color="primary">
                                    <EditIcon />
                                </IconButton>
                                <IconButton aria-label="delete" color="red">
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default VendorTable;
