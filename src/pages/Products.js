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
import AddProduct from '../dialogBox/AddProduct'
import AddProductUpdated from '../dialogBox/AddProductUpdated'
import { useSelector } from 'react-redux'

const Products = () => {
    const Productlists = ['ALL']
  const { isExpanded } = useSelector((state) => state.hamburger)

    const [activeTab, setActiveTab] = useState(Productlists[0]);
    const [searchedValue, setSearchedValue] = useState('')
    const [openAddProductDialog, setOpenAddProductDialog] = useState(false)


    const handleSearchChange = (e) => {
        setSearchedValue(e.target.value)
    }
    const handleAddProduct = (e) => {


        setOpenAddProductDialog(!openAddProductDialog);
    }
    return (
        <div className="flex h-screen">
            <Sidebar activeItem="Products" />
            <div className={`flex-1 flex flex-col ${isExpanded ?'ml-[400px]':'ml-20'}`}>
            <Navbar PageName="Products" />

                <div className="flex  gap-6 px-[35px] py-6">
                    <NumbersCard name="CATEGORIES" amount="20" />
                    <NumbersCard name="TOTOAL PRODUCTS" amount="200,000" />
                    <NumbersCard name="LOW STOCKS" amount="15" />
                    <NumbersCard name="OUT OF STOCKS" amount="10" />

                </div>
                <div className="flex px-[35px] border-b border-inputField-border ">
                    <TabLabel items={Productlists} activeTab={activeTab} setActiveTab={setActiveTab} />

                </div>

                <div className="flex   ">
                    <div className="flex px-[23px] w-full">

                        <SearchFilterBar searchedValue={searchedValue} handleSearchChange={handleSearchChange} onAddClick={handleAddProduct} buttonName="Add Products" placeholderName="Search products" />
                    </div>
                </div>





                <div className="pt-1 px-[35px] flex flex-col">
                    <ProductTable />

                    {/* <div className="flex border-b border-gray-200 -mx-[35px]">



                        <div className="flex px-[23px] ">
                            <TabLabel items={Productlists} activeTab={activeTab} setActiveTab={setActiveTab} />

                        </div>

                    </div> */}
                    {/* <div className="flex  border-b border-gray-200 -mx-[35px]">
                        <div className="flex px-[23px] w-full">

                            <SearchFilterBar searchedValue={searchedValue} handleSearchChange={handleSearchChange} onAddClick={handleAddProduct} buttonName="Add Product" placeholderName="Search Names" />
                        </div>
                    </div> */}
                </div>
            </div>
            {
                openAddProductDialog && (
                    // <div className="relative">
                    <AddProductUpdated setOpenAddProductDialog={setOpenAddProductDialog} />

                    // </div>
                )
            }
        </div>

    )
}

export default Products