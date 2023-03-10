const knex = require("knex")(require("../knexfile"));

exports.index = (_req, res) => {
  knex("hero")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) =>
      res.status(400).send(`Error retrieving heroes: ${error}`)
    );
};

exports.singleHero = (req, res) => {
    knex("hero")
      .where({ id: req.params.id })
      .then((data) => {
        if (!data.length) {
          return res
            .status(404)
            .send(`Record with id: ${req.params.id} is not found`);
        }
        res.status(200).json(data[0]);
      })
      .catch((err) =>
        res.status(400).send(`Error retrieving hero ${req.params.id} ${err}`)
      );
  };