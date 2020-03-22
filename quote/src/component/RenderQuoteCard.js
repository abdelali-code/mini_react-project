import React, { useState } from "react";

function RenderQuoteCard({ quote }) {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    if (counter < quote.length) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  };
  return (
    <div className="container">
      <div className="quote">{quote[counter].text}</div>
      <div>
        <p className="author">
          {'"'}
          {quote[counter].author ? quote[counter].author : "unknoun"}
          {'"'}
        </p>
      </div>
      <button className="new_quote" onClick={handleClick}>
        new quote
      </button>
    </div>
  );
}

export default RenderQuoteCard;
