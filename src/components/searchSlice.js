import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchTerm: ''
    },

    reducers: {
        getSearchTerm: (state, term) => {
            const { payload } = term
            state.searchTerm = payload
           
        }
    }
})



export const { getSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;