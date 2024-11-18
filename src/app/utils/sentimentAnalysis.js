import nltk from 'nltk';
import SentimentIntensityAnalyzer from 'nltk/sentiment/vader';
nltk.download('vader_lexicon');

export const analyzeSentiment = (comments) => {
  const sid = new SentimentIntensityAnalyzer();
  let num_neutral = 0, num_positive = 0, num_negative = 0;

  comments.forEach(comment => {
    const sentimentScores = sid.polarity_scores(comment);
    if (sentimentScores.compound === 0.0) num_neutral += 1;
    else if (sentimentScores.compound > 0.0) num_positive += 1;
    else num_negative += 1;
  });

  return { num_neutral, num_positive, num_negative };
};