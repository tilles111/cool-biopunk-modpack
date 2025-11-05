ServerEvents.recipes(event => {

    const id_prefix = 'kubejs:cooking_pot/'

    const splash_ingredient = 'minecraft:egg'
    const container = 'minecraft:glass_bottle'

    const potion_recipe = (effect, inputs, splash, xp, cookingtime) => {

        if (xp == undefined) {
            xp = 5
        }
        if (cookingtime == undefined) {
            cookingtime = 200
        }
        if (splash == undefined) {
            splash = false
        }

        var potion_type = 'minecraft:potion'
        var splash_id_part = '' // this is probably ass

        if (splash) {
            inputs.push(splash_ingredient)
            potion_type = 'minecraft:splash_potion'
            splash_id_part = '_splash'
        }

        event.recipes.farmersdelight.cooking(
            inputs,
            Item.of(potion_type, `{Potion:"${effect}"}`),
            xp,
            cookingtime,
            container
        ).id(`${id_prefix}${effect.split(':')[1]}${splash_id_part}_potion`)

    }

    const normal_and_splash = {
        'minecraft:healing': [
            'minecraft:beetroot',
            'minecraft:sweet_berries',
            'minecraft:sweet_berries',
            'minecraft:sugar',
            'minecraft:porkchop'
        ],
        'minecraft:weakness': [
            'minecraft:poisonous_potato',
            'farmersdelight:rotten_tomato',
            'farmersdelight:rotten_tomato',
            'minecraft:charcoal',
            'minecraft:chicken'
        ]
    }


    // i think i need to understand this more i guess
    for (var [effect, ingredients] in Object.entries(normal_and_splash)) {
        potion_recipe(ingredients[0], ingredients[1])
        potion_recipe(ingredients[0], ingredients[1], true)
    }

})