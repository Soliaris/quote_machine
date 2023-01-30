import { configureStore} from "@reduxjs/toolkit"
import quoteReducer from "../features/quote/quoteSlice"
// import {createLogger} from "redux-logger"

// const logger = createLogger();


const store = configureStore({
    reducer: {
        quote: quoteReducer,
    },
    // middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store