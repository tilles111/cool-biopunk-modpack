ServerEvents.recipes(event => {
	event.remove({ output: 'thermal:machine_furnace' })
	event.remove({ output: 'thermal:machine_centrifuge' })
	event.remove({ output: 'thermal:machine_pulverizer' })
	event.remove({ output: 'thermal:machine_bottler' })
	event.remove({ output: 'thermal:dynamo_gourmand' })
	event.remove({ output: 'thermal:energy_duct' })
	event.remove({ output: 'thermal:energy_cell_frame' })
	event.remove({ output: 'thermal:energy_cell' })

	event.shaped('thermal:machine_furnace', [
    		'ISI',
            'AUA',
            'CFC'
		],{
			I: 'architects_palette:nether_brass_ingot',
            C: 'kubejs:copper_scrap',
            F: 'biomancy:living_flesh',
            S: 'biomancy:storage_sac',
            A: 'biomancy:acid_extract',
            U: 'minecraft:furnace'
	}).id('kubejs:shaped/machine_furnace')

	event.shaped('thermal:machine_centrifuge', [
    		'III',
            'SES',
            'CFC'
		],{
			I: 'architects_palette:nether_brass_ingot',
            C: 'kubejs:copper_scrap',
            F: 'biomancy:living_flesh',
            S: 'biomancy:storage_sac',
            E: 'biomancy:elastic_fibers'
	}).id('kubejs:shaped/machine_centrifuge')

	event.shaped('thermal:machine_pulverizer', [
    		'ISI',
            'ALA',
            'CFC'
		],{
			I: 'architects_palette:nether_brass_ingot',
            C: 'kubejs:copper_scrap',
            F: 'biomancy:living_flesh',
            S: 'biomancy:storage_sac',
            A: 'biomancy:mob_fang',
            L: 'minecraft:flint'
	}).id('kubejs:shaped/machine_pulverizer')

	event.shaped('thermal:machine_bottler', [
    		'ISI',
            'MLM',
            'CFC'
		],{
			I: 'architects_palette:nether_brass_ingot',
            C: 'kubejs:copper_scrap',
            F: 'biomancy:living_flesh',
            S: 'biomancy:storage_sac',
            L: 'thermal:florb',
            M: 'biomancy:impermeable_membrane'
	}).id('kubejs:shaped/machine_bottler')

	event.shaped('thermal:dynamo_gourmand', [
    		'MSM',
            'CFC',
            'III'
		],{
			I: 'architects_palette:nether_brass_ingot',
            C: 'kubejs:copper_scrap',
            F: 'biomancy:living_flesh',
            S: 'biomancy:storage_sac',
            M: 'biomancy:impermeable_membrane'
	}).id('kubejs:shaped/dynamo_gourmand')

	event.shaped('8x thermal:energy_duct', [
    		'SMS'
		],{
			S: 'architects_palette:sunmetal_brick',
            M: 'biomancy:impermeable_membrane'
	}).id('kubejs:shaped/energy_duct')

	event.shaped('thermal:energy_cell_frame', [
    		'SPS',
            'P P',
            'SPS'
		],{
			S: 'architects_palette:sunmetal_brick',
			P: '#forge:plates/biobrass'
	}).id('kubejs:shaped/energy_cell_frame')

	event.shaped('thermal:energy_cell', [
    		'TST',
            'MFM',
            'TLT'
		],{
			F: 'thermal:energy_cell_frame',
            M: 'biomancy:impermeable_membrane',
            S: 'biomancy:storage_sac',
            L: 'biomancy:living_flesh',
            T: 'biomancy:tough_fibers'
	}).id('kubejs:shaped/energy_cell')
})