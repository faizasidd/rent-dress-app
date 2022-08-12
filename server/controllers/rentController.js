const knex = require('knex')(require('../knexfile').development);

exports.index = (_req, res) => {
  knex('dress')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Dresses: ${err}`)
    );
};

exports.rentDress = (req, res) => {
  knex('dress')
    .join('listing', 'listing.id', 'dress.id')
    .join('user', 'user.id', 'dress.id')
    .select('dress.id','dress.dressname', 'dress.description', 'dress.condition', 'dress.designer', 'dress.size', 'dress.image', 'listing.rentprice', 'user.name', 'user.phone', 'user.email', 'user.location')
    .where({ dress_id: req.params.id })
    .then((data) => {
      // If record is not found, respond with 404
      if (!data.length) {
        return res.status(404).send(`Record with id: ${req.params.id} is not found`);
      }

      // Knex returns an array of records, so we need to send response with a single object only
      res.status(200).json(data[0]);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving dress ${req.params.id} ${err}`)
    );
};