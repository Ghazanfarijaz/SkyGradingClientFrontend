import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000'; // Fallback




const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api`, // Using process.env ensures correct base URL
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("authToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User", "Cards"], // Define tag types
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/users/register",
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (loginData) => ({
        url: "/users/login",
        method: "POST",
        body: loginData,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const token = data.token;
          if (token) {
            localStorage.setItem("authToken", token);
          }
        } catch (error) {
          console.error("Error during login:", error);
        }
      },
    }),
    fetchCards: builder.query({
      query: () => "/cards",
      providesTags: ["Cards"],
    }),
    getCardByCardNumber: builder.query({
      query: (cardNumber) => `/cards/${cardNumber}`,
      providesTags: (result, error, arg) => [{ type: "Cards", id: arg }],
    }),
    addCard: builder.mutation({
      query: (cardData) => ({
        url: "/cards/add",
        method: "POST",
        body: cardData,
      }),
      invalidatesTags: ["Cards"], // Invalidate the "Cards" tag to refetch the list
    }),
    getCardByUserId: builder.query({
      query: (userId) => `/cards/user/${userId}`,
      providesTags: (result, error, arg) => [{ type: "Cards", id: `User-${arg}` }],
    }),
    getCardByUserIdAndCardNumber: builder.query({
      query: ({ userId, cardNumber }) => `/cards/user/${userId}/${cardNumber}`,
      providesTags: (result, error, { userId, cardNumber }) => [
        { type: "Cards", id: `User-${userId}-Card-${cardNumber}` },
      ],
    }),
      // Add new endpoint to fetch all users
    getAllCards: builder.query({
      query: () => "/cards", // API endpoint to fetch all users
      providesTags: ["Cards"], // Define tags for cache management
    }),
      // Update a user by ID
    updateUser: builder.mutation({
      query: ({ id, ...userData }) => ({
        url: `/users/users/${id}`,
        method: "PUT",
        body: userData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "User", id }], // Invalidate the user cache
    }),


    //=====
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: '/create-order',
        method: 'POST',
        body: orderData,
      }),
    }),
    verifyPayment: builder.mutation({
      query: (paymentData) => ({
        url: '/verify-payment',
        method: 'POST',
        body: paymentData,
      }),
    }),  

    // New endpoint to fetch data from an open API
    fetchExternalCardData: builder.query({
      query: () => ({
        url: "https://api.pokemontcg.io/v2/cards", // Full URL for the external API
        method: "GET",
      }),
    }),
    
  }), 
 
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useFetchCardsQuery,
  useGetCardByCardNumberQuery,
  useAddCardMutation,
  useGetCardByUserIdQuery,
  useGetCardByUserIdAndCardNumberQuery,
  useGetAllCardsQuery,
  useUpdateUserMutation,
  //========
  useCreateOrderMutation,
  useVerifyPaymentMutation,


  useFetchExternalCardDataQuery,


} = apiSlice;

export default apiSlice;
