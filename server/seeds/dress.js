/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 const categoryData = require('../seed_data/category');
 const dressData = require('../seed_data/dress');
 const userData = require('../seed_data/user');
 const listingData = require('../seed_data/listing');
 const reviewsData = require('../seed_data/reviews');
 
 exports.seed = function (knex) {
   return knex('category')
     .del()
     .then(function () {
       return knex('category').insert(categoryData);
     })
     .then(() => {
       return knex('dress').del();
     })
     .then(() => {
       return knex('dress').insert(dressData);
     })
     .then(() => {
      return knex('user').del();
    })
    .then(() => {
      return knex('user').insert(userData);
    })
     .then(() => {
      return knex('listing').del();
    })
    .then(() => {
      return knex('listing').insert(listingData);
    })
    .then(() => {
      return knex('reviews').del();
    })
    .then(() => {
      return knex('reviews').insert(reviewsData);
    });
 };
