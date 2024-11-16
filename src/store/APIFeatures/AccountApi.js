// CreatedBY: Kalyan Bikram Adhikari
// CreatedDate: 2024/15/11
// github: https://github.com/Kalyanbikramadhikari

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getAdminDetail } from '../reducerSlices/AdminSlice'


// Define a service using a base URL and expected endpoints
export const AccountApi = createApi({
  reducerPath: 'AccountApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://ecommerce.api.tech-glazers.com/api/' }),

  // tagTypes: ['admin'],

  endpoints: (builder) => ({


    //update a product. this uses id
    adminLogin: builder.mutation({
      query: (data) => {
        console.log('data', data);
        return {
          url: 'accounts/login',
          method: 'POST',
          body: data,
        };
      },
      // async onQueryStarted(args, { dispatch, queryFulfilled }) {
      //   try {
      //     // Corrected variable name
      //     const {data} = await queryFulfilled;
      //     console.log('loggedInAdminData', data);

      //     // Dispatch the action with the correct variable
      //     dispatch(getAdminDetail(data));
      //   } catch (error) {
      //     console.log('error', error);
      //   }
      // },
    }),





  }),
})


export const { useAdminLoginMutation } = AccountApi