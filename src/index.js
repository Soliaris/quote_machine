import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider} from 'react-redux';
import store from "./app/store"
import { fetchQuote } from './features/quote/quoteSlice'

const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch(fetchQuote())

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);






// const fetchQuote = () => {
//     store.dispatch(requested())
//       axios.get("https://api.quotable.io/random")
//         .then (response => store.dispatch(succeeded(response.data)))
//         .catch((error) => {
//           store.dispatch(failed(error.message))
//         })
// }





// import { createStore, applyMiddleware, bindActionCreators,combineReducers} from "redux";
// import { produce } from "immer";
// import thunk from 'redux-thunk';
// import axios from 'axios';

// const FETCH_QUOTE_REQUESTED = "FETCH_QUOTE_REQUESTED";
// const FETCH_QUOTE_SUCCEEDED = "FETCH_QUOTE_SUCCEEDED";
// const FETCH_QUOTE_FAILED = "FETCH_QUOTE_FAILED"
// const COLOR_SWITCH = "COLOR_SWITCH"

// const initialQuoteState = {
//     loading: false,
//     quote: {},
//     error: ""
// }

// const initialColorState = {
//     color: "rgb(119, 177, 169)"
// }

// const fetchQuote = () => {
//   return (dispatch) => {
//     dispatch(fetchQuoteRequest())
//       axios.get("https://api.quotable.io/random")
//         .then (response => dispatch(fetchQuoteSuccess(response.data)))
//         .catch((error) => {
//           dispatch(fetchQuoteFailure(error.message))
//         })
//   }
// }


// const fetchQuoteRequest = () => {
//   return {
//       type:FETCH_QUOTE_REQUESTED,
//       payload: "pending"
//   }
// }

// const fetchQuoteSuccess = quote => {
//   return {
//     type: FETCH_QUOTE_SUCCEEDED,
//     payload:quote
//   }
// }

// const fetchQuoteFailure = error => {
//   return {
//     type: FETCH_QUOTE_FAILED,
//     payload: error
//   }
// }

// function getColor() {
//   const randCol = (max) => {
//     return Math.floor(Math.random() * max)
//   }
//   const colors = `rgb(${randCol(256)},${randCol(256)},${randCol(256)})`

//   return {
//     type: COLOR_SWITCH,
//     payload : colors
//   }
// }

// const quoteReducer = (state = initialQuoteState, action) => {
//   switch(action.type) {
//     case FETCH_QUOTE_SUCCEEDED:
//       // return produce(state,(draft) => {
//       //   draft.loading = false
//       //   draft.quote = action.payload
//       //   draft.error = ""
//       // })
//       return {
//           ...state,
//           loading:false,
//           quote:action.payload
//       }
//       case FETCH_QUOTE_FAILED:
//       return {
//           ...state,
//           loading:false,
//           quote:{},
//           error:action.payload
//       }
//     case FETCH_QUOTE_REQUESTED :
//       return {
//         ...state,
//         loading: true
//       }
//     default:
//       return state;
//   }
// }

// const colorReducer = (state = initialColorState,action) => {
//   switch(action.type){
//     case COLOR_SWITCH:
//       return {
//         ...state,
//         color:action.payload
//       }
//     default:
//       return state;
//   }
// }

// const rootReducer = combineReducers({
//   quote:quoteReducer,
//   color:colorReducer
// })

// const store = createStore(rootReducer,applyMiddleware(thunk));
// console.log('Initial state ', store.getState());

// const actions = bindActionCreators({fetchQuote,fetchQuoteRequest,fetchQuoteSuccess,fetchQuoteFailure,getColor}, store.dispatch);

// const unsubscribe = store.subscribe(()=> console.log('Update quote state ',store.getState()));
// // store.dispatch(fetchQuote());
// // replaced by actions
// actions.fetchQuote();
// actions.getColor();
// // unsubscribe();

