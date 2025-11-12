ServerEvents.recipes(event => {
	event.remove({ output: 'industrialforegoing:dissolution_chamber' })
	event.remove({ output: 'industrialforegoing:mob_slaughter_factory' })
	event.remove({ output: 'industrialforegoing:block_placer' })
	event.remove({ output: 'industrialforegoing:block_breaker' })
	event.remove({ output: 'industrialforegoing:fluid_placer' })
	event.remove({ output: 'industrialforegoing:fluid_collector' })
	event.remove({ output: 'industrialforegoing:animal_rancher' })
	event.remove({ output: 'industrialforegoing:animal_feeder' })
	event.remove({ output: 'industrialforegoing:animal_baby_separator' })
	event.remove({ output: 'industrialforegoing:mob_crusher' })
	event.remove({ output: 'industrialforegoing:plant_sower' })
	event.remove({ output: 'industrialforegoing:plant_gatherer' })

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

    event.recipes.biomancy.bio_forging(['4x thermal:saw_blade', '8x kubejs:mineral_brick', 'thermal:machine_frame', 'kubejs:biological_core', '2x thermal:fluid_cell_frame'], 'industrialforegoing:mob_slaughter_factory', 'biomancy:machines', 100)
})