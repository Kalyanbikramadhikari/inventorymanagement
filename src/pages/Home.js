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
import LineAreaChart from '../charts/LineAreaChart'
import DonutChart from '../charts/DonutChart'
import NumbersCard from '../components/NumbersCard'
import DashboardCard from '../components/DashboardCard'
import CustomerStats from '../components/CustomerStats'
import BestSellingProducts from '../tables/BestSellingProducts'
import { KeyboardArrowDown } from '@mui/icons-material'

const Home = () => {
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

  const cashflowOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `Rs ${value}k`,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // Stock Level Donut Chart Data
  const stockData = {
    labels: ['High Stock Product', 'Low Stock Product', 'Out of Stock Product'],
    datasets: [
      {
        data: [65, 35, 5],
        backgroundColor: ['#00c9a7', '#facc15', '#f87171'],
        hoverBackgroundColor: ['#00b894', '#eab308', '#e11d48'],
        borderWidth: 2,
        cutout: '70%',
      },
    ],
  };

  const stockOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
        },
      },
    },
  };



  // useEffect(()=>{
  //   dispatch()
  // })


  return (

    <div className="">
      <div className="flex ">

        <Sidebar activeItem="Dashboard" />
        <div className={`flex-1 flex flex-col ${isExpanded ?'ml-[400px]':'ml-20'}`}>
          <Navbar />

          <div className="flex mx-[35px] mt-5 gap-6">
            <div className="flex w-7/12"> <LineAreaChart /></div>
            {/* <div className="flex w-5/12"> <DonutChart/></div> */}
          </div>

          <div className="px-[35px] py-6">

            <div className="flex justify-between items-center">
              <div className='text-[18px] font-medium text-[#373A40]'>Overall Summary</div>
              <div className='flex items-center gap-4 p-[10px] justify-between border border-inputField-border rounded-borderRadius'>
                <div className="flex gap-3 items-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.25 3H3.75C2.92157 3 2.25 3.67157 2.25 4.5V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V4.5C15.75 3.67157 15.0784 3 14.25 3Z" stroke="#868E96" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 1.5V4.5" stroke="#868E96" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6 1.5V4.5" stroke="#868E96" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2.25 7.5H15.75" stroke="#868E96" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span className='text-subHeading text-[#495057]'>This Month </span>

                </div>

                


              </div>
            </div>



            <div className="flex gap-6 mt-5">
              <DashboardCard name="TOTAL PRODUCT IN INVENTORY" amount="250,000" percentage="10" />
              <DashboardCard name="TOTAL INCOME" amount="250,000" percentage="-10" />

              <DashboardCard name="TOTAL SALES" amount="250,000" percentage="10" />
              <DashboardCard name="TOTAL PRODUCT IN INVENTORY" amount="250,000" percentage="-10" />

            </div>

            {/* <NumbersCard name="TOTOAL PRODUCTS" amount="200,000" />
            <NumbersCard name="LOW STOCKS" amount="15" />
            <NumbersCard name="OUT OF STOCKS" amount="10" /> */}

          </div>


          <div className="flex px-[35px] gap-5 items-start ">
            <div className="flex w-1/3">
              <CustomerStats />
            </div>
            <div className="flex w-2/3 ">
              <BestSellingProducts />
            </div>
          </div>
          {/* <LineAreaChart />
          <DonutChart /> */}


        </div>
      </div>




    </div>
  )
}

export default Home