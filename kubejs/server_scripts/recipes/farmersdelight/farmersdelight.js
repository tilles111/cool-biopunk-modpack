ServerEvents.recipes(event => {
	const id_prefix = 'kubejs:cooking_pot/'

	event.remove({ output: 'farmersdelight:cooking_pot' })
	
	event.shaped('farmersdelight:cooking_pot', [
    		'DSD',
    		'DDD'
		],{
			D: ['#kubejs:basalt', '#kubejs:deepslate'],
			S: 'minecraft:wooden_shovel'
		}).id('kubejs:shaped/cooking_pot')
})