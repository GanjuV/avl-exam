
// Retrieve data
exports.login = (req, res) => {
  try {
    console.log(req)
    res.send("success");
  } catch(err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving login."
    });
  }
};