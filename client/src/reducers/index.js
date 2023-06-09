import { combineReducers } from "@reduxjs/toolkit";
import controllerSlice from "../Slices/controllerSlice";
import productSlice from "../Slices/productSlice";

const rootReducer = combineReducers({
  controllerSlice: controllerSlice,
  productSlice: productSlice,
});

export default rootReducer;
