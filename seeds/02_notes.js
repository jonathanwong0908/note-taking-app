/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('notes').del()
  await knex('notes').insert([
    { content: "note 1", user_id: 1 },
    { content: "note two", user_id: 2 },
    { content: "test", user_id: 2 }
  ]);
};
  