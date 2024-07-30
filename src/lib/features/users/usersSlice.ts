import { createSlice, current } from "@reduxjs/toolkit";

interface IState {
  user: any;
}

const initialState: IState = {
  user: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = usersSlice.actions;

export default usersSlice.reducer;
