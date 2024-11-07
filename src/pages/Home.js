import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import TabLabel from '../components/TabLabel'
import SearchFilterBar from '../components/SearchFilterBar'
import AddVendor from '../dialogBox/AddVendor'

const Home = () => {
  const vendorlists = ['Vendor Management', 'abc']
  const [activeTab, setActiveTab] = useState(vendorlists[0]);
  const [searchedValue, setSearchedValue] = useState('')
  const [openAddVendorDialog, setOpenAddVendorDialog] = useState(false)

  const handleSearchChange = (e)=>{
    setSearchedValue(e.target.value)
  }
  const handleAddVendor = (e)=>{

    
    setOpenAddVendorDialog(!openAddVendorDialog);
  }
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="pt-1 px-[35px] flex flex-col">
          <div className="flex border-b border-gray-200 -mx-[35px]">
            {/* {
              vendorlists.map((item, index)=>{
                return(
                  <div className="flex  text-primary">
                    <TabLabel item = {item} isActive={true}/>                  
                  </div>
                )
              })
            } */}
            <div className="flex px-[23px] ">
              <TabLabel items={vendorlists} activeTab={activeTab} setActiveTab={setActiveTab} />

            </div>

          </div>
          <div className="flex w-full">
            <SearchFilterBar searchedValue={searchedValue} handleSearchChange={handleSearchChange} onAddVendorClick={handleAddVendor} />
          </div>

        </div>
      </div>

      {
        openAddVendorDialog && (
          // <div className="relative">
            <AddVendor />

          // </div>
        )
      }
    </div>
  )
}

export default Home