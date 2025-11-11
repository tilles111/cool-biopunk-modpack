ServerEvents.recipes(event => {
	event.remove({ output: /thermal:.*augment.*/ })

	event.shaped('thermal:upgrade_augment_1', [
    		'IMI',
			'BFB',
			'ISI'
		], {
			I: 'architects_palette:nether_brass_ingot',
			B: 'kubejs:bottle_of_blood',
			F: 'biomancy:living_flesh',
			M: 'biomancy:impermeable_membrane',
			S: 'biomancy:storage_sac'
		}
	).id('kubejs:shaped/upgrade_augment_1')
	event.shaped('thermal:rf_coil_augment', [
    		' S ',
			'PNP',
			' S '
		], {
			P: '#forge:plates/chitinsteel',
			N: 'biomancy:nutrient_bar',
			S: 'biomancy:storage_sac'
		}
	).id('kubejs:shaped/rf_coil_augment')
	event.shaped('thermal:fluid_tank_augment', [
    		'FSF',
			'SIS',
    		'FSF'
		], {
			I: 'architects_palette:nether_brass_ingot',
			F: 'thermal:florb',
			S: 'biomancy:storage_sac'
		}
	).id('kubejs:shaped/fluid_tank_augment')
	event.shaped('thermal:machine_efficiency_augment', [
    		' N ',
			'IAI',
			' N '
		], {
			I: 'architects_palette:nether_brass_ingot',
			N: 'biomancy:nutrient_paste',
			A: 'biomancy:acid_extract'
		}
	).id('kubejs:shaped/machine_efficiency_augment')
	event.shaped('4x thermal:item_filter_augment', [
    		' P ',
			'PSP',
			' P '
		], {
			S: 'chestcavity:iron_scrap',
			P: 'minecraft:paper'
		}
	).id('kubejs:shaped/item_filter_augment')
	event.shaped('4x thermal:fluid_filter_augment', [
    		' P ',
			'PSP',
			' P '
		], {
			S: 'kubejs:copper_scrap',
			P: 'minecraft:paper'
		}
	).id('kubejs:shaped/fluid_filter_augment')

    event.recipes.thermal.smelter(['thermal:upgrade_augment_1'], ['chestcavity:rotten_heart', '2x architects_palette:nether_brass_ingot', 'biomancy:storage_sac'])
    event.recipes.thermal.smelter(['thermal:upgrade_augment_2'], ['thermal:upgrade_augment_1', 'chestcavity:heart', '4x architects_palette:sunmetal_brick'])
    event.recipes.thermal.smelter(['thermal:upgrade_augment_3'], ['thermal:upgrade_augment_2', 'chestcavity:ender_heart', '4x industrialforegoing:pink_slime_ingot'])
    event.recipes.thermal.smelter(['thermal:rf_coil_augment'], ['biomancy:storage_sac','2x #forge:plates/chitinsteel', '4x biomancy:nutrient_paste'])
    event.recipes.thermal.smelter(['thermal:fluid_tank_augment'], ['biomancy:storage_sac', '2x architects_palette:nether_brass_ingot', '4x thermal:florb'])
    event.recipes.thermal.smelter(['thermal:rf_coil_storage_augment'], ['thermal:rf_coil_augment', 'biomancy:storage_sac'])
    event.recipes.thermal.smelter(['thermal:rf_coil_xfer_augment'], ['thermal:rf_coil_augment', 'biomancy:nutrient_bar'])
    event.recipes.thermal.smelter(['2x thermal:machine_efficiency_augment'], ['2x #forge:plates/biobrass', 'biomancy:nutrient_paste', 'biomancy:acid_extract'])
    event.recipes.thermal.smelter(['thermal:machine_speed_augment'], ['chestcavity:animal_heart', '2x #forge:plates/biobrass', 'biomancy:acid_extract'])
    event.recipes.thermal.smelter(['thermal:machine_output_augment'], ['chestcavity:animal_kidney', '2x #forge:plates/chitinsteel', '4x biomancy:mob_gland'])
    event.recipes.thermal.smelter(['thermal:machine_catalyst_augment'], ['chestcavity:animal_kidney', '2x #forge:plates/biobrass', 'biomancy:acid_extract'])
    event.recipes.thermal.smelter(['thermal:area_radius_augment'], ['2x chestcavity:rib', '#forge:plates/biobrass', '2x biomancy:flesh_bits'])
    event.recipes.thermal.smelter(['thermal:dynamo_output_augment'], ['chestcavity:animal_stomach', '2x #forge:plates/chitinsteel', 'biomancy:acid_extract'])
    event.recipes.thermal.smelter(['thermal:dynamo_fuel_augment'], ['chestcavity:animal_intestine', '2x #forge:plates/biobrass', 'biomancy:acid_extract'])
    event.recipes.thermal.smelter(['2x thermal:xp_storage_augment'], ['minecraft:glass_bottle', 'architects_palette:sunmetal_brick', '#forge:gears/biobrass'])
    event.recipes.thermal.smelter(['2x thermal:dynamo_throttle_augment'], ['chestcavity:animal_liver', 'architects_palette:sunmetal_brick', '#forge:gears/biobrass'])
    event.recipes.thermal.smelter(['2x thermal:machine_cycle_augment'], ['biomancy:maw_hopper', 'architects_palette:sunmetal_brick', '#forge:gears/biobrass'])
    event.recipes.thermal.smelter(['2x thermal:machine_null_augment'], ['minecraft:cactus', 'architects_palette:sunmetal_brick', '#forge:gears/biobrass'])
})