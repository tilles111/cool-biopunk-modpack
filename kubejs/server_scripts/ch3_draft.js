ServerEvents.recipes(event => {
    event.remove({ output: 'architects_palette:sunmetal_blend' })
    event.remove({ output: 'thermal:machine_frame' })
    event.remove({ output: 'thermal:saw_blade' })
    event.remove({ output: 'thermal:machine_sawmill' })
    event.remove({ output: 'thermal:machine_crafter' })
    event.remove({ output: 'thermal:machine_press' })
    event.remove({ output: 'thermal:machine_insolator' })
    event.remove({ output: 'thermal:machine_crucible' })
    event.remove({ output: 'thermal:machine_refinery' })
    event.remove({ output: 'thermal:machine_crystallizer' })
    event.remove({ output: 'thermal:machine_smelter' })

    event.recipes.thermal.furnace('dungeonsdelight:smoked_spider_meat', 'dungeonsdelight:spider_meat')

    event.recipes.thermal.pulverizer('kubejs:crushed_chitin', 'minecraft:netherite_scrap')
    event.recipes.thermal.pulverizer('kubejs:crushed_iron_scrap', 'chestcavity:iron_scrap')
    event.recipes.thermal.pulverizer('kubejs:charcoal_dust', 'minecraft:charcoal')

    event.recipes.thermal.centrifuge(['2x biomancy:bile', Item.of('biomancy:bile').withChance(0.5), Item.of('2x biomancy:flesh_bits').withChance(0.8), Item.of('biomancy:elastic_fibers').withChance(0.75)], 'biomancy:mob_gland')
    event.recipes.thermal.centrifuge([Fluid.of('kubejs:blood', 100)], 'biomancy:flesh_bits')
    event.recipes.thermal.centrifuge(['2x biomancy:flesh_bits', Item.of('biomancy:flesh_bits').withChance(0.75), Item.of('biomancy:nutrient_paste').withChance(0.75), Item.of('biomancy:mob_sinew').withChance(0.85), Fluid.of('kubejs:blood', 250)], '#biomancy:raw_meats')
    event.recipes.thermal.centrifuge(['biomancy:organic_matter', Item.of('biomancy:organic_matter').withChance(0.5), Item.of('biomancy:nutrient_paste').withChance(0.5), Item.of('thermal:compost').withChance(0.33)], '#forge:crops')
    event.recipes.thermal.centrifuge(['biomancy:bone_fragments', Item.of('minecraft:string').withChance(0.75), Item.of('biomancy:nutrient_paste').withChance(0.75), Item.of('minecraft:netherite_scrap').withChance(0.25), Fluid.of('kubejs:blood', 125)], 'dungeonsdelight:smoked_spider_meat')

    event.recipes.thermal.bottler('architects_palette:sunmetal_blend', ['kubejs:chitinsteel_grit', Fluid.of('kubejs:blood', 250)])
    event.recipes.thermal.bottler('kubejs:bottle_of_blood', ['minecraft:glass_bottle', Fluid.of('kubejs:blood', 250)])

    event.recipes.farmersdelight.cooking(
	    [
            'kubejs:crushed_chitin',
            'kubejs:crushed_iron_scrap',
            'kubejs:crushed_iron_scrap',
            '#forge:dusts/charcoal',
            'biomancy:bile',
            'biomancy:organic_matter'
        ],
	    '4x kubejs:chitinsteel_grit',
	    0,
	    600
	).id(`kubejs:cooking_pot/chitinsteel_grit`)

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
    		'SSS'
		], {
			B: 'architects_palette:nether_brass_ingot',
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
    		'BSB',
    		'SFS',
    		'CGC'
		], {
			C: 'architects_palette:sunmetal_brick',
			B: '#forge:plates/biobrass',
			G: '#forge:gears/chitinsteel',
			S: 'biomancy:storage_sac',
			F: 'thermal:machine_frame'
		}
	).id('kubejs:shaped/machine_refinery')

	event.shaped('thermal:machine_crystallizer', [
    		'PCP',
    		'BFB',
    		'PLP'
		], {
			P: '#forge:plates/chitinsteel',
			B: 'kubejs:blood_bucket',
			L: 'biomancy:living_flesh',
			C: 'biomancy:fleshkin_chest',
			F: 'thermal:machine_frame'
		}
	).id('kubejs:shaped/machine_')

	event.shaped('thermal:machine_smelter', [
    		'PGP',
    		'BFB',
    		'CKC'
		], {
			C: 'architects_palette:sunmetal_brick',
			P: '#forge:plates/biobrass',
			G: '#forge:gears/biobrass',
			K: 'thermal:machine_furnace',
			B: 'minecraft:blaze_rod',
			F: 'thermal:machine_frame'
		}
	).id('kubejs:shaped/machine_smelter')
})