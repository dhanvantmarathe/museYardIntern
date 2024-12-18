import React from "react";

const Analysis = ({ data }) => {
  return (
    <div>
      <h2>Analysis Results</h2>
      <div>
        <h3>Links:</h3>
        <ul>
          {data.links.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Quotes:</h3>
        <ul>
          {data.quotes.map((quote, index) => (
            <li key={index}>{quote}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Timestamps:</h3>
        <ul>
          {data.timestamps.map((timestamp, index) => (
            <li key={index}>{timestamp}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Notes:</h3>
        <ul>
          {data.notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Analysis;
