const db = require('../../data/db-config')

async function getSteps(recipe_id) {
    const steps = await db('steps')
        .select('step_id', 'step_number', 'step_instructions')
        .where('recipe_id', recipe_id)
    
    return steps
}

async function getIngredients(step_id) {
    const ingredient_ids = await db('step_ingredients')
        .select('ingredient_id')
        .where('step_id', step_id)

    const ingredients = await db('ingredients as i')
        .select('i.ingredient_id', 'ingredient_name', 'quantity', 'ingredient_unit')
        .join('step_ingredients as si', 'i.ingredient_id', 'si.ingredient_id')
        .whereIn('i.ingredient_id', ingredient_ids.map(row=>row.ingredient_id))

    return ingredients
}

async function getById (recipe_id) {
    const recipe = await db('recipes')
        .select('*')
        .where('recipe_id', recipe_id)
        .first()

    recipe.steps = await getSteps(recipe_id)

    for (const step of recipe.steps) {
        step.ingredients = await getIngredients(step.step_id)
    }
    console.log(recipe)
}

module.exports = {getById, getSteps, getIngredients}