import React, { useEffect, useState } from "react";

function Quote(){
    const [quote, setQuote] = useState({})

    useEffect(()=> {
        fetch("https://type.fit/api/quotes")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
            const randomQuote = Math.floor(Math.random() * data.length);
            setQuote(data[randomQuote])
        });
    },[])
    return(
            <div className="quote">
                <h3>{`“ ${quote.text} ”`}</h3>
                <h4>{`- ${quote.author}`}</h4>
            </div>
    )
}

export default Quote