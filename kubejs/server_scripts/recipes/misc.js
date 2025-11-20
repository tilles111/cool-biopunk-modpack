ServerEvents.recipes(event => {
    event.remove({id: 'quark:building/smelting/moss_paste'})
	event.remove({ input: 'chestcavity:iron_scrap', output: 'minecraft:iron_nugget' })
	event.remove({ output: 'chestcavity:chest_opener' })
	event.remove({ output: 'supplementaries:sconce' })
	event.remove({ output: 'supplementaries:wrench' })

    event.shapeless('quark:moss_paste', ['minecraft:moss_block']).id('kubejs:shapeless/moss_paste_from_moss_block')
    event.shapeless('minecraft:moss_block', ['quark:moss_paste']).id('kubejs:shapeless/moss_block_from_moss_paste')
    event.shapeless('2x quark:moss_paste', ['minecraft:moss_carpet', 'minecraft:moss_carpet', 'minecraft:moss_carpet']).id('kubejs:shapeless/moss_paste_from_moss_carpet')

    event.shapeless('4x thermal:phytogro', ['minecraft:bone_meal', 'quark:moss_paste']).id('kubejs:shapeless/phytogro_from_moss_paste')

	event.shaped('chestcavity:chest_opener', [
    		' P ',
			'BGP',
			' B '
		], {
			P: '#forge:plates/chitinsteel',
			G: '#forge:gears/chitinsteel',
			B: 'minecraft:bone'
		}
	).id('kubejs:shaped/chest_opener')

	event.shaped('8x supplementaries:sconce', [
    		'TTT',
    		'TIT',
    		'TTT'
		], {
			I: 'chestcavity:iron_scrap',
			T: 'minecraft:torch'
		}
	).id('kubejs:shaped/sconce')
	event.shaped('supplementaries:wrench', [
    		' S ',
    		' SS',
    		'S  '
		], {
			S: 'kubejs:copper_scrap'
		}
	).id('kubejs:shaped/supplementaries_wrench')
})