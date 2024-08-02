/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('fruits').truncate()
  await knex('fruits').insert([
    { fruits_name: 'apple', avg_weight_oz: 1.5, delicious: null, color: "green"},
    { fruits_name: 'orange', avg_weight_oz: 0.5, delicious: true, color: "red"},
    { fruits_name: 'pear', avg_weight_oz: 4.2, delicious: 0, color: "green"}
  ]);
};
