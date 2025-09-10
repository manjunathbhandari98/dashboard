import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../redux/searchSlice";
import sidebarReducer from "../redux/sidebarSlice";
import widgetReducer from "../redux/widgetSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    widget: widgetReducer,
    search: searchReducer,
  },
});

export default store;
