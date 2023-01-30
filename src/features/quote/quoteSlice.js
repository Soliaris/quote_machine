import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    quote: {},
    error: ''
}

// Generates pending, fulfilled and rejected action types
const fetchQuote = createAsyncThunk('quote/fetchQuote', () => {
    return axios.get('https://api.quotable.io/random')
    .then (response => response.data)
})

const quoteSlice = createSlice({
    name:'quote',
    initialState,
    extraReducers : builder => {
        builder.addCase(fetchQuote.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchQuote.fulfilled, (state,action) => {
            state.loading = false
            state.quote = action.payload
            state.error = ''
        })
        builder.addCase(fetchQuote.rejected, (state,action) => {
            state.loading = false
            state.quote = {}
            state.error = action.error.message
        })
    }
})

// const quoteSlice = createSlice({
//     name:'quote',
//     initialState,
//     // if key and const are the same you can just specify const
//     // no need to write -------- initialState: initialState
//     reducers: {
//         requested: (state) => {
//             state.loading = true
//         },
//         succeeded: (state, action) => {
//             state.loading = false
//             state.quote = action.payload
//             state.error = ''
//         },
//         failed: (state, action) => {
//             state.loading = false
//             state.quote = ''
//             state.error = action.payload
//         }
//     }
// })

export default quoteSlice.reducer
// export const { requested, succeeded, failed } = quoteSlice.actions;
export {fetchQuote}
