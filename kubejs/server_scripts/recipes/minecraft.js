ServerEvents.recipes(event => {
	event.remove({ id: 'minecraft:golden_apple' })

	event.shaped('minecraft:spawner',[
    		'SIS',
    		'I I',
    		'SIS'
		],{S: 'dungeonsdelight:stained_scrap', I: 'chestcavity:iron_scrap'}
	)
	event.shaped('minecraft:smithing_table',[
    		'II',
    		'PP',
    		'PP'
		],{P: '#minecraft:planks', I: 'chestcavity:iron_scrap'}
	)
	
	
})