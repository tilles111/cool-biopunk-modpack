ServerEvents.recipes(event => {
	event.remove({ id: /industrialforegoing:.*_gear/ })
    
	event.shaped('kubejs:biobrass_gear', [
    		' I ',
    		'INI',
            ' I '
		],{
			I: 'architects_palette:nether_brass_ingot',
			N: '#forge:nuggets/iron'
	}).id('kubejs:shaped/biobrass_gear')

	event.shaped('kubejs:chitinsteel_gear', [
    		' I ',
    		'INI',
            ' I '
		],{
			I: 'architects_palette:sunmetal_brick',
			N: '#forge:nuggets/iron'
	}).id('kubejs:shaped/chitinsteel_gear')

    event.recipes.thermal.press('kubejs:biobrass_plate', 'architects_palette:nether_brass_ingot')
    event.recipes.thermal.press('kubejs:chitinsteel_plate', 'architects_palette:sunmetal_brick')

    event.recipes.thermal.press('kubejs:biobrass_gear', ['4x architects_palette:nether_brass_ingot', 'thermal:press_gear_die'])
    event.recipes.thermal.press('kubejs:chitinsteel_gear', ['4x architects_palette:sunmetal_brick', 'thermal:press_gear_die'])
})