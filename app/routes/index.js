'use strict';

module.exports = function (app) {
app.route('/')
  .get('/:query', function (req, res) {
    console.log(req.params.query + "logged")
    res.send("TEST");
});

};
