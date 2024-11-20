// CreatedBY: Kalyan Bikram Adhikari
// CreatedDate: 
// github: https://github.com/Kalyanbikramadhikari



import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import TabLabel from '../components/TabLabel'
import SearchFilterBar from '../components/SearchFilterBar'
import NumbersCard from '../components/NumbersCard'
import CustomersTopCard from '../components/CustomersTopCard'
import CustomersTable from '../tables/CustomersTable'

const Customers = () => {
    const customerLists = ['ALL', 'NEW CUSTOMERS', 'RETURNING CUSTOMERS']
    const [activeTab, setActiveTab] = useState(customerLists[0]);
    const [searchedValue, setSearchedValue] = useState('')


    const handleSearchChange = (e) => {
        setSearchedValue(e.target.value)
    }
    const handleAddVendor = (e) => {


        // setOpenAddVendorDialog(!openAddVendorDialog);
    }
    return (
        <div className="flex h-screen">
            <Sidebar activeItem="Customers" />
            <div className="flex-1 flex flex-col">
                <Navbar PageName="Customers"/>
                <div className="flex  gap-6 px-[35px] py-6">
                    <CustomersTopCard name="TOTAL CUSTOMERS" amount="25,000" />


                    <NumbersCard name="LOW STOCKS" amount="15" />
                    <NumbersCard name="OUT OF STOCKS" amount="10" />

                </div>


                <div className="flex px-[35px] border-b border-inputField-border ">
                    <TabLabel items={customerLists} activeTab={activeTab} setActiveTab={setActiveTab} />

                </div>

                <div className="flex   ">
                    <div className="flex px-[23px] w-full">

                        <SearchFilterBar searchedValue={searchedValue} handleSearchChange={handleSearchChange} onAddClick={handleAddVendor} buttonName="Add Products" placeholderName="Search products" />
                    </div>
                </div>

                <div className="pt-1 px-[35px] flex flex-col">
                    <CustomersTable/>

                </div>
            </div>
        </div>

    )
}

export default Customers