// CreatedBY: Kalyan Bikram Adhikari
// CreatedDate: 
// github: https://github.com/Kalyanbikramadhikari


import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import TabLabel from '../components/TabLabel'
import SearchFilterBar from '../components/SearchFilterBar'
import NumbersCard from '../components/NumbersCard'
import ProductTable from '../tables/ProductsTable'

const Products = () => {
    const vendorlists = ['ALL']
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
                <Navbar PageName="Products" />

                <div className="flex  gap-6 px-[35px] py-6">
                    <NumbersCard name="CATEGORIES" amount="20" />
                    <NumbersCard name="TOTOAL PRODUCTS" amount="200,000" />
                    <NumbersCard name="LOW STOCKS" amount="15" />
                    <NumbersCard name="OUT OF STOCKS" amount="10" />

                </div>
                <div className="flex px-[35px] border-b border-inputField-border ">
                    <TabLabel items={vendorlists} activeTab={activeTab} setActiveTab={setActiveTab} />

                </div>

                <div className="flex   ">
                    <div className="flex px-[23px] w-full">

                        <SearchFilterBar searchedValue={searchedValue} handleSearchChange={handleSearchChange} onAddClick={handleAddVendor} buttonName="Add Products" placeholderName="Search products" />
                    </div>
                </div>





                <div className="pt-1 px-[35px] flex flex-col">
                    <ProductTable />

                    {/* <div className="flex border-b border-gray-200 -mx-[35px]">



                        <div className="flex px-[23px] ">
                            <TabLabel items={vendorlists} activeTab={activeTab} setActiveTab={setActiveTab} />

                        </div>

                    </div> */}
                    {/* <div className="flex  border-b border-gray-200 -mx-[35px]">
                        <div className="flex px-[23px] w-full">

                            <SearchFilterBar searchedValue={searchedValue} handleSearchChange={handleSearchChange} onAddClick={handleAddVendor} buttonName="Add Vendor" placeholderName="Search Names" />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>

    )
}

export default Products