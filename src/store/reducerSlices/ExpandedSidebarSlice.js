// CreatedBY: Kalyan Bikram Adhikari
// CreatedDate: 
// github: https://github.com/Kalyanbikramadhikari


import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isExpanded: true,
    openMobileSideBar: false

}


export const ExpandedSidebarSlice = createSlice({
    name: 'ExpandedSidebarSlice',
    name: 'hamburger',
    initialState,
    reducers: {
        setisExpanded: (state, action) => {
            state.isExpanded = !state.isExpanded
            

        },
        setOpenMobileSidebar: (state, action) => {
            state.openMobileSideBar = !state.openMobileSideBar
        },

        
    },
})

// Action creators are generated for each case reducer function
export const { setisExpanded, setOpenMobileSidebar } = ExpandedSidebarSlice.actions

export default ExpandedSidebarSlice.reducer