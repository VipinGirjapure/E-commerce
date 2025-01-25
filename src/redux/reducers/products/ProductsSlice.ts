import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  status: "",
  error: '',
};

export const fetchPosts = createAsyncThunk(
  "products/get",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");

      if (!res.ok) {
        // Throw an error if the response status is not OK
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const resData = await res.json(); // Parse the response JSON
      console.log(resData);

      return fulfillWithValue(resData); // Return success response
    } catch (error:any) {
      console.error("Fetch error:", error);

      return rejectWithValue(error.message || "Unknown error"); // Return custom error
    }
  }
);

export const products = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "pending";
        state.error = '';
        console.log('aaaaa',)

      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // state.products = action.payload; // Populate products with the fetched data
        console.log('aaaaa',action)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        console.log('aaaaa',action)

        state.error = action.error.message ?? "Unknown Error"; // Handle the error
      });
  },
});

export default products;
