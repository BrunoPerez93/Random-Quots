import { useEffect, useState } from "react";
import { getQuots } from "../../helpers/getQuots";
import ButtonQuotes from "../Common/ButtonQuotes";
import './quotes.css';
import link from '../../assets/link.svg';
import regroup from '../../assets/Regroup.svg';

const Quotes = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuote();
  }, [])

  const fetchQuote = async () => {
    setLoading(true);
    const data = await getQuots();
    setQuote(data);
    setLoading(false);
  };

  const handleFamous = async () => {
    const url = "https://api.quotable.io/quotes?tags=famous-quotes";
    const resp = await fetch(url);
    const quotes = await resp.json();
    if (quotes && quotes.results && quotes.results.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.results.length);
      const selectedQuote = quotes.results[randomIndex];
      setQuote(selectedQuote);
    } else {
      console.error("No quotes found or invalid response structure");
    }
  };

  const handleInspirational = async () => {
    const url = 'https://api.quotable.io/quotes?tags=love|happiness';
    const resp = await fetch(url);
    const quotes = await resp.json();
    if (quotes && quotes.results && quotes.results.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.results.length);
      const selectedQuote = quotes.results[randomIndex];
      setQuote(selectedQuote);
    } else {
      console.error("No quotes found or invalid response structure");
    }
  }

  const copyToClipboard = () => {
    if (quote) {
      navigator.clipboard.writeText(`${quote.content} - ${quote.author}`)
        .then(() => alert("Quote copied to clipboard!"))
        .catch(err => console.error('Failed to copy:', err));
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      {loading ? (
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-c-gray"></div>
      ) : (
        <div className="flex flex-col justify-center items-center w-1/2 bg-c-gray p-5 rounded-[20px] bg-opacity-40">
          <h2 className="text-c-white mb-5">{quote.author}</h2>
          <div className="xs:flex xs:flex-col xs:justify-center xs:items-center sm:flex-row">
            <ButtonQuotes title='Famous Quotes' onClick={handleFamous} />
            <ButtonQuotes title='Inspirational Quotes' onClick={handleInspirational} />
          </div>
          <h3 className="text-c-light-gray my-5">{quote.content}</h3>
          <div className="flex my-5">
            <img className="border border-c-gray p-2 rounded-l-[10px]" src={regroup} alt="icono" onClick={fetchQuote} />
            <img className="border border-c-gray p-2 rounded-r-[10px]" src={link} alt="icono" onClick={copyToClipboard} />
          </div>
        </div>
      )}
    </div>
  )
};

export default Quotes;
