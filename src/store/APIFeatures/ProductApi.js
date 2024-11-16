// CreatedBY: Kalyan Bikram Adhikari
// CreatedDate: 2024/15/11
// github: https://github.com/Kalyanbikramadhikari

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ProductApi = createApi({
  reducerPath: 'ProductApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ecommerce.api.tech-glazers.com/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().admin.adminData.token

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  }),
  tagTypes: ['products', 'product'],

  endpoints: (builder) => ({

    getProducts: builder.query({
      query: () => {
        return {
          url: '/products'
        }
      },
      providesTags: ['products']
    }),
    getActiveProduct: builder.query({
      query: () => {
        return {
          url: '/products/active'
        }
      },
      providesTags: ['products']
    }),
    getNewProducts: builder.query({
      query: () => {
        return {
          url: '/products/new'
        }
      },
      providesTags: ['products']
    }),
    getUsedProducts: builder.query({
      query: () => {
        return {
          url: '/products/used'
        }
      },
      providesTags: ['products']
    }),
    getProductImage: builder.query({
      query: () => {
        return {
          url: '/products/32/image/fc5f4d28-bd22-415d-b50b-10393b953e0e.jpg'
        }
      },
    }),
    getProductImageDimension: builder.query({
      query: () => {
        return {
          url: 'products/8/dimension-image/3a1d912f-7de2-40db-9a5e-701cfd79b032.jpg'
        }
      },
    }),


    // get individual product
    getProductByID: builder.query({
      query: (id) => {
        console.log('id', id)
        return {
          url: `products/${id}`,
        }
      },

      providesTags: (result, error, id) => [{ type: 'product', id }],

    }),


    //update a product. this uses id
    // updateProduct: builder.mutation({
    //   query: (id, data) => {
    //     return {
    //       url: `pokemon/${id}`,
    //       method: 'PUT',
    //       body: data,
    //     }
    //   },
    //   invalidatesTags: (result, error, id) => [{ type: 'product', id }],


    // }),

    //update a product. this uses id
    createProduct: builder.mutation({
      query: (id, data) => {
        return {
          url: 'products',
          method: 'POST',
          body: data,
        }
      },


    })


  }),
})


export const { useGetProductsQuery, useGetActiveProductQuery, useGetNewProductsQuery, useGetUsedProductsQuery, useGetProductImageQuery, useGetProductImageDimensionQuery, useGetProductByIDQuery, useCreateProductMutation } = ProductApi