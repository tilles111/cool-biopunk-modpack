ServerEvents.recipes(event => {
    event.recipes.summoningrituals.altar('minecraft:beetroot_soup')
        .input('2x #biomancy:raw_meats', '1x biomancy:bone_fragments')
        .itemOutput('minecraft:bowl')
        .mobOutput('zombie')

    event.recipes.summoningrituals.altar('kubejs:bottle_of_blood')
        .input('2x farmersdelight:cooked_rice', '2x chestcavity:iron_scrap')
        .sacrifice('zombie')
        .mobOutput('zombie_villager')
        .itemOutput('minecraft:glass_bottle')

    event.recipes.summoningrituals.altar('kubejs:bottle_of_blood')
        .input('2x #biomancy:raw_meats', 'minecraft:bone')
        .itemOutput('minecraft:glass_bottle')
        .mobOutput(
            SummoningOutput.mob('zombie')
                .count(2)
        )
    
    event.recipes.summoningrituals.altar('kubejs:bottle_of_blood')
        .input('2x biomancy:bone_fragments', 'minecraft:arrow')
        .itemOutput('minecraft:glass_bottle')
        .mobOutput(
            SummoningOutput.mob('skeleton')
                .count(2)
        )

    event.recipes.summoningrituals.altar('kubejs:bottle_of_blood')
        .input('#minecraft:wool', 'minecraft:bone')
        .itemOutput('minecraft:glass_bottle')
        .mobOutput('spider')

    event.recipes.summoningrituals.altar('kubejs:bottle_of_blood')
        .input('4x #minecraft:leaves', 'minecraft:bone')
        .itemOutput('minecraft:glass_bottle')
        .mobOutput('creeper')

    event.recipes.summoningrituals.altar('kubejs:bottle_of_blood')
        .input('dungeonsdelight:stained_scrap', 'minecraft:egg')
        .itemOutput('minecraft:skeleton_spawn_egg')
        .itemOutput('minecraft:glass_bottle')
        .sacrifice('skeleton')

    event.recipes.summoningrituals.altar('kubejs:bottle_of_blood')
        .input('dungeonsdelight:stained_scrap', 'minecraft:egg')
        .itemOutput('minecraft:zombie_spawn_egg')
        .itemOutput('minecraft:glass_bottle')
        .sacrifice('zombie')

    event.recipes.summoningrituals.altar('kubejs:bottle_of_blood')
        .input('dungeonsdelight:stained_scrap', 'minecraft:egg')
        .itemOutput('minecraft:spider_spawn_egg')
        .itemOutput('minecraft:glass_bottle')
        .sacrifice('spider')

    event.recipes.summoningrituals.altar('kubejs:bottle_of_blood')
        .input('dungeonsdelight:stained_scrap', 'minecraft:egg')
        .itemOutput('minecraft:creeper_spawn_egg')
        .itemOutput('minecraft:glass_bottle')
        .sacrifice('creeper')
})