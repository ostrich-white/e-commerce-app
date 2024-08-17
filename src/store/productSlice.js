import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../services/api";

export const loadProducts = createAsyncThunk("products/loadProducts", async () => {
    return api.get("/products")
})
export const createProduct = createAsyncThunk("products/createProduct", async (product) => {
    return api.post("/products", product)
})
export const updateProduct = createAsyncThunk("products/updateProduct", async (id, product) => {
    return api.put(`/products/${id}`, product)
})

const productSlice = createSlice({
    name: "products",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => builder
        .addCase(loadProducts.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload
        })
        .addCase(loadProducts.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(loadProducts.rejected, (state,action) => {
            state.loading = false
            state.error = action.error
        })
        .addCase(createProduct.fulfilled, (state, action) => {
            state.data.push(action.payload)
        })
        .addCase(updateProduct.fulfilled, (state, action) => {
            const index = state.data.findIndex((product) => product._id === action.payload._id)
            state.data[index] = action.payload
        })
    
});

export default productSlice.reducer;
