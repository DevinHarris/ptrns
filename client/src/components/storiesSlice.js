import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import newsApi from "../api/newsApi";

export const fetchStories = createAsyncThunk('stories/fetchStories', async (searchTerm) => {
   
    const response = await newsApi.get(`/news/search?q=${searchTerm}`);
    // dispatch({ type: 'stories/fetchStories', payload: response });
    return response.data.data;
})


export const storiesSlice = createSlice({
    name: 'stories',
    initialState: {
        stories: [],
        loading: true
    },

    reducers: {},

    extraReducers: {
        [fetchStories.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.stories = payload
        },

        [fetchStories.rejected]: (state) => {
            state.loading = true
        }
    }
})


export default storiesSlice.reducer;