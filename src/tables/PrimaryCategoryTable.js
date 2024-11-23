import React, { useState } from 'react'
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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const PrimaryCategoryTable = () => {
    const rows = [
        { brand: 'Samsung', modelName: 'GLX-5487154', status: "ON" },
        { brand: 'Samsung', modelName: 'GLX-5487154', status: "ON" },
        { brand: 'Samsung', modelName: 'GLX-5487154', status: "ON" },
        { brand: 'Samsung', modelName: 'GLX-5487154', status: "ON" },
        { brand: 'Samsung', modelName: 'GLX-5487154', status: "ON" },
    ];
    const [isChecked, setIsChecked] = useState(true);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    }
    return (
        // <div className='w-full border border-inputField-border rounded-borderRadius p-6'>



        <TableContainer component={Paper} >
            <Table>
                <TableHead style={{ background: '#F9FAFB', padding: '5px', paddingLeft: '30px' }}>
                    <TableRow>
                        <TableCell style={{ padding: '10px', margin: '40px' }}>
                            <input type="checkbox" className='border-[1px] h-[18px] w-[18px]' />

                        </TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Model/Series </TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Brand Code</TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Status</TableCell>
                        <TableCell sx={{ color: '#7A8299', fontFamily: 'Roboto, sans-serif', fontSize: '16px', padding: '15px', }}>Action</TableCell>
                    </TableRow>

                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index} hover>
                            <TableCell style={{ padding: '10px' }}>
                                <input type="checkbox" className='border-[1px] h-[18px] w-[18px]' />

                            </TableCell>
                            <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', cursor: 'pointer' }}>{row.brand}</TableCell>
                            <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', cursor: 'pointer' }}>{row.brandCode}</TableCell>
                            <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', cursor: 'pointer' }}>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={isChecked}
                                        onChange={handleToggle}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-500 peer-focus:ring-2 peer-focus:ring-blue-300 transition-all duration-300"></div>
                                    <div
                                        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-all duration-300 ${isChecked ? "translate-x-5" : ""
                                            }`}
                                    ></div>
                                </label>
                            </TableCell>
                            {/* <TableCell style={{ color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '16px', cursor: 'pointer' }}>{row.actio}</TableCell> */}
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
        // </div>

    )
}

export default PrimaryCategoryTable