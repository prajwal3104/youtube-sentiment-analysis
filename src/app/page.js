import Layout from '../components/Layout';
import SentimentAnalysis from '../components/SentimentAnalysis';
import FileUpload from '../components/FileUpload';

const HomePage = () => {
  return (
    <Layout>
      <h1>YouTube Sentiment Analysis</h1>
      <SentimentAnalysis />
      <FileUpload />
    </Layout>
  );
};

export default HomePage;
