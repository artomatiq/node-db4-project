/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes', table => {
            table.increments('recipe_id')
            table.string('recipe_name', 200).notNullable().unique()
        })
        .createTable('steps',  table => {
            table.increments('step_id')
        })
        .createTable('ingredients', table => {
            table.increments('ingredient_id')
            table.string('ingreient_name', 200).notNullable().unique()
            table.string('ingredient_unit')
        })
        .createTable('step_ingredients', table => {
            table.increments()
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('step_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes')
};
