ServerEvents.recipes(event => {

    // Range
    for (var i = 0; i < 12; i++) {

        var flesh = i + 2
        var blocks = Math.floor(flesh / 4)
        var bits = flesh % 4

        var input_array = [
            'biomancy:bone_fragments'
        ]
        if (blocks > 0) {
            for (var j = 0; j < blocks; j++) {
                input_array.push('biomancy:flesh')
            }
        }
        if (bits > 0) {
            for (var j = 0; j < bits; j++) {
                input_array.push('biomancy:flesh_bits')
            }
        }
        var fluid_input = Fluid.of('kubejs:blood', 250 * flesh)
        var output = Item.of(`industrialforegoing:range_addon${i}`, `{TitaniumAugment:{Range:${i}.0f}}`)
        var processing_time = flesh * 25

        event.recipes.industrialforegoing.dissolution_chamber(input_array, fluid_input, output, processing_time).id(`kubejs:dissolution_chamber/range_addon${i}`)

    }

    // Processing, Efficiency, Speed

    event.recipes.industrialforegoing.dissolution_chamber([
        'kubejs:biological_core',
        'chestcavity:animal_muscle',
        'chestcavity:animal_muscle'
    ], Fluid.of('industrialforegoing:meat', 500),
        Item.of('industrialforegoing:speed_addon_1', '{TitaniumAugment:{Speed:2.0f}}'), 400).id('kubejs:dissolution_chamber/speed_addon_1')

    event.recipes.industrialforegoing.dissolution_chamber([
        'kubejs:biological_core',
        'chestcavity:muscle',
        'chestcavity:muscle'
    ], Fluid.of('kubejs:organ_slurry', 500),
        Item.of('industrialforegoing:speed_addon_2', '{TitaniumAugment:{Speed:3.0f}}'), 400).id('kubejs:dissolution_chamber/speed_addon_2')

    event.recipes.industrialforegoing.dissolution_chamber([
        'kubejs:biological_core',
        'chestcavity:raw_organ_meat',
        'chestcavity:raw_organ_meat'
    ], Fluid.of('industrialforegoing:meat', 500),
        Item.of('industrialforegoing:efficiency_addon_1', '{TitaniumAugment:{Efficiency:0.9f}}'), 400).id('kubejs:dissolution_chamber/efficiency_addon_1')

    event.recipes.industrialforegoing.dissolution_chamber([
        'kubejs:biological_core',
        'chestcavity:raw_human_organ_meat',
        'chestcavity:raw_human_organ_meat'
    ], Fluid.of('kubejs:organ_slurry', 500),
        Item.of('industrialforegoing:efficiency_addon_2', '{TitaniumAugment:{Efficiency:0.8f}}'), 400).id('kubejs:dissolution_chamber/efficiency_addon_2')

    event.recipes.industrialforegoing.dissolution_chamber([
        'kubejs:biological_core',
        'chestcavity:animal_heart',
        'chestcavity:animal_heart'
    ], Fluid.of('industrialforegoing:meat', 500),
        Item.of('industrialforegoing:processing_addon_1', '{TitaniumAugment:{Processing:2.0f}}'), 400).id('kubejs:dissolution_chamber/processing_addon_1')

    event.recipes.industrialforegoing.dissolution_chamber([
        'kubejs:biological_core',
        'chestcavity:heart',
        'chestcavity:heart'
    ], Fluid.of('kubejs:organ_slurry', 500),
        Item.of('industrialforegoing:processing_addon_2', '{TitaniumAugment:{Processing:3.0f}}'), 400).id('kubejs:dissolution_chamber/processing_addon_2')

    

})