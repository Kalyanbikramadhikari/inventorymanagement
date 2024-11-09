import React, { useState } from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import StatCard from '../components/StatCard';
import SearchFilterBar from '../components/SearchFilterBar';
import VendorTable from '../tables/VendorTable';
import ProductsTable from '../tables/ProductsTable';
import AddVendor from './AddVendor';
import AddProduct from './AddProduct';



const VendorPreview = ({ setOpenVendorPreviewDialog, userClickedVendorId }) => {
    const [openAddProductDialog, setOpenAddProductDialog] = useState(false)
    const handleAddProduct = () => {
        setOpenAddProductDialog(true)
    }

    const vendorData = [
        {
            id: '20548798',
            name: 'Rajendra Kumar Ghimire',
            phone: '+977 - 9854878741',
            address: 'Thamel, Lalitpur',
            email: 'rajn132@gmail.com',
            balanceDue: 'Rs 150,154.54',
            lastTransaction: '20th July, 2024'
        }
    ]

    return (
        <div className='absolute  inset-0 bg-black  bg-opacity-50 font-roboto  ' onClick={() => setOpenVendorPreviewDialog(false)}>
            <div className={`flex justify-center h-full   w-full p-9 `}>
                <div className={`flex w-5/6 ${openAddProductDialog ? ' transform transition-transform duration-500  justify-start' : ''} `} style={openAddProductDialog ? { clipPath: 'inset(0 0 0 34%)' ,transform: 'translateX(-34%)' } : {}}>

                    {/* clipPath: 'inset(0 0 0 33.33%),' */}
                    {/* style={openAddProductDialog ? { width: 'calc(66.67% - 15px)' } : {}} */}
                    <div  className={`bg-white rounded-[5px]  ${openAddProductDialog ? '  w-full' : 'w-full'}  relative transform transition-transform duration-500 `} onClick={(event) => event.stopPropagation()} >


                        <div className="flex items-center justify-between px-[24px]  py-1  ">
                            <div className="flex items-center">
                                {/* Title */}
                                <h1 className="font-bold text-tablabel border-r-[1px] py-2 border-inputField-border pr-5 ">Vendor Preview</h1>

                                {/* Navigation Controls */}
                                <div className="flex items-center space-x-3 ml-5 mr-5">
                                    <button className="p-1 border-[1px] border-inputField-border rounded-full flex justify-center items-center text-[#6C768F]">
                                        <ExpandLessIcon fontSize="medium" />
                                    </button>
                                    <button className="p-1 border-[1px] border-inputField-border rounded-full flex justify-center items-center text-[#6C768F]">
                                        <ExpandMoreIcon fontSize="medium" />
                                    </button>
                                    <span className="text-sm text-gray-500">1 of 2</span>
                                </div>
                            </div>


                            {/* Close Button */}
                            <button className="p-1" onClick={() => setOpenVendorPreviewDialog(false)}>
                                <CloseIcon fontSize="medium" />
                            </button>
                        </div>


                        {/* name, email, phone location section */}
                        <div className="flex items-center justify-between p-2 px-[24px] border-y-[1px] border-inputField-border  bg-white ">
                            {/* Vendor Info */}
                            <div className="flex items-center gap-[20px]">
                                {/* Avatar */}
                                <div className="flex-shrink-0 w-[102px] h-[102px] bg-[#488FED] rounded-full flex items-center justify-center text-white text-3xl">
                                    {/* Placeholder icon for profile */}
                                    <span className="font-bold text-5xl">R</span>
                                </div>
                                {/* Details */}
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-[23px] ">Rajendra Kumar Ghimire  <span className="text-button-border ml-2"> - 20548798</span></h4>
                                    <div className="flex items-center text-[#99A0A5] gap-x-4 text-subHeading">
                                        <div className="flex items-center">
                                            <Email fontSize="small" />
                                            <span className="ml-1">rajn132@gmail.com</span>
                                        </div>
                                        <span className='flex items-end h-[4px] w-[4px] rounded-full bg-[#99A0A5]'></span>
                                        <div className="flex items-center">
                                            <Phone fontSize="small" />
                                            <span className="ml-1">+977 - 9854878741</span>
                                        </div>
                                        <span className='flex items-end h-[4px] w-[4px] rounded-full bg-[#99A0A5]'></span>
                                        <div className="flex items-center">
                                            <LocationOn fontSize="small" />
                                            <span className="ml-1">Thamel, Lalitpur</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <StatCard title="Total Balance Due" amount={150154.54} />
                                <StatCard title="Total Transaction" amount={1030000} />
                                <StatCard title="Total Profit" amount={100} />
                            </div>
                        </div>


                        {/* products with seach, filter and add product */}
                        <div className="flex flex-col px-[24px] mt-3">
                            <span className='text-tablabel'>Products</span>
                            <div className="flex ml-[-12px] mr-[-10px]">
                                <SearchFilterBar buttonName="Add Product" placeholderName="Search Product" onAddClick={handleAddProduct} />


                            </div>
                            <div className="">
                                <ProductsTable />
                            </div>

                        </div>
                    </div>
                </div>



            </div>
            {/* <div className="flex"> */}
            {
                openAddProductDialog && (
                    <AddProduct openAddProductDialog={openAddProductDialog} setOpenAddProductDialog={setOpenAddProductDialog} />
                )
            }
            {/* </div> */}

        </div>
    )
}

export default VendorPreview