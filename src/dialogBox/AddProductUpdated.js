// CreatedBY: Kalyan Bikram Adhikari
// CreatedDate: 
// github: https://github.com/Kalyanbikramadhikari



import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import React, { useEffect, useState } from 'react'

const AddProductUpdated = ({ setOpenAddProductDialog }) => {
    const [isVisible, setIsVisible] = useState(false);
    // Trigger animation on mount
    useEffect(() => {
        setIsVisible(true);
        return () => setIsVisible(false); // Reset visibility on unmount
    }, []);
    const [formData, setFormData] = useState({
        productName: '',
        primaryCategory: '',
        secondaryCategory: '',
        stockKeppingUnit: '',
        productCode: '',
        quantity: '',
        stockQuantityThreshold: '',
        description: '',
        costPrice: '',
        markedPrice: '',
        sellingPrice: '',
        gift: '',
        ram: '',
        storageCapacity: '',
        networkCompatibility: '',
        batteryCapacity: '',
        OperationgSystem: '',
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
                            <h2 className="text-xl font-semibold">Add Products</h2>
                            <button
                                onClick={handleClose}
                                className="text-dialog-black hover:text-gray-700"
                            >
                                <CloseIcon />
                            </button>
                        </div>

                        {/* Dialog Content */}

                        <div className="p-4">
                            {/* Basic Information Section */}
                            <div className="">
                                <h3 className="text-subHeading font-bold mb-4 text-dialog-black p-[17px] border-l-4 border-primary bg-background flex  ">Product Detail</h3>
                                <div className="space-y-4">
                                    <div className='flex flex-col gap-[2px]'>
                                        <label className=" mb-1 flex text-subHeading text-dialog-black">Product Name</label>
                                        <input
                                            type="text"
                                            name="productName"
                                            placeholder="eg: Iphone 15 pro max"
                                            value={formData.productName}
                                            onChange={handleInputChange}
                                            className="w-full p-2  rounded-borderRadius text-subHeading border border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                    <div className='flex flex-col gap-[2px]'>
                                        <label className=" mb-1 flex text-subHeading text-dialog-black">Vendor Id</label>
                                        <input
                                            type="text"
                                            name="primaryCategory"
                                            value={formData.primaryCategory}
                                            onChange={handleInputChange}
                                            placeholder="Brand Name"
                                            className="w-full p-2 border rounded-borderRadius text-subHeading focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                    <div className='flex flex-col gap-[2px]'>
                                        <label className=" mb-1 flex text-subHeading text-dialog-black">Select Series/Model (Secondary Category)</label>
                                        <input
                                            type="text"
                                            name="secondaryCategory"
                                            value={formData.secondaryCategory}
                                            onChange={handleInputChange}
                                            placeholder="Series Name"
                                            className="w-full p-2 border rounded-borderRadius text-subHeading focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                    <div className='flex flex-col gap-[2px]'>
                                        <label className=" mb-1 flex text-subHeading text-dialog-black">Stock Keeping Unit (SKU)</label>
                                        <input
                                            type="text"
                                            name="stockKeppingUnit"
                                            placeholder="eg: 123413"
                                            value={formData.stockKeppingUnit}
                                            onChange={handleInputChange}
                                            className="w-full p-2  rounded-borderRadius text-subHeading border border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                    <div className='flex flex-col gap-[2px]'>
                                        <label className=" mb-1 flex text-subHeading text-dialog-black">Product Code</label>
                                        <input
                                            type="text"
                                            name="productCode"
                                            value={formData.productCode}
                                            onChange={handleInputChange}
                                            placeholder="1987457"
                                            className="w-full p-2 border rounded-borderRadius text-subHeading focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                    <div className='flex flex-col gap-[2px]'>
                                        <label className=" mb-1 flex text-subHeading text-dialog-black">Quantity</label>
                                        <input
                                            type="text"
                                            name="quantity"
                                            value={formData.quantity}
                                            onChange={handleInputChange}
                                            placeholder=""
                                            className="w-full p-2 border rounded-borderRadius text-subHeading focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                    <div className='flex flex-col gap-[2px]'>
                                        <label className=" mb-1 flex text-subHeading text-dialog-black">Stock Quantity Threshold</label>
                                        <input
                                            type="text"
                                            name="stockQuantityThreshold"
                                            value={formData.stockQuantityThreshold}
                                            onChange={handleInputChange}
                                            placeholder=""
                                            className="w-full p-2 border rounded-borderRadius text-subHeading focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                    <div className='flex flex-col gap-[2px]'>
                                        <label className=" mb-1 flex text-subHeading text-dialog-black">Description</label>
                                        <input
                                            type="text"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            placeholder="eg:GLX-3232421"
                                            className="w-full p-2 border rounded-borderRadius text-subHeading focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                    <div className='flex flex-col gap-[2px]'>
                                        <label className=" mb-1 flex text-subHeading text-dialog-black">Price</label>
                                        <input
                                            type="text"
                                            name="costPrice"
                                            value={formData.costPrice}
                                            onChange={handleInputChange}
                                            placeholder="Cost Price"
                                            className="w-full p-2 border rounded-borderRadius text-subHeading focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                        />
                                        <input
                                            type="text"
                                            name="markedPrice"
                                            value={formData.markedPrice}
                                            onChange={handleInputChange}
                                            placeholder="MRP"
                                            className="w-full p-2 border rounded-borderRadius text-subHeading focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                        />
                                        <input
                                            type="text"
                                            name="sellingPrice"
                                            value={formData.sellingPrice}
                                            onChange={handleInputChange}
                                            placeholder="Selling Price"
                                            className="w-full p-2 border rounded-borderRadius text-subHeading focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>

                                    <div className='flex flex-col gap-[2px]'>
                                        <label className=" mb-1 flex text-subHeading text-dialog-black">Gift</label>
                                        <div className="flex w-full">

                                            <div className="flex">
                                                <input
                                                    type="radio"

                                                    className="w-full p-2 border rounded-borderRadius text-subHeading focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                                />
                                                <label className=" mb-1 flex text-subHeading text-dialog-black">Is Gift</label>

                                            </div>
                                            <div className="flex">
                                                <input
                                                    type="radio"

                                                    className="w-full p-2 border rounded-borderRadius text-subHeading focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                                />
                                                <label className=" mb-1 flex text-subHeading text-dialog-black">Is Gift</label>

                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div>

                            {/* Technical Specification Section */}
                            <div className='mt-[40px]'>
                                <h3 className="text-subHeading font-bold mb-4 text-dialog-black p-[17px] border-l-4 border-primary bg-background flex  ">Technical Specification</h3>
                                <div className="space-y-4">
                                    <div className='flex flex-col gap-[2px]'>
                                        <label className=" mb-1 flex text-subHeading text-dialog-black">RAM</label>
                                        <input
                                            type="text"
                                            name="ram"
                                            value={formData.ram}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border rounded-borderRadius text-subHeading focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                    <div className='flex flex-col gap-[2px]'>
                                        <label className=" mb-1 flex text-subHeading text-dialog-black">Storage Capacity</label>
                                        <input
                                            type="text"
                                            name="storageCapacity"
                                            value={formData.storageCapacity}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border rounded-borderRadius text-subHeading focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                    <div className='flex flex-col gap-[2px]'>
                                        <label className=" mb-1 flex text-subHeading text-dialog-black">Network Compatibility</label>
                                        <input
                                            type="text"
                                            name="networkCompatibility"
                                            value={formData.networkCompatibility}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border rounded-borderRadius text-subHeading focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>

                                    <div className='flex flex-col gap-[2px]'>
                                        <label className=" mb-1 flex text-subHeading text-dialog-black">Battery Capacity</label>
                                        <input
                                            type="text"
                                            name="batteryCapacity"
                                            value={formData.batteryCapacity}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border rounded-borderRadius text-subHeading focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                    <div className='flex flex-col gap-[2px]'>
                                        <label className=" mb-1 flex text-subHeading text-dialog-black">Operating System</label>
                                        <input
                                            type="text"
                                            name="operatingSystem"
                                            value={formData.operatingSystem}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border rounded-borderRadius text-subHeading focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        // onClick={handleSubmit}
                                        className="px-4 py-3 bg-blue-600 text-white rounded-borderRadius text-subHeading hover:bg-blue-700 flex w-full justify-center"
                                    >
                                        Add Specificaiton
                                    </button>
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

export default AddProductUpdated