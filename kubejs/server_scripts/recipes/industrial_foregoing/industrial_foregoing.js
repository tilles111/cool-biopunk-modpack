ServerEvents.recipes(event => {
	event.remove({ output: 'industrialforegoing:dissolution_chamber' })

	event.shaped('industrialforegoing:dissolution_chamber', [
    		'BCB',
    		'GPG',
    		'BFB'
		], {
			C: 'kubejs:biological_core',
			B: 'kubejs:mineral_brick',
			G: '#forge:gears/chitinsteel',
			F: 'thermal:machine_frame',
			P: 'biomancy:primordial_cradle'
		}
	).id('kubejs:shaped/dissolution_chamber')
})