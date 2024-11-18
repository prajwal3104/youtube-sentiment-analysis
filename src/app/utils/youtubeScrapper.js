import { google } from 'googleapis';

const youtube = google.youtube('v3');

export const extractVideoId = (url) => {
  const regex = /(?:youtube\.com\/watch\?v=|youtu.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

export const saveVideoCommentsToCsv = async (videoId) => {
  // Retrieve comments using YouTube API and save to CSV
  // Return path to saved CSV file
};

// Other utility functions...