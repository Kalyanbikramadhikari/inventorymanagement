// CreatedBY: Kalyan Bikram Adhikari
// CreatedDate: 2024/15/11
// github: https://github.com/Kalyanbikramadhikari


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const CategoryApi = createApi({
    reducerPath: 'CategoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://ecommerce.api.tech-glazers.com/api/' }),
    tagTypes: ['category', 'categories',],

    endpoints: (builder) => ({
        // get categories 
        getCategories: builder.query({
            query: () => {
                return {
                    url: 'categories'
                }
            },
            providesTags: ['categories']
        }),
        // get category by id
        getCategoryByID: builder.query({
            query: (id) => {
                console.log('id', id)
                return {
                    url: `categories/${id}`,
                }
            },

            providesTags: (result, error, id) => [{ type: 'category', id }],

        }),
        getTotalCategories: builder.query({
            query: () => {
                return {
                    url: 'categories/count'
                }
            },
            providesTags: ['categories']
        }),

        // getExportCategories
        getExportCategories: builder.query({
            query: () => {
                return {
                    url: 'categories/export'
                }
            },
        }),
        // getlistCategoriestotalItems based on category

        getListCategoriesTotalItems: builder.query({
            query: () => {
                return {
                    url: 'categories/list-total-items'
                }
            },
            providesTags: ['categories']

        }),
        // getListProducts based on categories
        getListProducts: builder.query({
            query: () => {
                return {
                    url: 'categories/1/list-products'
                }
            },
            providesTags: ['categories']

        }),

        // get select option
        getSelectOption: builder.query({
            query: () => {
                return {
                    url: 'categories/select-options'
                }
            },
            providesTags: ['categories']

        }),

        //post a category 
        postCatetory: builder.mutation({
            query: (data) => {
                return {
                    url: '/categories',
                    method: 'POST',
                    body: data,
                }
            },
            providesTags: ['categories']

        }),

        //update a category 
        updateCategory: builder.mutation({
            query: (data) => {
                return {
                    url: '/categories/9',
                    method: 'PUT',
                    body: data,
                }
            },
            // invalidatesTags: (result, error, id) => [{ type: 'admin', id }],

        }),
        //post a category (soft delete)
        softDeleteCategory: builder.mutation({
            query: (data) => {
                return {
                    url: '/categories/9/delete',
                    method: 'PATCH',
                    body: data,
                }
            },
        }),
        //delete a category  (hard delete)
        hardDeleteCatetory: builder.mutation({
            query: (data) => {
                return {
                    url: '/categories/9',
                    method: 'DELETE',
                    body: data,
                }
            },
        }),
        //restore a category 
        restoreCategory: builder.mutation({
            query: (data) => {
                return {
                    url: '/categories/9/restore',
                    method: 'PATCH',
                    body: data,
                }
            },
        }),





    }),
})


export const { useGetCategoriesQuery,useGetCategoryByIDQuery, useGetTotalCategoriesQuery, useGetExportCategoriesQuery,useGetSelectOptionQuery,useGetListCategoriesTotalItemsQuery, useGetListProductsQuery, usePostCatetoryMutation, useUpdateCategoryMutation, useSoftDeleteCategoryMutation, useHardDeleteCatetoryMutation, useRestoreCategoryMutation,  } = CategoryApi