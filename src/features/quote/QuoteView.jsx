import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchQuote } from './quoteSlice'

function getColor() {
    const randCol = (max) => {
    return Math.floor(Math.random() * max)
    }
    return `rgb(${randCol(200)},${randCol(200)},${randCol(200)})`
}

function setColor() {
    const r = document.querySelector(':root')
    r.style.setProperty('--main-color', getColor())
}

export const QuoteView = () => {

    function onClick () {
        dispatch(fetchQuote())
        setColor()
    }
    // state.quote.quote = state then reducer name then property
    const quoteData = useSelector((state) => state.quote)
    const dispatch = useDispatch()
    return (
        <div>
            <div id="quote-box">
            {!quoteData.loading && <div className='quote'>
                <div className="main">
                    <i className="fa fa-quote-left"></i>
                    <div id="text">
                        {quoteData.quote.content}
                    </div>
                </div>
                <p id="author">- {quoteData.quote.author}</p> 
                </div>}
                
                <div className="footer">
                    <div className="share-links">
                        <a href="http://www.twitter.com"><i className="fa-brands fa-square-twitter"></i></a>
                        <a href="http://www.tumblr.com"><i className="fa-brands fa-square-tumblr"></i></a>
                    </div>
                    <button onClick={onClick} id="new-quote">New Quote</button>
                </div>
            </div>
        </div>
       
    )
}
