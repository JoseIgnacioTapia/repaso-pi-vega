const validateUser = (req, res, next) => {
  const { name, email, phone } = req.body;
  if (!name) return res.status(400).json({ error: "missing name" });
  if (!email) return res.status(400).json({ error: "missing email" });
  if (!phone) return res.status(400).json({ error: "missing phone" });
  next();
};

module.exports = {
  validateUser,
};
