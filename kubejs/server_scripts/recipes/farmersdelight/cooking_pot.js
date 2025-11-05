ServerEvents.recipes(event => {

    const id_prefix = 'kubejs:cooking_pot/'

    event.remove({ id: '/thermal:phytogro_*/' })

    event.recipes.farmersdelight.cooking(
	    [
            'minecraft:bone_meal',
            '#forge:crops',
            '#forge:crops'
        ],
	    '16x thermal:phytogro',
	    1,
	    100
	).id(`${id_prefix}phytogro`)

    event.recipes.farmersdelight.cooking(
	    [
            'minecraft:apple',
            'quark:yellow_blossom_leaves',
            'quark:yellow_blossom_leaves',
            'quark:yellow_blossom_leaves',
            'quark:yellow_blossom_leaves',
            'quark:yellow_blossom_leaves'
        ],
	    'minecraft:golden_apple',
	    0,
	    400
	).id(`${id_prefix}golden_apple`)

    event.recipes.farmersdelight.cooking(
	    [
            'minecraft:carrot',
            'quark:yellow_blossom_leaves',
            'quark:yellow_blossom_leaves',
            'quark:yellow_blossom_leaves',
            'quark:yellow_blossom_leaves',
            'quark:yellow_blossom_leaves'
        ],
	    'minecraft:golden_carrot',
	    0,
	    400
	).id(`${id_prefix}golden_carrot`)

    event.recipes.farmersdelight.cooking(
	    ['minecraft:rotten_flesh'],
	    'kubejs:bottle_of_blood',
	    1,
	    100,
	    'minecraft:glass_bottle'
	).id(`${id_prefix}blood_bottle`)

    event.recipes.farmersdelight.cooking(
        [
            'biomancy:mob_gland'
        ],
        '2x biomancy:gelling_agent',
        0,
        200
    ).id(`${id_prefix}gelling_agent_2`)

    event.recipes.farmersdelight.cooking(
        [
            'biomancy:mob_marrow'
        ],
        '4x biomancy:gelling_agent',
        0,
        200
    ).id(`${id_prefix}gelling_agent_4`)

})