ServerEvents.recipes(event => {

    const id_prefix = 'kubejs:monster_cooking/'

    event.remove({ id: 'dungeonsdelight:monster_pot' })

    event.recipes.summoningrituals.altar('farmersdelight:cooking_pot')
        .input('5x dungeonsdelight:stained_scrap', '2x biomancy:mob_gland', '4x biomancy:flesh_bits')
        .sacrifice('skeleton')
        .itemOutput('dungeonsdelight:monster_pot')

    event.remove({ id: 'dungeonsdelight:dungeon_stove' })

    event.shaped('dungeonsdelight:dungeon_stove', [
    		'SSS',
    		'DBD',
    		'DCD'
		],{
			S: 'dungeonsdelight:stained_scrap',
			D: ['#kubejs:basalt', '#kubejs:deepslate'],
            C: 'minecraft:campfire',
            B: 'biomancy:mob_gland'

	}).id('kubejs:shaped/dungeon_stove')

    const monster_cooking_recipe = (output, inputs, container, cookingtime, xp) => {

        if (xp == undefined) {
            xp = 0
        }
        if (cookingtime == undefined) {
            cookingtime = 200
        }

        var recipe = {
            type: 'dungeonsdelight:monster_cooking',
            result: Item.of(output).toJson(),
            ingredients: inputs.map(input => Ingredient.of(input).toJson()),
            cookingtime: cookingtime,
            experience: xp
        }

        if (container != undefined) {
            recipe['container'] = Ingredient.of(container).toJson()
        }

        event.custom(recipe).id(`${id_prefix}${item_name(output)}`)

    }

    monster_cooking_recipe(
        '2x biomancy:impermeable_membrane',
        [
            'biomancy:elastic_fibers',
            'biomancy:elastic_fibers',
            'biomancy:tough_fibers'
        ],
        'biomancy:gelling_agent'
    )

    monster_cooking_recipe(
        '4x thermal:florb',
        [
            'biomancy:impermeable_membrane',
            'biomancy:flesh_bits',
            'biomancy:mob_gland',
            'biomancy:elastic_fibers',
            'biomancy:elastic_fibers'
        ]
    )

    monster_cooking_recipe(
        'biomancy:storage_sac',
        [
            'biomancy:impermeable_membrane',
            'biomancy:impermeable_membrane',
            'biomancy:flesh_bits',
            'biomancy:flesh_bits',
            'biomancy:tough_fibers',
            'biomancy:elastic_fibers'
        ]
    )

    monster_cooking_recipe(
        '3x biomancy:flesh_spike',
        [
            'biomancy:mob_fang',
            'biomancy:bone_fragments',
            'biomancy:flesh_bits',
            'biomancy:flesh_bits',
            'biomancy:tough_fibers'
        ]
    )

    monster_cooking_recipe(
        'biomancy:fleshkin_chest',
        [
            'biomancy:tongue',
            'biomancy:bone_fragments',
            'biomancy:bone_fragments',
            'biomancy:flesh_bits',
            'biomancy:flesh_bits',
            'biomancy:flesh'
        ],
        'biomancy:impermeable_membrane'
    )

    monster_cooking_recipe(
        'biomancy:tongue',
        [
            'biomancy:flesh_bits',
            'biomancy:flesh_bits',
            'biomancy:flesh_bits',
            'biomancy:flesh_bits',
            'biomancy:elastic_fibers',
            'biomancy:elastic_fibers'
        ]
    )

    monster_cooking_recipe(
        '2x biomancy:maw_hopper',
         [
            'biomancy:bone_fragments',
            'biomancy:flesh_bits',
            'biomancy:flesh_bits',
            'biomancy:flesh_bits',
            'biomancy:elastic_fibers',
            'biomancy:elastic_fibers'
        ]
    )

    monster_cooking_recipe(
        'biomancy:flesh',
        [
            'biomancy:flesh_bits',
            'biomancy:flesh_bits',
            'biomancy:flesh_bits',
            'biomancy:flesh_bits'
        ]
    )

    monster_cooking_recipe(
        '2x biomancy:active_muscle',
        [
            'biomancy:flesh_slab',
            'biomancy:flesh_bits',
            'biomancy:elastic_fibers',
            'biomancy:elastic_fibers',
            'biomancy:elastic_fibers',
            'biomancy:gelling_agent'
        ]
    )

    monster_cooking_recipe(
        'kubejs:bottle_of_blood',
        [
            'biomancy:flesh_bits',
            'biomancy:flesh_bits'
        ],
        'minecraft:glass_bottle'
    )

    monster_cooking_recipe(
        'biomancy:chrysalis',
        [
            'biomancy:impermeable_membrane',
            'biomancy:impermeable_membrane',
            'biomancy:flesh_bits',
            'biomancy:flesh_bits',
            'minecraft:phantom_membrane',
            'minecraft:phantom_membrane'
        ]
    )

    // TODO: This is so fucking awful lmao
    const monster_cooking_recipe_2 = (output, inputs, container, cookingtime, xp) => {

        if (xp == undefined) {
            xp = 0
        }
        if (cookingtime == undefined) {
            cookingtime = 200
        }

        var recipe = {
            type: 'dungeonsdelight:monster_cooking',
            result: Item.of(output).toJson(),
            ingredients: inputs.map(input => Ingredient.of(input).toJson()),
            cookingtime: cookingtime,
            experience: xp
        }

        if (container != undefined) {
            recipe['container'] = Ingredient.of(container).toJson()
        }

        event.custom(recipe).id(`${id_prefix}${item_name(output)}_2`)

    }

    monster_cooking_recipe_2(
        'kubejs:bottle_of_blood',
        [
            'dungeonsdelight:rotten_tripe'
        ]
    )

    // TODO: This is even worse
    const monster_cooking_recipe_3 = (output, inputs, container, cookingtime, xp) => {

        if (xp == undefined) {
            xp = 0
        }
        if (cookingtime == undefined) {
            cookingtime = 200
        }

        var recipe = {
            type: 'dungeonsdelight:monster_cooking',
            result: Item.of(output).toJson(),
            ingredients: inputs.map(input => Ingredient.of(input).toJson()),
            cookingtime: cookingtime,
            experience: xp
        }

        if (container != undefined) {
            recipe['container'] = Ingredient.of(container).toJson()
        }

        event.custom(recipe).id(`${id_prefix}${item_name(output)}_3`)

    }

    monster_cooking_recipe_3(
        Item.of('kubejs:bottle_of_blood', 3),
        [
            'minecraft:rotten_flesh'
        ]
    )

})