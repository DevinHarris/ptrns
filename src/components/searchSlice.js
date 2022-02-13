import { createSlice } from '@reduxjs/toolkit';
export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchTerm: ''
    },

    reducers: {
        getSearch: (state, term) => {
            const { payload } = term;
            state.searchTerm = payload
           
        }
    }
})

export const { getSearch } = searchSlice.actions;
export default searchSlice.reducer;