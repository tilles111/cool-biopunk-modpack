ServerEvents.recipes(event => {
	event.remove({ output: 'farmersdelight:cooking_pot' })
	event.remove({ output: 'thermal:phytogro' })

    event.recipes.farmersdelight.cooking(
	    ['minecraft:beetroot','minecraft:sweet_berries','minecraft:sweet_berries','minecraft:sugar','minecraft:porkchop','farmersdelight:milk_bottle'],
	    Item.of('minecraft:potion', '{Potion:"minecraft:healing"}'),
	    5,
	    200,
	    'minecraft:glass_bottle'
	)
    event.recipes.farmersdelight.cooking(
	    ['minecraft:bone_meal','#forge:crops', '#forge:crops'],
	    '16x thermal:phytogro',
	    1,
	    600
	)
	event.shaped('farmersdelight:cooking_pot',[
    		'DSD',
    		'DDD'
		],{D: 'minecraft:cobbled_deepslate', S: 'minecraft:wooden_shovel'})
})