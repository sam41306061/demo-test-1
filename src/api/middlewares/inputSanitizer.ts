const inputSanitizer = (req, res, next) => {
  try {
    const customerData = req.body;
    if (!customerData || !customerData.email || !customerData.name) {
      res.status(400).json({ error: "User email and name are required" });
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "End point has not been found" });
  }
  // For example, trim strings, remove special characters, etc
};

export default inputSanitizer;
