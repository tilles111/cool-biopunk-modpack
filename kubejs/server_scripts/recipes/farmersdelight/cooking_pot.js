ServerEvents.recipes(event => {

    const id_prefix = 'kubejs:cooking_pot/'

    event.remove({ id: '/thermal:phytogro_*/' })

    event.recipes.farmersdelight.cooking(
	    [
            'minecraft:bone_meal',
            ['#forge:crops', 'quark:moss_paste'],
            ['#forge:crops', 'quark:moss_paste']
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
            'biomancy:flesh_bits',
            'biomancy:flesh_bits',
            'biomancy:flesh_bits'
        ],
	    'kubejs:bottle_of_blood',
	    1,
	    100,
	    'minecraft:glass_bottle'
	).id(`${id_prefix}blood_bottle_flesh_bits`)

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


    event.remove({ id: 'architects_palette:nether_brass_blend' })

    event.recipes.farmersdelight.cooking(
	    [
            'kubejs:copper_scrap',
            'kubejs:copper_scrap',
            'biomancy:tough_fibers',
            'biomancy:tough_fibers',
            'biomancy:elastic_fibers',
            'biomancy:gelling_agent'
        ],
	    '4x architects_palette:nether_brass_blend',
	    0,
	    200
	).id(`${id_prefix}nether_brass_blend`)

    event.recipes.farmersdelight.cooking(
	    [
            'biomancy:elastic_fibers',
            'biomancy:elastic_fibers',
            'biomancy:tough_fibers'
        ],
	    'biomancy:impermeable_membrane',
	    0,
	    200,
        'biomancy:gelling_agent'
	).id(`${id_prefix}impermeable_membrane`)

    event.recipes.farmersdelight.cooking(
        [
            'biomancy:flesh_bits',
            'biomancy:flesh_bits',
            'biomancy:flesh_bits',
            'biomancy:flesh_bits',
            'biomancy:flesh_bits'
        ],
        'biomancy:flesh',
        0,
        200
    ).id(`${id_prefix}flesh`)

    event.recipes.farmersdelight.cooking(
        [
            'minecraft:stone',
            'minecraft:stone',
            'minecraft:stone',
            'minecraft:stone',
            'minecraft:stone',
            'minecraft:charcoal'
        ],
        '5x minecraft:deepslate',
        0,
        20
    ).id(`${id_prefix}deepslate`)

    event.recipes.farmersdelight.cooking(
        [
            'minecraft:cobblestone',
            'minecraft:cobblestone',
            'minecraft:cobblestone',
            'minecraft:cobblestone',
            'minecraft:cobblestone',
            'minecraft:charcoal'
        ],
        '5x minecraft:basalt',
        0,
        20
    ).id(`${id_prefix}basalt`)

})