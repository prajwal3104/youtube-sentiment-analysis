import { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState(null);

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    setResults(data);
  };

  return (
    <div>
      <input 
        type="file" 
        onChange={(e) => setFile(e.target.files[0])} 
      />
      <button onClick={uploadFile}>Upload</button>
      {results && (
        <div>
          <h2>Upload Results</h2>
          <p>Check the processed file for sentiment scores.</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;