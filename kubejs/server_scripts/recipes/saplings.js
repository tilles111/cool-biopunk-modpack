ServerEvents.recipes(event => {

    const id_prefix = 'kubejs:altar/'

    const sapling_recipe = (output, input, outputmod) => {
        event.recipes.summoningrituals.altar('#minecraft:saplings')
            .input(input)
            .itemOutput(`${outputmod}:${output}`)
            .recipeTime(5)
            .id(`${id_prefix}${output}`)
    }

    sapling_recipe('oak_sapling', '#kubejs:flowers/forest', 'minecraft') // get??
    sapling_recipe('spruce_sapling', 'minecraft:fern', 'minecraft') // get
    sapling_recipe('birch_sapling', 'minecraft:grass', 'minecraft')
    sapling_recipe('jungle_sapling', 'minecraft:bamboo', 'minecraft') // get
    sapling_recipe('acacia_sapling', 'minecraft:dead_bush', 'minecraft') // get
    sapling_recipe('dark_oak_sapling', '#forge:mushrooms', 'minecraft') // get
    sapling_recipe('mangrove_propagule', '#kubejs:plants/swamp', 'minecraft') //get
    sapling_recipe('cherry_sapling', 'minecraft:pink_petals', 'minecraft') // get
    sapling_recipe('azalea', '#kubejs:plants/dripleaf', 'minecraft') // get
    sapling_recipe('ancient_sapling', 'minecraft:torchflower', 'quark') // get??? probably
    sapling_recipe('twisted_sapling', 'quark:chorus_twist', 'architects_palette') // probably change this later lol
    sapling_recipe('rubberwood_sapling', 'farmersdelight:rotten_tomato', 'thermal') // i just gave up lmao

    sapling_recipe('blue_blossom_sapling', '#forge:dyes/light_blue', 'quark')
    sapling_recipe('lavender_blossom_sapling', '#forge:dyes/magenta', 'quark')
    sapling_recipe('orange_blossom_sapling', '#forge:dyes/orange', 'quark')
    sapling_recipe('yellow_blossom_sapling', '#forge:dyes/yellow', 'quark')
    sapling_recipe('red_blossom_sapling', '#forge:dyes/red', 'quark')

    event.shapeless('minecraft:flowering_azalea', [
        ['twigs:azalea_flowers', 'architects_palette:twisted_leaves'],
        'minecraft:azalea'
    ]).id('kubejs:shapeless/flowering_azalea')

})