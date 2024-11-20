// CreatedBY: Kalyan Bikram Adhikari
// CreatedDate: 2024/15/11
// github: https://github.com/Kalyanbikramadhikari


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const BannerApi = createApi({
    reducerPath: 'BannerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://ecommerce.api.tech-glazers.com/api',
        prepareHeaders: (headers, { getState }) => {
          const token = getState().admin.adminData.token
        //   console.log('token', token)
    
          // If we have a token set in state, let's assume that we should be passing it.
          if (token) {
            headers.set('authorization', `Bearer ${token}`)
          }
    
          return headers
        },
      }),
    // baseQuery: fetchBaseQuery({ baseUrl: 'https://ecommerce.api.tech-glazers.com/api' }),
    tagTypes: ['brand'],

    endpoints: (builder) => ({
        // get brands 
        getList: builder.query({
            query: () => {
                return {
                    url: '/brands'
                }
            },
            providesTags: ['brand']
        }),
        
    }),
})


export const { useGetAllAdminQuery } = BannerApi