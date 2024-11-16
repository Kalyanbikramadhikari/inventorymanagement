// CreatedBY: Kalyan Bikram Adhikari
// CreatedDate: 
// github: https://github.com/Kalyanbikramadhikari


import React from 'react'

const TabLabel = ({ items, activeTab, setActiveTab }) => {
    return (
        <div  className='flex'>
            {
                items.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="flex text-primary cursor-pointer "
                            onClick={() => setActiveTab(item)}
                        >
                            {/* <span>{item}</span> */}
                            <span className={`text-tablabel p-3 ${activeTab === item ? 'text-primary border-b-2 border-primary' : 'text-black'} `}> {item} </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TabLabel