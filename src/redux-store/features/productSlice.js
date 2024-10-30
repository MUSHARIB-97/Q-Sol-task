import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let searchTimeout;

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
      state.filteredProducts = state.product.filter(
        (item) =>
          item.title.toLowerCase().includes(query) &&
          item.category === "men's clothing"
      );
    },
    debounceSearchProducts: (state, action) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        const query = action.payload.toLowerCase();
        state.filteredProducts = state.product.filter((item) =>
          item.title.toLowerCase().includes(query)
        );
      }, 300); // Delay of 300ms
    },
  },
  extraReducers: (builder) => {
    builder.addCase(productList.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(productList.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.product = payload;
      // Initialize filteredProducts with only "men's clothing" products
      state.filteredProducts = payload.filter(
        (item) => item.category === "men's clothing"
      );
    });
    builder.addCase(productList.rejected, (state) => {
      state.loading = "rejected";
    });
    builder.addCase(UserHistoryList.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(UserHistoryList.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.historyList = payload;
    });
    builder.addCase(UserHistoryList.rejected, (state) => {
      state.loading = "rejected";
    });
  },
});

export const productList = createAsyncThunk(
  "ProductSlice/productList",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);

export const UserHistoryList = createAsyncThunk(
  "ProductSlice/historyList",
  async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
    return response.data;
  }
);

export const { searchProducts, debounceSearchProducts } = ProductSlice.actions;

export default ProductSlice.reducer;
