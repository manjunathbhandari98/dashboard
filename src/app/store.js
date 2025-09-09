import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../redux/sidebarSlice";
import widgetReducer from "../redux/widgetSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    widget: widgetReducer,
  },
});

export default store;
