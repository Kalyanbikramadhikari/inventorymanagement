// CreatedBY: Kalyan Bikram Adhikari
// CreatedDate: 
// github: https://github.com/Kalyanbikramadhikari



import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import React, { useEffect, useRef, useState } from 'react'
import { AddBox } from '@mui/icons-material';

const AddSecondaryCategory = ({ setOpenAddProductDialog }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [openSecondaryCategory, setOpenSecondaryCategory] = useState(false)

    // Trigger animation on mount
    useEffect(() => {
        setIsVisible(true);
        return () => setIsVisible(false); // Reset visibility on unmount
    }, []);
    const [formData, setFormData] = useState({
        modelName: '',
        category: '',
        secondaryDescription: '',
        secondaryCategoryStatus: '',

        // sellingPrice: '',
        // gift: '',

    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
        // { setOpenAddProductDialog(false)};
    };
    const handleClose = () => {
        setIsVisible(false); // Collapse first
        // Delay unmounting to allow the transition to complete
        setTimeout(() => setOpenAddProductDialog(false), 1);
    };
    return (
        <div className='absolute  inset-0 bg-black  bg-opacity-50 font-roboto  ' onClick={() => setOpenAddProductDialog(false)}>
            <div className="flex justify-end w-full p-6 ">
                <div className={`bg-white rounded-[5px]  w-2/6 ${isVisible ? 'translate-x-0' : 'translate-x-full'}  relative  transition-transform duration-200 `} onClick={(event) => event.stopPropagation()} >
                    <div className="h-[90vh] overflow-auto pb-20">
                        {/* Dialog Header */}

                        <div className="flex justify-between items-center p-4 border-b">
                            <h2 className="text-xl font-semibold">Add Secondary Category</h2>
                            <button
                                onClick={handleClose}
                                className="text-dialog-black hover:text-gray-700"
                            >
                                <CloseIcon />
                            </button>
                        </div>

                        {/* Dialog Content */}

                        <div className="p-4">


                            {/* Secondary Category */}
                            <div className=''>
                                <h3 className="text-subHeading font-bold mb-4 text-dialog-black p-[17px] border-l-4 border-primary bg-background flex  ">Fill the information</h3>




                                <div className="space-y-4">
                                    <div className={`flex flex-col gap-[2px] ${openSecondaryCategory ? 'mt-3' : ''}`}>
                                        <label className=" mb-1 flex text-subHeading text-dialog-black">Model/Series Name</label>
                                        <input
                                            type="text"
                                            name="modelName"
                                            value={formData.modelName}
                                            onChange={handleInputChange}
                                            placeholder='Eg: Iphone 13 Pro Max'
                                            className="w-full p-2 border rounded-borderRadius text-subHeading focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                    <div className='flex flex-col gap-[2px]'>
                                        <label className=" mb-1 flex text-subHeading text-dialog-black">Category</label>
                                        <input
                                            type="text"
                                            name="modelName"
                                            value={formData.modelName}
                                            onChange={handleInputChange}
                                            placeholder='Eg: Apple'
                                            className="w-full p-2 border rounded-borderRadius text-subHeading focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                    <div className='flex flex-col gap-[2px]'>
                                        <label className=" mb-1 flex text-subHeading text-dialog-black">Description</label>
                                        <textarea
                                            type="text"
                                            name="secondaryDescription"
                                            value={formData.secondaryDescription}
                                            onChange={handleInputChange}
                                            placeholder='A brief description about the brand'
                                            className="w-full h-36 p-2 border rounded-borderRadius resize-none text-subHeading focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                    <div className='flex flex-col gap-[2px]'>
                                        <label className=" mb-1 flex text-subHeading text-dialog-black">Cateogry Status</label>
                                        <div className="flex w-full">

                                            <div className="flex">
                                                <input
                                                    type="radio"

                                                    className="w-full p-2 border rounded-borderRadius text-subHeading focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                                />
                                                <label className=" mb-1 flex text-subHeading text-dialog-black">Active</label>

                                            </div>
                                            <div className="flex">
                                                <input
                                                    type="radio"

                                                    className="w-full p-2 border rounded-borderRadius text-subHeading focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                                />
                                                <label className=" mb-1 flex text-subHeading text-dialog-black">Inactive</label>

                                            </div>
                                        </div>



                                    </div>




                                </div>



                            </div>
                        </div>



                    </div>
                    {/* Dialog Footer */}
                    <div className="flex justify-center gap-3 p-4  lg:px-10 xl:px-12 2xl:px-16 bg-background absolute bottom-0 w-full rounded-b-borderRadius">
                        <button
                            type="button"
                            onClick={() => { setOpenAddProductDialog(false) }}
                            className="px-4 py-3 border border-button-border bg-white text-dialog-black rounded-borderRadius text-subHeading hover:bg-gray-50 flex w-full justify-center"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="px-4 py-3 bg-blue-600 text-white rounded-borderRadius text-subHeading hover:bg-blue-700 flex w-full justify-center"
                        >
                            Save
                        </button>
                    </div>

                </div>
            </div>

        </div>



    )
}

export default AddSecondaryCategory