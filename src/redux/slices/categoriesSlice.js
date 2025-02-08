import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCategories } from "../../services/categoriesApi";

export const fetchCategoriesTrunk = createAsyncThunk('categories/fetch', fetchCategories);

const categoriesSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategoriesTrunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategoriesTrunk.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchCategoriesTrunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export default categoriesSlice.reducer