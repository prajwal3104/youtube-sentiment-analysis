import '../styles/globals.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <h1>Sentiment Analysis App</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2024 Sentiment Analysis App</p>
      </footer>
    </div>
  );
};

export default Layout;