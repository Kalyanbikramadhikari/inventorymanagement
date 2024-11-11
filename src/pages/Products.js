import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import TabLabel from '../components/TabLabel'
import SearchFilterBar from '../components/SearchFilterBar'

const Products = () => {
  const vendorlists = ['Vendor Management', 'abc']
  const [activeTab, setActiveTab] = useState(vendorlists[0]);
  const [searchedValue, setSearchedValue] = useState('')


  const handleSearchChange = (e) => {
    setSearchedValue(e.target.value)
  }
  const handleAddVendor = (e) => {


    // setOpenAddVendorDialog(!openAddVendorDialog);
  }
    return (
        <div className="flex h-screen">
            <Sidebar activeItem="Products" />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <div className="pt-1 px-[35px] flex flex-col">
                    <div className="flex border-b border-gray-200 -mx-[35px]">



                        <div className="flex px-[23px] ">
                            <TabLabel items={vendorlists} activeTab={activeTab} setActiveTab={setActiveTab} />

                        </div>

                    </div>
                    <div className="flex  border-b border-gray-200 -mx-[35px]">
                        <div className="flex px-[23px] w-full">

                            <SearchFilterBar searchedValue={searchedValue} handleSearchChange={handleSearchChange} onAddClick={handleAddVendor} buttonName="Add Vendor" placeholderName="Search Names" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Products