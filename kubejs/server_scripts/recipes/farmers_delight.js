ServerEvents.recipes(event => {
	const id_prefix = 'kubejs:cooking_pot/'

	event.remove({ output: 'farmersdelight:cooking_pot' })
	event.remove({ output: 'thermal:phytogro' })

    event.recipes.farmersdelight.cooking(
	    ['minecraft:beetroot','minecraft:sweet_berries','minecraft:sweet_berries','minecraft:sugar','minecraft:porkchop'],
	    Item.of('minecraft:potion', '{Potion:"minecraft:healing"}'),
	    5,
	    200,
	    'minecraft:glass_bottle'
	).id(`${id_prefix}healing_potion`)

    event.recipes.farmersdelight.cooking(
	    ['minecraft:poisonous_potato','farmersdelight:rotten_tomato', 'farmersdelight:rotten_tomato', 'minecraft:charcoal', 'minecraft:chicken'],
	    Item.of('minecraft:potion', '{Potion:"minecraft:weakness"}'),
	    5,
	    200,
	    'minecraft:glass_bottle'
	).id(`${id_prefix}weakness_potion`)

    event.recipes.farmersdelight.cooking(
	    ['minecraft:beetroot','minecraft:sweet_berries','minecraft:sweet_berries','minecraft:sugar','minecraft:porkchop','minecraft:egg'],
	    Item.of('minecraft:splash_potion', '{Potion:"minecraft:healing"}'),
	    5,
	    200,
	    'minecraft:glass_bottle'
	).id(`${id_prefix}splash_healing_potion`)

    event.recipes.farmersdelight.cooking(
	    ['minecraft:poisonous_potato','farmersdelight:rotten_tomato', 'farmersdelight:rotten_tomato', 'minecraft:charcoal', 'minecraft:chicken','minecraft:egg'],
	    Item.of('minecraft:splash_potion', '{Potion:"minecraft:weakness"}'),
	    5,
	    200,
	    'minecraft:glass_bottle'
	).id(`${id_prefix}splash_weakness_potion`)

    event.recipes.farmersdelight.cooking(
	    ['minecraft:bone_meal','#forge:crops', '#forge:crops'],
	    '16x thermal:phytogro',
	    1,
	    600
	).id(`${id_prefix}phytogro`)

    event.recipes.farmersdelight.cooking(
	    ['quark:yellow_blossom_leaves', 'quark:yellow_blossom_leaves', 'quark:yellow_blossom_leaves', 'quark:yellow_blossom_leaves', 'quark:yellow_blossom_leaves', 'minecraft:apple'],
	    'minecraft:golden_apple',
	    1,
	    600
	).id(`${id_prefix}golden_apple`)

    event.recipes.farmersdelight.cooking(
	    ['minecraft:rotten_flesh'],
	    'kubejs:bottle_of_blood',
	    1,
	    100,
	    'minecraft:glass_bottle'
	).id(`${id_prefix}blood_bottle`)
	
	event.shaped('farmersdelight:cooking_pot', [
    		'DSD',
    		'DDD'
		],{
			D: 'minecraft:cobbled_deepslate',
			S: 'minecraft:wooden_shovel'
		}).id('kubejs:shaped/cooking_pot')
})