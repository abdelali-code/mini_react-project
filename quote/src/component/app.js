import React, { useState } from "react";
import "../App.css";
import RenderQuoteCard from "./RenderQuoteCard";
import { QUOTE } from "../data/quote";

function App() {
  let [quote, setQuote] = useState({ quote: QUOTE });

  return <RenderQuoteCard quote={quote.quote} />;
}

export default App;
