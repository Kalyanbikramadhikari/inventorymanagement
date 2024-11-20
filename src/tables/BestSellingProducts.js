import React from 'react'
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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const BestSellingProducts = () => {
    const rows = [
        { name: 'Samsung Galaxy S24 Ultra', brand: 'Samsung', model: 'Galaxy Series', sku: '541278', code: 'GLX-5487154', stock: 25, condition: 'New', vendor: 'BT Planet' },
        { name: 'Samsung Galaxy S24 Ultra', brand: 'Samsung', model: 'Galaxy Series', sku: '541278', code: 'GLX-5487154', stock: 25, condition: 'Second-hand', vendor: 'BT Planet' },
        { name: 'Samsung Galaxy S24 Ultra', brand: 'Samsung', model: 'Galaxy Series', sku: '541278', code: 'GLX-5487154', stock: 25, condition: 'Exchanged', vendor: 'BT Planet' },
        { name: 'Samsung Galaxy S24 Ultra', brand: 'Samsung', model: 'Galaxy Series', sku: '541278', code: 'GLX-5487154', stock: 25, condition: 'Second-hand', vendor: 'BT Planet' },
        { name: 'Samsung Galaxy S24 Ultra', brand: 'Samsung', model: 'Galaxy Series', sku: '541278', code: 'GLX-5487154', stock: 25, condition: 'New', vendor: 'BT Planet' },
    ];
    return (
        <div className='w-full border border-inputField-border rounded-borderRadius p-6'>

            <div className="flex justify-between items-center">
                <div className='text-[18px] font-medium text-[#373A40]'>Best selling products</div>
                <div className='flex items-center gap-4 p-[10px] justify-between border border-inputField-border rounded-borderRadius'>
                    <div className="flex gap-3 items-center">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.25 3H3.75C2.92157 3 2.25 3.67157 2.25 4.5V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V4.5C15.75 3.67157 15.0784 3 14.25 3Z" stroke="#868E96" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 1.5V4.5" stroke="#868E96" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6 1.5V4.5" stroke="#868E96" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2.25 7.5H15.75" stroke="#868E96" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className='text-subHeading text-[#495057]'>This Month </span>

                    </div>

                    <div className="flex items-center">
                        <KeyboardArrowDownIcon/>
                    </div>


                </div>
            </div>

            <TableContainer component={Paper} sx={{ marginTop: 2 }}>
                <Table>
                    <TableHead style={{ background: '#F9FAFB', padding: '5px', paddingLeft: '30px' }}>
                        <TableRow>

                            <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Product Name</TableCell>
                            <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Brand</TableCell>
                            <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Series / Model</TableCell>
                            <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Product Code</TableCell>

                            <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Vendor Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={index} hover>

                                <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', cursor: 'pointer' }}>{row.name}</TableCell>
                                <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', cursor: 'pointer' }}>{row.brand}</TableCell>
                                <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', cursor: 'pointer' }}>{row.model}</TableCell>
                                <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', cursor: 'pointer' }}>{row.code}</TableCell>
                                <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', cursor: 'pointer' }}>{row.vendor}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    )
}

export default BestSellingProducts