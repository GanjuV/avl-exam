module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');
    const readfile = require('../controllers/readfile.controller.js');

    console.log(app)
    // Create a new Note
    app.post('/api/getquestions', readfile.getQuestions);


    // Create a new Note
    app.post('/notes', notes.create);

    // Retrieve all Notes
    app.get('/notes', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', notes.delete);
}