// Simple field-presence validator middleware factory.
function validateBody(requiredFields) {
  return (req, res, next) => {
    const missing = requiredFields.filter((f) => !req.body[f]);
    if (missing.length) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missing.join(", ")}`,
      });
    }
    next();
  };
}

module.exports = { validateBody };