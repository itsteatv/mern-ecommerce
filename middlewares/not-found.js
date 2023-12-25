const notFound = (req, res, next) => {
  res.status(404).json({ message: "route not found" });
};
module.exports = notFound ; 