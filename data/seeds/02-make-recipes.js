const recipes = [
    {recipe_name: 'Broccoli Pesto Pasta'},
    {recipe_name: 'Lemon Chicken'},
    {recipe_name: 'Salmon en Papillote'},
]

const ingredients = [
    { ingredient_name: 'Broccoli' , ingredient_unit: 'lbs'},
    { ingredient_name: 'Pesto' , ingredient_unit: 'lbs'},
    { ingredient_name: 'Pasta' , ingredient_unit: 'lbs'},
    { ingredient_name: 'Lemon' , ingredient_unit: 'slices'},
    { ingredient_name: 'Chicken' , ingredient_unit: 'kilos'},
    { ingredient_name: 'Salmon' , ingredient_unit: 'grams'},
]

const step_ingredients = [
    //Broccoli pesto pasta
    {step_id: 2, ingredient_id: 1, quantity: 1},
    {step_id: 3, ingredient_id: 2, quantity: 1},
    {step_id: 3, ingredient_id: 3, quantity: 1},
    {step_id: 5, ingredient_id: 4, quantity: 1},
    {step_id: 5, ingredient_id: 5, quantity: 1},
    {step_id: 7, ingredient_id: 6, quantity: 1},
]

const steps = [
    //broccoli pesto pasta
    {step_text: 'Heat pan.', step_number: 1, recipe_id: 1},
    {step_text: 'Add broccoli', step_number: 2, recipe_id: 1},
    {step_text: 'Add pesto mixed with pasta', step_number: 3, recipe_id: 1},
    //lemon chicken
    {step_text: 'Heat Oven', step_number: 1, recipe_id: 2},
    {step_text: 'Put chicken and lemon in oven', step_number: 2, recipe_id: 2},
    {step_text: 'Pin in oven at 500 degrees', step_number: 3, recipe_id: 2},
    //salmon en papillote
    {step_text: 'Fish a salmon in the Bidasa river', step_number: 1, recipe_id: 3},
    {step_text: 'Cook salmon', step_number: 2, recipe_id: 3},
]

exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
}