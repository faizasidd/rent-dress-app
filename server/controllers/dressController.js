const knex = require('knex')(require('../knexfile').development);

exports.index = (_req, res) => {
  knex('dress')
  .join('listing', 'listing.id', 'dress.id')
    .select('dress.id','dress.dressname', 'dress.description', 'dress.condition', 'dress.designer', 'dress.size', 'dress.image', 'listing.buyprice')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Dresses: ${err}`)
    );
};

exports.singleDress = (req, res) => {
  knex('dress')
    .join('listing', 'listing.dress_id', 'dress.id')
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
  dressDetails.image = 'http://localhost:8080/images/dress6.png'
  let id

  knex('dress')
    .insert(dressDetails)
    .then ((data) => {

     listingDetails.user_id = 1
     listingDetails.dress_id = data[0]
     id = data[0]
      return knex('listing')
      .insert(listingDetails)
    })
    .then((data) => {
      // For POST requests we need to respond with 201 and the location of the newly created record
      const newDressURL = `/dress/${id}`;
      res.status(201).location(newDressURL).send(newDressURL);
    })
    .catch((err) => res.status(400).send(`Error creating Dress: ${err}`));
};

exports.updateDress = (req, res) => {
  console.log(`id sent: ${req.params.id}`)
  const dressDetails = req.body.dressDetails;  
  const listingDetails = req.body.listingDetails;   
  console.log({dressDetails, listingDetails})    
  knex('dress')
    .update(dressDetails, listingDetails)
    .where({ id: req.params.id })
    .then((result) => {
      console.log({result})
      res.status(200).send(`Dress with id: ${req.params.id} has been updated`);
    })
    .catch((err) => {
      console.log({err})
      res.status(400).send(`Error updating Dress ${req.params.id} ${err}`)
    });
};

exports.deleteDress = (req, res) => {
  const dressDetails = req.body.dressDetails;  
  const listingDetails = req.body.listingDetails; 
  knex('dress')
    .delete(dressDetails, listingDetails)
    .where({ id: req.params.id })
    .then(() => {
      // For DELETE response we can use 204 status code
      res.status(204).send(`Dress with id: ${req.params.id} has been deleted`);
    })
    .catch((err) =>
      res.status(400).send(`Error deleting Dress ${req.params.id} ${err}`)
    );
};