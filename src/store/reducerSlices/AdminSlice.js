// CreatedBY: Kalyan Bikram Adhikari
// CreatedDate:
// github: https://github.com/Kalyanbikramadhikari

import { createSlice } from '@reduxjs/toolkit'


const admin = JSON.parse(localStorage.getItem('admin'));
const initialState = {
  adminData: admin || null  // It's better to have a structured state
}; 

export const adminSlice = createSlice({
  name: 'admin',  // Changed name to match the store key
  initialState,
  reducers: {
    getAdminDetail: (state, action) => {
      // In Redux Toolkit, you can directly mutate the state
      state.adminData = action.payload;
      localStorage.setItem('admin', JSON.stringify(action.payload));
    },
  },
})

export const { getAdminDetail } = adminSlice.actions
export default adminSlice.reducer  // Export the reducer as default