ServerEvents.recipes(event => {
    


    event.shaped(Item.of('ae2:nether_quartz_cutting_knife', "{Damage:0,RepairCost:0,display:{Name:'{\"text\":\"Scalpel (needs retexture or replacement)\"}'}}"), [
    		'  R',
    		'IR ',
    		'SS '
		],{
			S: 'dungeonsdelight:stained_scrap',
			I: 'chestcavity:iron_scrap',
            R: '#forge:rods/wooden'

	}).id('kubejs:shaped/nether_quartz_cutting_knife')

})