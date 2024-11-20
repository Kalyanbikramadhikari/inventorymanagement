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
    Paper,
    Typography,
    Chip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductTable = () => {
    const rows = [
        { name: 'Samsung Galaxy S24 Ultra', brand: 'Samsung', model: 'Galaxy Series', sku: '541278', code: 'GLX-5487154', stock: 25, condition: 'New', vendor: 'BT Planet' },
        { name: 'Samsung Galaxy S24 Ultra', brand: 'Samsung', model: 'Galaxy Series', sku: '541278', code: 'GLX-5487154', stock: 25, condition: 'Second-hand', vendor: 'BT Planet' },
        { name: 'Samsung Galaxy S24 Ultra', brand: 'Samsung', model: 'Galaxy Series', sku: '541278', code: 'GLX-5487154', stock: 25, condition: 'Exchanged', vendor: 'BT Planet' },
        { name: 'Samsung Galaxy S24 Ultra', brand: 'Samsung', model: 'Galaxy Series', sku: '541278', code: 'GLX-5487154', stock: 25, condition: 'Second-hand', vendor: 'BT Planet' },
        { name: 'Samsung Galaxy S24 Ultra', brand: 'Samsung', model: 'Galaxy Series', sku: '541278', code: 'GLX-5487154', stock: 25, condition: 'New', vendor: 'BT Planet' },
    ];

    // Function to return condition chip color
    const getConditionChip = (condition) => {
        switch (condition) {
            case 'New':
                return <Chip label="New" sx={{ color: '#0ECACA', backgroundColor: '#DBF9FF', borderRadius:'5px', width:'90%', margin:'' }} />;
            case 'Second-hand':
                return <Chip label="Second-hand" sx={{ color: '#F19F35', backgroundColor: '#FFF4DB', borderRadius:'5px', width:'90%', margin:'' }} />;
            case 'Exchanged':
                return <Chip label="Exchanged" sx={{ color: '#CA0EC7', backgroundColor: '#FFDBFE', borderRadius:'5px', width:'90%', margin:'' }} />;
            default:
                return <Chip label="Unknown" />;
        }
    };

    return (
        <TableContainer component={Paper} sx={{ marginTop: 2 }}>
            <Table>
                <TableHead style={{ background: '#F9FAFB', padding: '5px', paddingLeft: '30px' }}>
                    <TableRow>
                        <TableCell style={{ padding: '10px', margin: '40px' }}>
                            <input type="checkbox" className='border-[1px] h-[18px] w-[18px]' />

                        </TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Product Name</TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Brand</TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Series / Model</TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>SKU</TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Product Code</TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Stock Quantity</TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Condition</TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Vendor Name</TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index} hover>
                            <TableCell style={{ padding: '10px' }}>
                                <input type="checkbox" className='border-[1px] h-[18px] w-[18px]' />

                            </TableCell>
                            <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', cursor: 'pointer' }}>{row.name}</TableCell>
                            <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', cursor: 'pointer' }}>{row.brand}</TableCell>
                            <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', cursor: 'pointer' }}>{row.model}</TableCell>
                            <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', cursor: 'pointer' }}>{row.sku}</TableCell>
                            <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', cursor: 'pointer' }}>{row.code}</TableCell>
                            <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', cursor: 'pointer' }}>{row.stock}</TableCell>
                            <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', cursor: 'pointer' }}>{getConditionChip(row.condition)}</TableCell>
                            <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', cursor: 'pointer' }}>{row.vendor}</TableCell>
                            <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', cursor: 'pointer' }}>
                                <IconButton color="primary" size="small">
                                    <EditIcon />
                                </IconButton>
                                <IconButton color="error" size="small">
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

export default ProductTable;
