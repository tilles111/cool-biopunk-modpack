ServerEvents.recipes(event => {
    event.remove({ output: 'architects_palette:sunmetal_blend' })
    event.remove({ output: 'thermal:machine_frame' })

    event.recipes.thermal.pulverizer('kubejs:crushed_chitin', 'minecraft:netherite_scrap')
    event.recipes.thermal.pulverizer('kubejs:crushed_iron_scrap', 'chestcavity:iron_scrap')
    event.recipes.thermal.pulverizer('kubejs:charcoal_dust', 'minecraft:charcoal')

    event.recipes.thermal.centrifuge(['2x biomancy:bile', Item.of('biomancy:bile').withChance(0.5), Item.of('2x biomancy:flesh_bits').withChance(0.8), Item.of('biomancy:elastic_fibers').withChance(0.75)], 'biomancy:mob_gland')
    event.recipes.thermal.centrifuge([Fluid.of('kubejs:blood', 100)], 'biomancy:flesh_bits')
    event.recipes.thermal.centrifuge(['2x biomancy:flesh_bits', Item.of('biomancy:flesh_bits').withChance(0.75), Item.of('biomancy:nutrient_paste').withChance(0.75), Item.of('biomancy:mob_sinew').withChance(0.85), Fluid.of('kubejs:blood', 250)], '#biomancy:raw_meats')
    event.recipes.thermal.centrifuge(['biomancy:organic_matter', Item.of('biomancy:organic_matter').withChance(0.5), Item.of('biomancy:nutrient_paste').withChance(0.5), Item.of('thermal:compost').withChance(0.33)], '#forge:crops')

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
			B: 'architects_palette:nether_brass_ingot',
			G: '#forge:gears/biobrass',
			M: 'biomancy:impermeable_membrane',
			F: 'biomancy:living_flesh'
		}
	).id('kubejs:shaped/machine_frame')
})