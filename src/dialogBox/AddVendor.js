import CloseIcon from '@mui/icons-material/Close';

import React, { useEffect, useState } from 'react'

const AddVendor = ({ setOpenAddVendorDialog }) => {
    const [isVisible, setIsVisible] = useState(false);
    // Trigger animation on mount
    useEffect(() => {
        setIsVisible(true);
        return () => setIsVisible(false); // Reset visibility on unmount
    }, []);
    const [formData, setFormData] = useState({
        name: '',
        vendorId: '',
        contactPerson: '',
        email: '',
        phone: '',
        address: ''
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
        // setOpenAddVendorDialog(false);
    };
    const handleCloseAddVendorDialog = () => {
        setIsVisible(false); // Collapse first
        // Delay unmounting to allow the transition to complete
        setTimeout(() => setOpenAddVendorDialog(false),200);
    };
    return (
        <div className='absolute  inset-0 bg-black  bg-opacity-50 font-roboto  ' onClick={() => setOpenAddVendorDialog(false)}>
            <div className="flex justify-end w-full p-6 ">
                <div className={`bg-white rounded-[5px]  w-2/6 ${isVisible ? 'translate-x-0' : 'translate-x-full'}  relative  transition-transform duration-200 `} onClick={(event) => event.stopPropagation()} >
                    <div className="h-[90vh] overflow-auto pb-20">
                        {/* Dialog Header */}

                        <div className="flex justify-between items-center p-4 border-b">
                            <h2 className="text-xl font-semibold">Add Vendor</h2>
                            <button
                                onClick={handleCloseAddVendorDialog}
                                className="text-dialog-black hover:text-gray-700"
                            >
                                <CloseIcon />
                            </button>
                        </div>

                        {/* Dialog Content */}

                        <div className="p-4">
                            {/* Basic Information Section */}
                            <div className="">
                                <h3 className="text-subHeading font-bold mb-4 text-dialog-black p-[17px] border-l-4 border-primary bg-background flex  ">Basic Information</h3>
                                <div className="space-y-4">
                                    <div className='flex flex-col gap-[2px]'>
                                        <label className=" mb-1 flex text-subHeading text-dialog-black">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Vendor Name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full p-2  rounded-borderRadius text-subHeading border border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                    <div className='flex flex-col gap-[2px]'>
                                        <label className=" mb-1 flex text-subHeading text-dialog-black">Vendor Id</label>
                                        <input
                                            type="text"
                                            name="vendorId"
                                            value={formData.vendorId}
                                            onChange={handleInputChange}
                                            placeholder="1987457"
                                            className="w-full p-2 border rounded-borderRadius text-subHeading focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                    <div className='flex flex-col gap-[2px]'>
                                        <label className=" mb-1 flex text-subHeading text-dialog-black">Contact Person</label>
                                        <input
                                            type="text"
                                            name="contactPerson"
                                            value={formData.contactPerson}
                                            onChange={handleInputChange}
                                            placeholder="Name of the main contact person at the vendor's company"
                                            className="w-full p-2 border rounded-borderRadius text-subHeading focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Contact Details Section */}
                            <div className='mt-[40px]'>
                                <h3 className="text-subHeading font-bold mb-4 text-dialog-black p-[17px] border-l-4 border-primary bg-background flex  ">Contact Details</h3>
                                <div className="space-y-4">
                                    <div className='flex flex-col gap-[2px]'>
                                        <label className=" mb-1 flex text-subHeading text-dialog-black">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border rounded-borderRadius text-subHeading focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                    <div className='flex flex-col gap-[2px]'>
                                        <label className=" mb-1 flex text-subHeading text-dialog-black">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border rounded-borderRadius text-subHeading focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                    <div className='flex flex-col gap-[2px]'>
                                        <label className=" mb-1 flex text-subHeading text-dialog-black">Address</label>
                                        <input
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border rounded-borderRadius text-subHeading focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                    {/* Dialog Footer */}
                    <div className="flex justify-center gap-3 p-4  lg:px-10 xl:px-12 2xl:px-16 bg-background absolute bottom-0 w-full rounded-b-borderRadius">
                        <button
                            type="button"
                            // onClick={() => setOpenAddVendorDialog(false)}
                            onClick={handleCloseAddVendorDialog}

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

            {/* //   )} */}

        </div>
    )
}

export default AddVendor