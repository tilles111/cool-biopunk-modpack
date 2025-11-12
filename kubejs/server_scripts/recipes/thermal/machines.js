//priority: 10
ServerEvents.recipes(event => {
    event.remove({ type: 'thermal:smelter' })
    event.remove({ type: 'thermal:smelter_recycle' })
    event.remove({ type: 'thermal:smelter_catalyst' })
    event.remove({ output: 'architects_palette:sunmetal_blend' })

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

    event.recipes.thermal.smelter([Item.of('kubejs:mineral_brick').withChance(1), Item.of('kubejs:mineral_brick').withChance(0.75)], ['4x biomancy:mineral_fragment', 'chestcavity:raw_organ_meat', '2x biomancy:bone_fragments'])
    event.recipes.thermal.smelter('4x architects_palette:entrails', ['chestcavity:intestine', '2x chestcavity:muscle', 'chestcavity:raw_human_organ_meat'])
    event.recipes.thermal.smelter([Item.of('3x architects_palette:nether_brass_ingot').withChance(1), Item.of('architects_palette:nether_brass_ingot').withChance(0.75), Item.of('2x architects_palette:nether_brass_ingot').withChance(0.5)], ['3x kubejs:copper_scrap', '2x biomancy:elastic_fibers', '2x biomancy:tough_fibers'])
    event.recipes.thermal.smelter([Item.of('2x kubejs:chitinsteel_grit').withChance(1), Item.of('kubejs:chitinsteel_grit').withChance(0.75), Item.of('2x kubejs:chitinsteel_grit').withChance(0.5)], ['3x chestcavity:iron_scrap', 'kubejs:crushed_chitin', '2x biomancy:organic_matter'])
    event.recipes.thermal.smelter(['2x architects_palette:sunmetal_brick', Item.of('minecraft:glass_bottle').withChance(0.5)], ['2x kubejs:chitinsteel_grit', 'kubejs:bottle_of_blood'])
})