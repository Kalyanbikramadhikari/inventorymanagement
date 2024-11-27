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
import AddCustomer from '../dialogBox/AddCustomer'
import { useSelector } from 'react-redux'

const Customers = () => {
    const customerLists = ['ALL', 'NEW CUSTOMERS', 'RETURNING CUSTOMERS']
    const { isExpanded } = useSelector((state) => state.hamburger)

    const [activeTab, setActiveTab] = useState(customerLists[0]);
    const [searchedValue, setSearchedValue] = useState('')
    const [openAddCustomerDialog, setOpenAddCustomerDialog] = useState(false)


    const handleSearchChange = (e) => {
        setSearchedValue(e.target.value)
    }
    const handleAddCustomer = (e) => {


        setOpenAddCustomerDialog(!openAddCustomerDialog);
    }
    return (
        <div className="flex h-screen">
            <Sidebar activeItem="Customers" />
            <div className={`flex-1 flex flex-col ${isExpanded ? 'ml-[400px]' : 'ml-20'}`}>
                <Navbar PageName="Customers" />
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

                        <SearchFilterBar searchedValue={searchedValue} handleSearchChange={handleSearchChange} onAddClick={handleAddCustomer} buttonName="Add Customers" placeholderName="Search products" />
                    </div>
                </div>

                <div className="pt-1 px-[35px] flex flex-col">
                    <CustomersTable />

                </div>
            </div>

            {
                openAddCustomerDialog && (
                    // <div className="relative">
                    <AddCustomer setOpenAddCustomerDialog={setOpenAddCustomerDialog} />

                    // </div>
                )
            }
        </div>

    )
}

export default Customers