ServerEvents.recipes(event => {

	event.remove({ output: 'supplementaries:sconce' })

	event.shaped('8x supplementaries:sconce', [
    		'TTT',
    		'TIT',
    		'TTT'
		], {
			I: 'chestcavity:iron_scrap',
			T: 'minecraft:torch'
		}
	).id('kubejs:shaped/sconce')
	
})