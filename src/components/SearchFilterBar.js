import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import AddIcon from '@mui/icons-material/Add';
const SearchFilterBar = ({ searchedValue, handleSearchChange, onAddVendorClick }) => {
    return (
        <div className="flex justify-between items-center gap-4 py-4  w-full">
            {/* Search Input */}
            <div className="relative w-2/5">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type="text"
                    placeholder="Search names"
                    value={searchedValue}
                    onChange={handleSearchChange}
                    className="w-full pl-10 pr-4 py-3 rounded-[5px] text-[16px] bg-[#F9FAFB] border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            <div className="flex gap-4">
                {/* Filter Button */}
                <button className="flex items-center gap-2 px-4 py-3 rounded-[5px] text-[16px] border border-gray-200 bg-white hover:bg-gray-50">
                    <TuneIcon className="h-5 w-5" />
                    <span>Filter</span>
                </button>

                {/* Add Vendor Button */}
                <button className="flex items-center gap-2 px-4 py-3 rounded-[5px] text-[16px] bg-blue-600 text-white hover:bg-blue-700" onClick={onAddVendorClick}>
                    <AddIcon className="h-5 w-5" />
                    <span>Add Vendor</span>
                </button>

            </div>


        </div>
    )
}

export default SearchFilterBar