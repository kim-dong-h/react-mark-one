import { createSlice } from "@reduxjs/toolkit";


const testSlice = createSlice({
  name : "test",
  initialState : {
    name : "",
    id : ""
  },
  reducers : {
    setId(state, action){
      state.id = action.payload
    },
    setName(state, action) {
      state.name = action.payload
    }
  }
});

export const {setId, setName} = testSlice.actions;
export default testSlice.reducer;