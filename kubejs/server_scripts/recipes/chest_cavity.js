ServerEvents.recipes(event => {
	event.remove({ input: 'chestcavity:iron_scrap', output: 'minecraft:iron_nugget' })
	event.remove({ output: 'chestcavity:chest_opener' })

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
})