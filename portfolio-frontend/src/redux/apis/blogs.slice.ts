/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://portfolio-backend-psi-one.vercel.app/api' }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => `/blogs`,
    }),
    login: builder.mutation({
      query: (userInfo: any) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    register: builder.mutation({
      query: (data: any) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),
    contact: builder.mutation({
      query: (data: any) => ({
        url: "/contact",
        method: "POST",
        body: data,
      }),
    }),
    createBlog: builder.mutation({
      query: (data: any) => ({
        url: "/blogs",
        method: "POST",
        body: data,
      }),
    }),
    getMessage: builder.query({
      query: () => ({
        url: "/contact",
        method: "GET",
        providesTags: ['message'],
         
      }),
    }),
    deleteBlogs: builder.mutation({
      query: (id) => ({
        url:  `/blogs/${id}`,
        method: "DELETE",
        providesTags: ['orders'],
         
      }),
      
    }),
  }),
})

export const { useGetBlogsQuery, useLoginMutation, useRegisterMutation, useContactMutation, useGetMessageQuery,useCreateBlogMutation, useDeleteBlogsMutation } = baseApi