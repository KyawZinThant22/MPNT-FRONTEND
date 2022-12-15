import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAlert {
  value: {
    open: boolean;
    type: "success" | "warning" | "error" | "idle";
    label: string;
  };
}

const initialState: IAlert = {
  value: {
    open: false,
    type: "idle",
    label: "",
  },
};

const AlertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    openAlert: (state, action: PayloadAction<any>) => {
      state.value = {
        open: true,
        type: action.payload.type,
        label: action.payload.label,
      };
    },
    closeAlert: (state) => {
      state.value = {
        open: false,
        type: "idle",
        label: "",
      };
    },
  },
});

export const { openAlert, closeAlert } = AlertSlice.actions;
export default AlertSlice.reducer;
