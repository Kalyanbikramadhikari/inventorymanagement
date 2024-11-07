import CloseIcon from '@mui/icons-material/Close';

import React, { useState } from 'react'

const AddVendor = () => {
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
        // setIsDialogOpen(false);
    };
    return (
        <div className='absolute  inset-0 bg-black  bg-opacity-50  '>
            <div className="flex justify-end w-full p-6">
                <div className="bg-white rounded-[5px]  w-2/6">
                    {/* Dialog Header */}
                    <div className="flex justify-between items-center p-4 border-b">
                        <h2 className="text-xl font-semibold">Add Vendor</h2>
                        <button
                            // onClick={() => setIsDialogOpen(false)}
                            className="text-black hover:text-gray-700"
                        >
                            <CloseIcon />
                        </button>
                    </div>

                    {/* Dialog Content */}
                    <form onSubmit={handleSubmit}>
                        <div className="p-4">
                            {/* Basic Information Section */}
                            <div className="mb-6">
                                <h3 className="text-lg font-medium mb-4 text-blue-600">Basic Information</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block mb-1">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Vendor Name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-1">Vendor Id</label>
                                        <input
                                            type="text"
                                            name="vendorId"
                                            value={formData.vendorId}
                                            onChange={handleInputChange}
                                            placeholder="1987457"
                                            className="w-full p-2 border rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-1">Contact Person</label>
                                        <input
                                            type="text"
                                            name="contactPerson"
                                            value={formData.contactPerson}
                                            onChange={handleInputChange}
                                            placeholder="Name of the main contact person at the vendor's company"
                                            className="w-full p-2 border rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Contact Details Section */}
                            <div>
                                <h3 className="text-lg font-medium mb-4 text-blue-600">Contact Details</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-1">Address</label>
                                        <input
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Dialog Footer */}
                        <div className="flex justify-end gap-3 p-4 border-t">
                            <button
                                type="button"
                                // onClick={() => setIsDialogOpen(false)}
                                className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* //   )} */}

        </div>
    )
}

export default AddVendor