import { processCsvFile } from '../../utils/fileHandler';

export default async (req, res) => {
  const file = req.files.file;
  const results = await processCsvFile(file);
  res.status(200).json(results);
};