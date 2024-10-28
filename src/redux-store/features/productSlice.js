import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    product: [],
    loading: "idle",
    filteredProducts: [],
    historyList: [],
  },
  reducers: {
    searchProducts: (state, action) => {
      const query = action.payload.toLowerCase();
      state.filteredProducts = state.product.filter((item) =>
        item.category.toLowerCase().includes(query)
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(productList.pending, (state, { payload }) => {
      state.loading = "pending";
      // console.log("productlist is pending");
    });
    builder.addCase(productList.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.product = payload;
      state.filteredProducts = payload; // Initialize filteredProducts with full list
      // console.log("productlist is fulfillted ==>", payload);
    });
    builder.addCase(productList.rejected, (state, { payload }) => {
      state.loading = "rejected";
      state.product = payload;
      // console.log("productlist is rejected");
    });
    builder.addCase(UserHistoryList.pending, (state, { payload }) => {
      state.loading = "pending";
      // console.log("pending");
    });
    builder.addCase(UserHistoryList.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.historyList = payload;
      // console.log("payload==>", payload);
    });
    builder.addCase(UserHistoryList.rejected, (state, { payload }) => {
      state.loading = "rejected";
      // console.log("Rejected");
    });
  },
});

export const productList = createAsyncThunk(
  "ProductSlice/productList",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
    // return response;
  }
);

export const UserHistoryList = createAsyncThunk(
  "ProductSlice/historyList",
  async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
    // console.log("Thunk==>", response.data);
    return response.data;
  }
);

export const { searchProducts } = ProductSlice.actions;

export default ProductSlice.reducer;
