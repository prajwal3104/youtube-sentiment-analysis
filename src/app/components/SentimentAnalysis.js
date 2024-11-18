import { useState } from 'react';

const SentimentAnalysis = () => {
  const [url, setUrl] = useState('');
  const [results, setResults] = useState(null);

  const analyzeUrl = async () => {
    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });
    const data = await response.json();
    setResults(data);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter YouTube URL" 
        value={url} 
        onChange={(e) => setUrl(e.target.value)} 
      />
      <button onClick={analyzeUrl}>Analyze</button>
      {results && (
        <div>
          <h2>Analysis Results</h2>
          <p>Positive Comments: {results.num_positive}</p>
          <p>Negative Comments: {results.num_negative}</p>
          <p>Neutral Comments: {results.num_neutral}</p>
          {/* Add graph components here */}
        </div>
      )}
    </div>
  );
};

export default SentimentAnalysis;