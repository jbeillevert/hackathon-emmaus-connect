const models = require("../models");

const browse = (req, res) => {
  console.log("Coucou", models.admin);
  models.admin
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500).send("error const browse");
    });
};

const read = (req, res) => {
  models.admin
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500).send("error const read");
    });
};

const edit = (req, res) => {
  const admin = req.body;

  // TODO validations (length, format...)

  admin.id = parseInt(req.params.id, 10);

  models.admin
    .update(admin)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500).send("error const edit");
    });
};

const add = (req, res) => {
  const admin = req.body;

  // TODO validations (length, format...)

  models.admin
    .insert(admin)
    .then(([result]) => {
      res.location(`/admin/${result.insertId}`).sendStatus(201);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500).send("error const add");
    });
};

const destroy = (req, res) => {
  models.admin
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500).send("error const destroy");
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
