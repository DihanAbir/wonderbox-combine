import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    image: "",
};

export const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        setImage: (state, action) => {
            state.image = action.payload;
        },
    },
});

export const {
    setImage,
} = productSlice.actions;
export default productSlice.reducer;
