import { extractVideoId, analyzeSentiment } from '../../utils/youtubeScrapper';

export default async (req, res) => {
  const { url } = req.body;
  const videoId = extractVideoId(url);
  const commentsFile = await saveVideoCommentsToCsv(videoId);
  const results = analyzeSentiment(commentsFile);
  res.status(200).json(results);
};