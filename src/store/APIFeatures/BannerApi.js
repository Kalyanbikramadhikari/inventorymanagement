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
          console.log('token', token)
    
          // If we have a token set in state, let's assume that we should be passing it.
          if (token) {
            headers.set('authorization', `Bearer ${token}`)
          }
    
          return headers
        },
      }),
    // baseQuery: fetchBaseQuery({ baseUrl: 'https://ecommerce.api.tech-glazers.com/api' }),
    tagTypes: ['image', 'banners', 'banner'],

    endpoints: (builder) => ({
        // get list 
        getList: builder.query({
            query: () => {
                return {
                    url: '/banners'
                }
            },
            providesTags: ['banners']
        }),
        // get banner by id
        getBannerById: builder.query({
            query: (id) => {
                console.log('id', id)
                return {
                    // url: `banners/${id}`,
                    url: `banners/1`,

                }
            },

            providesTags: (result, error, id) => [{ type: 'banner', id }],

        }),
        // active lists
        getListActive: builder.query({
            query: () => {
                return {
                    url: '/banners/list-active'
                }
            },
            // providesTags: ['products']
        }),



        // get image api
        getImageById: builder.query({
            query: (id) => {
                console.log('id', id)
                return {
                    url: `banners/1/image/${id}`,
                }
            },

            providesTags: (result, error, id) => [{ type: 'image', id }],

        }),


        //post a banner 
        postBanner: builder.mutation({
            // query: (id, data) => {
            //     return {
            //         url: `pokemon/${id}`,
            //         method: 'PUT',
            //         body: data,
            //     }
            // },
            // invalidatesTags: (result, error, id) => [{ type: 'product', id }],


        })



    }),
})


export const { useGetBannerByIdQuery, useGetListQuery, useGetListActiveQuery, useGetImageByIdQuery } = BannerApi