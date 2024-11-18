```javascript
// src/app/_app.js
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="root-layout">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
```