/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('category', (table) => {
        table.increments('id').primary();
        table.string('category').notNullable();
    })
    .createTable('dress', (table) => {
      table.increments('id').primary();
      table.string('dressname').notNullable();
      table.string('description').notNullable();
      table.string('condition').notNullable();
      table.string('designer').notNullable();
      table.string('size').notNullable();
      table.string('image').notNullable();
      table
        .integer('category_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('category')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      
    })
    .createTable('user', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('phone').notNullable();
      table.string('email').notNullable();
      table.string('location').notNullable();
      table.string('username').notNullable();
      table.string('password').notNullable();
    })
    .createTable('listing', (table) => {
        table.increments('id').primary();
        table.integer('originalprice').notNullable();
        table.integer('buyprice').notNullable();
        table.integer('rentprice').notNullable();
        table
          .integer('user_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('user')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        table
          .integer('dress_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('dress')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
    })
    .createTable('reviews', (table) => {
        table.increments('id').primary();
        table.string('review').notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table
          .integer('user_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('user')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        table
          .integer('dress_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('dress')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('category').dropTable('dress').dropTable('user').dropTable('listing').dropTable('reviews');
};
