/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("notes", (table) => {
    table.increments().primary();
    table.string("content");
    table.integer("user_id");
    table.foreign("user_id").references("users.id");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("notes");
};
