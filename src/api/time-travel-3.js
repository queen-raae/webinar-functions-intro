const PIRATE_PRINCESS = {
  birthYear: "2015",
  hairColor: "blond",
  nickName: "Lilly",
};

export default function handler(req, res) {
  const { city, year } = req.query;
  const message = `You time-travelled to ${city}, in year ${year}`;

  if (city === "oslo" && year === "2026") {
    res.json({ message: message, princess: PIRATE_PRINCESS });
  } else {
    res.json({ message });
  }
}
