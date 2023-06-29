const models = require("../models");

const add = (req, res) => {
  const admin = req.body;

  // TODO validations (length, format...)

  models.user
    .insert(admin)
    .then(([result]) => {
      res.location(`/admin/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
