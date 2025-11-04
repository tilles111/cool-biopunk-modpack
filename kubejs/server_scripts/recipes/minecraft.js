ServerEvents.recipes(event => {
	event.shaped('minecraft:spawner',[
    		'SIS',
    		'I I',
    		'SIS'
		],{S: 'dungeonsdelight:stained_scrap', I: 'chestcavity:iron_scrap'})
	event.shaped('minecraft:smithing_table',[
    		'II',
    		'PP',
    		'PP'
		],{P: '#minecraft:planks', I: 'chestcavity:iron_scrap'})
})