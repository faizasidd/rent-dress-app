const knex = require('knex')(require('../knexfile').development);

exports.index = (_req, res) => {
  knex('dress')
    .select('id','dressname', 'description', 'condition', 'designer', 'size', 'image')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Dresses: ${err}`)
    );
};

exports.singleDress = (req, res) => {
  knex('dress')
    .join('listing', 'listing.id', 'dress.id')
    .select('dress.id','dress.dressname', 'dress.description', 'dress.condition', 'dress.designer', 'dress.size', 'dress.image', 'listing.originalprice', 'listing.buyprice')
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

exports.dressCategory = (req, res) => {
  knex('dress')
    .where({ category_id: req.params.id })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res
        .status(400)
        .send(
          `Error retrieving dress from category ${req.params.id} ${err}`
        )
    );
};

exports.addDress = (req, res) => {
  // Validate the request body for required data    
  const dressDetails = req.body.dressDetails;  
  const listingDetails = req.body.listingDetails;                                                                                 
  if (!dressDetails.dressname || !dressDetails.designer || !dressDetails.category_id || !dressDetails.image || !dressDetails.size || !dressDetails.description || !listingDetails.buyprice) {
    return res.status(400).send('Please make sure to provide name, designer, category, image, description and price fields in a request');
  }

  knex('dress')
    .insert(dressDetails)
    // .join('category', 'category.id', 'dress.category_id')
    .then ((data) => {
     listingDetails.user_id = 1
     listingDetails.dress_id = data[0]
      return knex('listing')
      .insert(listingDetails)
    })
    // .join('listing', 'listing.dress_id', 'dress.id')
    // .select('dress.id','dress.name', 'dress.description', 'dress.designer', 'dress.size', 'dress.image', 'category.category', 'listing.buyprice')
    // .where({ dress_id: req.params.id })
    .then((data) => {
      // For POST requests we need to respond with 201 and the location of the newly created record
      const newDressURL = `/dress/${data[0]}`;
      res.status(201).location(newDressURL).send(newDressURL);
    })
    .catch((err) => res.status(400).send(`Error creating Dress: ${err}`));
};
