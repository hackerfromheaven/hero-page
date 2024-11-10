import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isHoveredOnBtn: false,
    isHoveredOnText: false,
}

const cursorSlice = createSlice({
    name: 'cursor',
    initialState,
    reducers:{
hoveredBtn(state, action){
    state.isHoveredOnBtn = action.payload
},
hoveredText(state, action){
    state.isHoveredOnText = action.payload
}
    }
})
export const {hoveredBtn, hoveredText} = cursorSlice.actions

export default cursorSlice.reducer