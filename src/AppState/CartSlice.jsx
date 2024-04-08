import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartApi = createApi({
    reducerPath: "cart", 
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => `cartProduct`, 
            providesTags: ['User'],
        }),
        deleteData: builder.mutation({
            query: (id) => ({
                url: `cartProduct/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['User'],
        }),
        addData: builder.mutation({
            query: (body) => ({
                url: `cartProduct`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['User'],
        }),
        qtyChange: builder.mutation({
            query: (body,id) => ({
                url: `cartProduct/${id}`,
                method: 'PATCH',
                body: JSON.stringify({ qty: body }),
            }),
            invalidatesTags: ['User'],
        }),
        // emptyCart: builder.query({
        //     query: () => `cartProduct`, 
        //     // providesTags: ['User'],
        // }),
    }),
});

export const { useGetDataQuery , useDeleteDataMutation ,useAddDataMutation,useQtyChangeMutation} = cartApi;


