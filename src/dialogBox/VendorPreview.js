import React from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';


const VendorPreview = ({ setOpenVendorPreviewDialog, userClickedVendorId }) => {
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
            <div className="flex justify-center h-full  w-full p-9 ">
                <div className="bg-white rounded-[5px] w-5/6   relative transform transition-transform duration-500 " onClick={(event) => event.stopPropagation()} >

                    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-300">
                        <div className="flex">
                            {/* Title */}
                            <h1 className="font-bold text-tablabel border-r-[1px] border-inputField-border pr-5 ">Vendor Preview</h1>

                            {/* Navigation Controls */}
                            <div className="flex items-center space-x-3 ml-5 mr-5">
                                <button className="p-1 border-[1px] border-inputField-border rounded-full flex justify-center items-center text-[#6C768F]">
                                    <ExpandLessIcon fontSize="small" />
                                </button>
                                <button className="p-1 border-[1px] border-inputField-border rounded-full flex justify-center items-center text-[#6C768F]">
                                    <ExpandMoreIcon fontSize="small" />
                                </button>
                                <span className="text-sm text-gray-500">1 of 2</span>
                            </div>
                        </div>


                        {/* Close Button */}
                        <button className="p-1">
                            <CloseIcon fontSize="small" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default VendorPreview