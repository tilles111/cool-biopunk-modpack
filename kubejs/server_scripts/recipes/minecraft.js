ServerEvents.recipes(event => {

	event.remove({ id: 'minecraft:golden_apple' })

	event.shaped('minecraft:spawner', [
    		'SIS',
    		'I I',
    		'SIS'
		], {
			S: 'dungeonsdelight:stained_scrap',
			I: 'chestcavity:iron_scrap'
		}
	).id('kubejs:shaped/spawner')

	event.shaped('minecraft:smithing_table', [
    		'II',
    		'PP',
    		'PP'
		], {
			P: '#minecraft:planks',
			I: 'chestcavity:iron_scrap'
		}
	).id('kubejs:shaped/smithing_table')

	event.remove({ id: 'minecraft:grindstone'}) // fuck the vanilla grindstone recipe lmao
	event.shaped('minecraft:grindstone', [
			'ABA',
			'C C'
		], {
			A: '#minecraft:planks',
			B: '#forge:stone',
			C: '#forge:rods/wooden'
		}
	).id('kubejs:shaped/grindstone')
	
	
})