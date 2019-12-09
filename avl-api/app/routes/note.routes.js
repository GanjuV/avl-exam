module.exports = (app) => {
    const readfile = require('../controllers/readfile.controller.js');

    // Get csv data
    app.get('/api/getCSVData', readfile.getCSVData);
}