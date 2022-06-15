/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('articles', table => {
        table.increments()
        table.string('title') 
        table.text('body') 
        table.timestamp('created_at')
        table.integer('user_id').references('id').inTable('users')
    }) 
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('articles')
};
