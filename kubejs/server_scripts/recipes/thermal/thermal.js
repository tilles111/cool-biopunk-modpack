ServerEvents.recipes(event => {
	event.remove({ output: 'thermal:machine_furnace' })
	event.remove({ output: 'thermal:machine_centrifuge' })
	event.remove({ output: 'thermal:machine_pulverizer' })
	event.remove({ output: 'thermal:machine_bottler' })
	event.remove({ output: 'thermal:dynamo_gourmand' })
	event.remove({ output: 'thermal:energy_duct' })
	event.remove({ output: 'thermal:energy_cell_frame' })
	event.remove({ output: 'thermal:energy_cell' })
	event.remove({ output: 'thermal:fluid_duct' })
	event.remove({ output: 'thermal:fluid_duct_windowed' })
	event.remove({ output: 'thermal:fluid_cell_frame' })
	event.remove({ output: 'thermal:fluid_cell' })
    event.remove({ output: 'thermal:machine_frame' })
    event.remove({ output: 'thermal:saw_blade' })
    event.remove({ output: 'thermal:machine_sawmill' })
    event.remove({ output: 'thermal:machine_crafter' })
    event.remove({ output: 'thermal:machine_press' })
    event.remove({ output: 'thermal:machine_insolator' })
    event.remove({ output: 'thermal:machine_crucible' })
    event.remove({ output: 'thermal:machine_refinery' })
    //event.remove({ output: 'thermal:machine_crystallizer' })
    event.remove({ output: 'thermal:machine_smelter' })

	event.shaped('thermal:machine_furnace', [
    		'ISI',
            'AUA',
            'CFC'
		],{
			I: 'architects_palette:nether_brass_ingot',
            C: 'kubejs:copper_scrap',
            F: 'biomancy:living_flesh',
            S: 'biomancy:storage_sac',
            A: 'dungeonsdelight:spider_extract',
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
    		'SNS'
		],{
			S: 'architects_palette:sunmetal_brick',
            N: 'biomancy:nutrient_paste'
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
    		'NSN',
            'MFM',
            'NLN'
		],{
			F: 'thermal:energy_cell_frame',
            M: 'biomancy:impermeable_membrane',
            S: 'biomancy:storage_sac',
            L: 'biomancy:living_flesh',
            N: 'biomancy:nutrient_paste'
	}).id('kubejs:shaped/energy_cell')

	event.shaped('8x thermal:fluid_duct', [
    		'BCB'
		],{
			B: 'architects_palette:nether_brass_ingot',
            C: 'kubejs:copper_scrap'
	}).id('kubejs:shaped/fluid_duct')

	event.shaped('8x thermal:fluid_duct_windowed', [
    		'BMB'
		],{
			B: 'architects_palette:nether_brass_ingot',
            M: 'biomancy:impermeable_membrane'
	}).id('kubejs:shaped/fluid_duct_windowed')

	event.shaped('thermal:fluid_cell_frame', [
    		'BCB',
            'C C',
            'BCB'
		],{
			B: 'architects_palette:nether_brass_ingot',
			C: 'kubejs:copper_scrap'
	}).id('kubejs:shaped/fluid_cell_frame')

	event.shaped('thermal:fluid_cell', [
    		'SMS',
            'MFM',
            'SMS'
		],{
			F: 'thermal:fluid_cell_frame',
            M: 'biomancy:impermeable_membrane',
            S: 'thermal:florb'
	}).id('kubejs:shaped/fluid_cell')

	event.shaped('thermal:machine_frame', [
    		'BGB',
    		'M M',
    		'CFC'
		], {
			C: 'architects_palette:sunmetal_brick',
			B: '#forge:plates/biobrass',
			G: '#forge:gears/biobrass',
			M: 'biomancy:impermeable_membrane',
			F: 'biomancy:living_flesh'
		}
	).id('kubejs:shaped/machine_frame')

	event.shaped('thermal:saw_blade', [
    		'BSF',
    		'S S',
    		'FSB'
		], {
			B: 'minecraft:bone',
			S: 'biomancy:bone_fragments',
			F: 'biomancy:mob_fang'
		}
	).id('kubejs:shaped/saw_blade')

	event.shaped('thermal:machine_sawmill', [
    		'BSB',
    		'OFO',
    		'CLC'
		], {
			C: 'architects_palette:sunmetal_brick',
			B: 'architects_palette:nether_brass_ingot',
			S: 'biomancy:storage_sac',
			L: 'biomancy:living_flesh',
            F: 'biomancy:flesh',
            O: 'thermal:saw_blade'
		}
	).id('kubejs:shaped/machine_sawmill')

	event.shaped('thermal:machine_press', [
    		'BSB',
    		'OFO',
    		'CLC'
		], {
			C: 'architects_palette:sunmetal_brick',
			B: 'architects_palette:nether_brass_ingot',
			S: 'biomancy:storage_sac',
			L: 'biomancy:living_flesh',
            F: 'biomancy:flesh',
            O: 'minecraft:bone'
		}
	).id('kubejs:shaped/machine_press')

	event.shaped('thermal:machine_crafter', [
    		'BSB',
    		'OFO',
    		'CLC'
		], {
			C: 'architects_palette:sunmetal_brick',
			B: 'architects_palette:nether_brass_ingot',
			S: 'biomancy:storage_sac',
			L: 'biomancy:living_flesh',
            F: 'biomancy:flesh',
            O: 'minecraft:crafting_table'
		}
	).id('kubejs:shaped/machine_crafter')

	event.shaped('thermal:machine_insolator', [
    		'GLG',
    		'BFB',
    		'SCS'
		], {
			B: 'kubejs:mineral_brick',
			C: 'kubejs:biological_core',
			G: '#forge:gears/chitinsteel',
			S: 'farmersdelight:rich_soil',
			L: 'architects_palette:nether_brass_lantern',
			F: 'thermal:machine_frame'
		}
	).id('kubejs:shaped/machine_insolator')

	event.shaped('thermal:machine_crucible', [
    		'SGS',
    		'BFB',
    		'SCS'
		], {
			S: 'architects_palette:sunmetal_brick',
			G: '#forge:gears/biobrass',
			B: 'minecraft:blaze_rod',
			C: 'thermal:fluid_cell',
			F: 'thermal:machine_frame'
		}
	).id('kubejs:shaped/machine_crucible')

	event.shaped('thermal:machine_refinery', [
    		'PBP',
    		'SFS',
    		'CGC'
		], {
			C: 'architects_palette:sunmetal_brick',
			P: '#forge:plates/biobrass',
			G: '#forge:gears/chitinsteel',
			S: 'biomancy:storage_sac',
			B: 'minecraft:blaze_rod',
			F: 'thermal:machine_frame'
		}
	).id('kubejs:shaped/machine_refinery')

	//event.shaped('thermal:machine_crystallizer', [
    //		'PCP',
    //		'BFB',
    //		'PLP'
	//	], {
	//		P: '#forge:plates/chitinsteel',
	//		B: 'kubejs:blood_bucket',
	//		L: 'biomancy:living_flesh',
	//		C: 'biomancy:fleshkin_chest',
	//		F: 'thermal:machine_frame'
	//	}
	//.id('kubejs:shaped/machine_crystallizer')

	event.shaped('thermal:machine_smelter', [
    		'BGB',
    		'PMP',
    		'CFC'
		], {
			C: 'architects_palette:sunmetal_brick',
			P: '#forge:plates/biobrass',
			G: '#forge:gears/biobrass',
			M: 'dungeonsdelight:monster_pot',
			B: 'minecraft:blaze_rod',
			F: 'thermal:machine_frame'
		}
	).id('kubejs:shaped/machine_smelter')

    event.remove({ output: 'thermal:device_fisher' })
    event.remove({ output: 'thermal:device_composter' })
    event.remove({ output: 'thermal:device_water_gen' })
    event.remove({ output: 'thermal:device_rock_gen' })
    event.remove({ output: 'thermal:device_collector' })
    event.remove({ output: 'thermal:device_xp_condenser' })
    event.remove({ output: 'thermal:device_nullifier' })

	event.shaped('thermal:device_fisher', [
    		'PSP',
    		'NFN',
    		'PSP'
		], {
			S: 'chestcavity:iron_scrap',
			P: '#minecraft:planks',
			N: 'farmersdelight:safety_net',
			F: 'minecraft:fishing_rod'
		}
	).id('kubejs:shaped/device_fisher')
	event.shaped('thermal:device_composter', [
    		'S S',
    		'PCP',
    		'SPS'
		], {
			S: 'chestcavity:iron_scrap',
			P: '#minecraft:planks',
			C: 'minecraft:composter'
		}
	).id('kubejs:shaped/device_composter')
	event.shaped('thermal:device_water_gen', [
    		'SGS',
    		'G G',
    		'BCB'
		], {
			S: 'kubejs:copper_scrap',
			G: 'biomancy:gelling_agent',
			B: 'architects_palette:nether_brass_ingot',
			C: 'thermal:fluid_cell'
		}
	).id('kubejs:shaped/device_water_gen')
	event.shaped('thermal:device_rock_gen', [
    		'SMS',
    		'GBG',
    		'SFS'
		], {
			S: 'chestcavity:iron_scrap',
			G: '#forge:gears/biobrass',
			M: 'biomancy:impermeable_membrane',
			B: 'industrialforegoing:block_breaker',
			F: 'thermal:machine_frame'
		}
	).id('kubejs:shaped/device_rock_gen')
	event.shaped('8x thermal:device_collector', [
    		'SLS',
    		'TFT',
    		'BMB'
		], {
			S: 'chestcavity:iron_scrap',
			B: 'architects_palette:nether_brass_ingot',
			L: 'chestcavity:ender_lung',
			T: 'biomancy:tongue',
			M: 'biomancy:maw_hopper',
			F: 'thermal:machine_frame'
		}
	).id('kubejs:shaped/device_collector')
	event.shaped('thermal:device_xp_condenser', [
    		'SMS',
    		'MXM',
    		'SMS'
		], {
			S: 'chestcavity:iron_scrap',
			M: 'biomancy:impermeable_membrane',
			X: 'thermal:xp_storage_augment'
		}
	).id('kubejs:shaped/device_xp_condenser')
	event.shaped('2x thermal:device_nullifier', [
    		'BSB',
    		'LFL',
    		'BSB'
		], {
			S: 'chestcavity:iron_scrap',
			B: 'architects_palette:nether_brass_ingot',
			L: 'minecraft:lava_bucket',
			F: 'thermal:machine_frame'
		}
	).id('kubejs:shaped/device_nullifier')

	event.recipes.biomancy.bio_forging(['2x #forge:plates/chitinsteel', '2x #forge:plates/biobrass', 'kubejs:mineral_brick', 'biomancy:impermeable_membrane', 'biomancy:living_flesh'], 'thermal:machine_frame', 'biomancy:components', 25)
})