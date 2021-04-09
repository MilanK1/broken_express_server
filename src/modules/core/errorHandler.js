function apiNotFound(req, res) {
  res.status(400).json("API Not Found");
}

export default function errorHandler(app) {
  app.use(apiNotFound);
}
