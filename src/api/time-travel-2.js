export default function handler(req, res) {
  const { city, year } = req.query;
  res.send(`You time-travelled to ${city}, in year ${year}`);
}
