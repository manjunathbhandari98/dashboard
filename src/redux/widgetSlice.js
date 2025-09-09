import { createSlice } from "@reduxjs/toolkit";

const widgetSlice = createSlice({
  name: "widget",
  initialState: {
    widgets: [],
  },
  reducers: {
    addWidget: (state, action) => {
      const exists = state.widgets.some((w) => w.id === action.payload.id);
      if (!exists) state.widgets.push(action.payload);
    },
    removeWidget: (state, action) => {
      state.widgets = state.widgets.filter(
        (widget) => widget.id != action.payload
      );
    },
  },
});

export const { addWidget, removeWidget } = widgetSlice.actions;
export default widgetSlice.reducer;
