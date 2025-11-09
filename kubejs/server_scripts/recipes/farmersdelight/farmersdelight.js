ServerEvents.recipes(event => {
	const id_prefix = 'kubejs:cooking_pot/'

	event.remove({ output: 'farmersdelight:cooking_pot' })
	event.remove({ output: 'farmersdelight:stove' })
	event.remove({ output: 'farmersdelight:skillet' })
	
	event.shaped('farmersdelight:cooking_pot', [
    		'DSD',
    		'DDD'
		],{
			D: ['#kubejs:basalt', '#kubejs:deepslate'],
			S: 'minecraft:wooden_shovel'
		}).id('kubejs:shaped/cooking_pot')
	
	event.shaped('farmersdelight:stove', [
    		'DDD',
    		'M M',
			'MCM'
		],{
			D: ['#kubejs:basalt', '#kubejs:deepslate'],
			M: 'minecraft:mud_bricks',
			C: 'minecraft:campfire'
		}).id('kubejs:shaped/stove')
	
	event.shaped('farmersdelight:skillet', [
    		' D',
    		'S '
		],{
			D: ['#kubejs:basalt', '#kubejs:deepslate'],
			S: '#forge:rods/wooden'
		}).id('kubejs:shaped/skillet')
})