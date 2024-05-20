function cors(req, res, next) {
  const { origin } = req.headers;
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  next(); // Идём дальше, не задерживаем очередь
}

module.exports = {
  cors, 
};
