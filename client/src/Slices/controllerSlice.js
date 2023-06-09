import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openProfileDrawer: false,
    openDashboardDrawer: false,
};

export const controllerSlice = createSlice({
    name: "controllerSlice",
    initialState,
    reducers: {
        setOpenProfileDrawer: (state, action) => {
            state.openProfileDrawer = action.payload;
        },
        setOpenDashboardDrawer: (state, action) => {
            state.openDashboardDrawer = action.payload;
        },
    },
});

export const {
    setOpenProfileDrawer,
    setOpenDashboardDrawer,
} = controllerSlice.actions;
export default controllerSlice.reducer;
