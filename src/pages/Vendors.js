// CreatedBY: Kalyan Bikram Adhikari
// CreatedDate: 
// github: https://github.com/Kalyanbikramadhikari



import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import TabLabel from '../components/TabLabel'
import SearchFilterBar from '../components/SearchFilterBar'
import AddVendor from '../dialogBox/AddVendor'
import VendorPreview from '../dialogBox/VendorPreview'
import VendorTable from '../tables/VendorTable'
import VendorStats from '../components/VendorStats'
import { useDispatch, useSelector } from 'react-redux'
import { useGetListQuery } from '../store/APIFeatures/BannerApi'

const Vendors = () => {
  const vendorlists = ['Vendor Management', 'abc']
  const { isExpanded } = useSelector((state) => state.hamburger)

  const [activeTab, setActiveTab] = useState(vendorlists[0]);
  const [searchedValue, setSearchedValue] = useState('')
  const [userClickedVendorId, setUserClickedVendorId] = useState('')
  const [openAddVendorDialog, setOpenAddVendorDialog] = useState(false)
  const [openVendorPreviewDialog, setOpenVendorPreviewDialog] = useState(false)
  const { data, success, isLoading } = useGetListQuery();
  console.log('data of banner list', data)
  const dispatch = useDispatch();


  const handleSearchChange = (e) => {
    setSearchedValue(e.target.value)
  }
  const handleAddVendor = (e) => {


    setOpenAddVendorDialog(!openAddVendorDialog);
  }

  // useEffect(()=>{
  //   dispatch()
  // })


  return (

    <div className="flex h-screen">
      <Sidebar activeItem="Vendors" />
      <div className={`flex-1 flex flex-col ${isExpanded ? 'ml-[400px]' : 'ml-20'}`}>
        <Navbar />
        <div className="pt-1 px-[35px] flex flex-col">
          <div className="flex flex-col border-b border-gray-200 -mx-[35px] w-full">


            {/* {
              vendorlists.map((item, index)=>{
                return(
                  <div className="flex  text-primary">
                    <TabLabel item = {item} isActive={true}/>                  
                  </div>
                )
              })
            } */}
            <VendorStats />
            <div className="flex px-[23px] ">
              <TabLabel items={vendorlists} activeTab={activeTab} setActiveTab={setActiveTab} />

            </div>

          </div>
          <div className="flex  border-b border-gray-200 -mx-[35px]">
            <div className="flex px-[23px] w-full">

              <SearchFilterBar searchedValue={searchedValue} handleSearchChange={handleSearchChange} onAddClick={handleAddVendor} buttonName="Add Vendor" placeholderName="Search Names" />
            </div>
          </div>

          <div className="flex">
            <VendorTable setOpenVendorPreviewDialog={setOpenVendorPreviewDialog} setUserClickedVendorId={setUserClickedVendorId} />
          </div>

        </div>
      </div>

      {
        openAddVendorDialog && (
          // <div className="relative">
          <AddVendor setOpenAddVendorDialog={setOpenAddVendorDialog} />

          // </div>
        )
      }

      {
        openVendorPreviewDialog && (
          <VendorPreview setOpenVendorPreviewDialog={setOpenVendorPreviewDialog} userClickedVendorId={userClickedVendorId} />
        )
      }
    </div>
  )
}

export default Vendors