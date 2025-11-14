ServerEvents.recipes(event => {

	event.remove({ id: 'minecraft:golden_apple' })
	event.remove({ id: 'minecraft:iron_nugget_from_smelting' })
	event.remove({ id: 'minecraft:gold_nugget_from_smelting' })
	event.remove({ id: 'farmersdelight:iron_nugget_from_smelting_knife' })
	event.remove({ id: 'farmersdelight:gold_nugget_from_smelting_knife' })

	event.remove({ output: 'minecraft:smithing_table' })
	event.remove({ output: 'minecraft:cauldron' })
	event.remove({ output: 'minecraft:lantern' })
	event.remove({ output: 'minecraft:stonecutter' })
	event.remove({ output: 'minecraft:anvil' })
	event.remove({ output: 'minecraft:bucket' })

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

	event.shaped('minecraft:cauldron', [
    		'I I',
    		'I I',
    		'III'
		], {
			I: 'chestcavity:iron_scrap'
		}
	).id('kubejs:shaped/cauldron')

	event.shaped('4x minecraft:lantern', [
    		' T ',
    		'TIT',
    		' T '
		], {
			I: 'chestcavity:iron_scrap',
			T: 'minecraft:torch'
		}
	).id('kubejs:shaped/lantern')

	event.shaped('minecraft:stonecutter', [
    		' I ',
    		'SSS'
		], {
			I: 'chestcavity:iron_scrap',
			S: '#forge:stone'
		}
	).id('kubejs:shaped/stonecutter')

	event.shaped('minecraft:anvil', [
    		'BBB',
    		' I ',
			'IBI'
		], {
			I: 'chestcavity:iron_scrap',
			B: 'architects_palette:nether_brass_block'
		}
	).id('kubejs:shaped/anvil')

	event.shaped('minecraft:bucket', [
    		'I I',
			' I '
		], {
			I: 'architects_palette:sunmetal_brick'
		}
	).id('kubejs:shaped/bucket')

	event.shaped('minecraft:elytra', [
		'ABA',
		'CDC',
		'C C'
	], {
		A: 'biomancy:mob_sinew',
		B: 'biomancy:flesh',
		C: 'minecraft:phantom_membrane',
		D: 'biomancy:impermeable_membrane'
	}).id('kubejs:shaped/elytra')
})