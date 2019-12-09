
// Retrieve data
exports.getQuestions = (req, res) => {
  try {
    const countQuestion = req.query.count;
    const jsonData = require('../../filedata/QS1');
    const dataFinal = jsonData.sort(() => 0.5 - Math.random()).slice(0, countQuestion);
    res.send(dataFinal);
  } catch(err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving notes."
    });
  }
};