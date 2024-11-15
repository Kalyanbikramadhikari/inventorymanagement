// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const AccountApi = createApi({
  reducerPath: 'AccountApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  tagTypes: ['products', 'product'],

  endpoints: (builder) => ({


    getAllAccounts: builder.query({
        query: () => {
          return {
            url: '/pokemon'
            }
        },
        providesTags: ['products']
      }),
  
  
  
      // get individual product
      getAccountByID: builder.query({
        query: (id) => {
          console.log('id', id)
          return {
            url: `pokemon/${id}`,
          }
        },
  
        providesTags: (result, error, id) => [{ type: 'product', id }],
  
      }),
  
  
      //update a product. this uses id
      updateAccount: builder.mutation({
        query: (id, data) => {
          return {
            url: `pokemon/${id}`,
            method: 'PUT',
            body: data,
          }
        },
        invalidatesTags: (result, error, id) => [{ type: 'product', id }],
  
  
      })
  
  
  
    }),
  })
  
  
  export const { useGetAllAdminQuery, useGetAdminByIDQuery, useAdminLoginMutation, useAdminRegisterMutation } = AccountApi