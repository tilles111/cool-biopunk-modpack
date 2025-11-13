ServerEvents.recipes(event => {
    event.recipes.summoningrituals.altar("flint")
        .input('2x minecraft:bone_meal')
        .itemOutput('3x biomancy:bone_fragments')

    event.recipes.summoningrituals.altar('minecraft:bone_meal')
        .input('2x farmersdelight:rice_panicle')
        .itemOutput('4x minecraft:sugar_cane')

    event.recipes.summoningrituals.altar('minecraft:bone_meal')
        .input('minecraft:sugar')
        .itemOutput('4x minecraft:sweet_berries')

    event.recipes.summoningrituals.altar('minecraft:bone_meal')
        .input('minecraft:wheat')
        .itemOutput('4x minecraft:wheat_seeds')

    event.recipes.summoningrituals.altar('minecraft:bone_meal')
        .input('minecraft:beetroot')
        .itemOutput('4x minecraft:beetroot_seeds')

    event.recipes.summoningrituals.altar('minecraft:bone_meal')
        .input('farmersdelight:pumpkin_slice')
        .itemOutput('4x minecraft:pumpkin_seeds')

    event.recipes.summoningrituals.altar('minecraft:bone_meal')
        .input('minecraft:pumpkin_seeds')
        .itemOutput('4x minecraft:melon_seeds')

    event.recipes.summoningrituals.altar('minecraft:bone_meal')
        .input('minecraft:string')
        .itemOutput('4x supplementaries:flax_seeds')

    event.recipes.summoningrituals.altar('minecraft:bone_meal')
        .input('#minecraft:leaves')
        .itemOutput('4x farmersdelight:cabbage_seeds')

    event.recipes.summoningrituals.altar('minecraft:bone_meal')
        .input('farmersdelight:tomato')
        .itemOutput('4x farmersdelight:tomato_seeds')

    event.recipes.summoningrituals.altar('minecraft:bone_meal')
        .input('farmersdelight:onion')
        .itemOutput('4x farmersdelight:onion')

    event.recipes.summoningrituals.altar('minecraft:bone_meal')
        .input('minecraft:carrot')
        .itemOutput('4x minecraft:carrot')

    event.recipes.summoningrituals.altar('minecraft:bone_meal')
        .input('minecraft:potato')
        .itemOutput('4x minecraft:potato')

    event.recipes.summoningrituals.altar('minecraft:bone_meal')
        .input('farmersdelight:rice')
        .itemOutput('4x farmersdelight:rice')

    event.recipes.summoningrituals.altar('kubejs:bottle_of_blood')
        .input('2x biomancy:mob_marrow', '4x chestcavity:iron_scrap')
        .sacrifice('zombie')
        .itemOutput('4x dungeonsdelight:stained_scrap')
        .itemOutput('minecraft:glass_bottle')

    event.recipes.summoningrituals.altar('minecraft:bone_meal')
        .input('minecraft:grass')
        .itemOutput('minecraft:cactus')
    
    // event.recipes.summoningrituals.altar('kubejs:bottle_of_blood')
    //     .input('3x biomancy:impermeable_membrane', 'biomancy:mob_gland', '4x biomancy:flesh_bits', '4x biomancy:tough_fibers')
    //     .itemOutput('biomancy:storage_sac')
    //     .itemOutput('minecraft:glass_bottle')
    // event.recipes.summoningrituals.altar('minecraft:bone')
    //     .input('3x biomancy:tough_fibers', '4x biomancy:flesh_bits')
    //     .itemOutput('2x biomancy:flesh_spike')
    // event.recipes.summoningrituals.altar('kubejs:bottle_of_blood')
    //     .input('2x biomancy:tough_fibers', '8x biomancy:flesh_bits', '2x architects_palette:nether_brass_ingot', 'minecraft:chest')
    //     .sacrifice('pig')
    //     .itemOutput('biomancy:fleshkin_chest')
    //     .itemOutput('minecraft:glass_bottle')
    // event.recipes.summoningrituals.altar('kubejs:bottle_of_blood')
    //     .input('chestcavity:iron_scrap', '4x biomancy:elastic_fibers', '8x biomancy:flesh_bits', 'architects_palette:nether_brass_ingot')
    //     .sacrifice('pig')
    //     .itemOutput('2x biomancy:maw_hopper')
    //     .itemOutput('minecraft:glass_bottle')
    // event.recipes.summoningrituals.altar('kubejs:bottle_of_blood')
    //     .input('4x biomancy:elastic_fibers', '6x biomancy:flesh_bits')
    //     .sacrifice('pig')
    //     .itemOutput('biomancy:tongue')
    //     .itemOutput('minecraft:glass_bottle')
});