ServerEvents.recipes(event => {
    event.recipes.summoningrituals.altar("flint")
        .input('2x minecraft:bone_meal')
        .itemOutput('3x biomancy:bone_fragments')

    event.recipes.summoningrituals.altar('minecraft:bone_meal')
        .input('2x farmersdelight:rice_panicle')
        .itemOutput('4x minecraft:sugar_cane')

    event.recipes.summoningrituals.altar('minecraft:bone_meal')
        .input('minecraft:beetroot', 'minecraft:sugar')
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
        .input('farmersdelight:carrot')
        .itemOutput('4x minecraft:carrot')

    event.recipes.summoningrituals.altar('minecraft:bone_meal')
        .input('farmersdelight:potato')
        .itemOutput('4x minecraft:potato')

    event.recipes.summoningrituals.altar('minecraft:bone_meal')
        .input('farmersdelight:rice')
        .itemOutput('4x farmersdelight:rice')

    event.recipes.summoningrituals.altar('minecraft:beetroot_soup')
        .input('2x biomancy:bone_fragments', '4x #forge:seeds')
        .itemOutput('minecraft:bowl')
        .mobOutput('chicken')

    event.recipes.summoningrituals.altar('minecraft:beetroot_soup')
        .input('2x biomancy:bone_fragments', '4x #forge:vegetables')
        .itemOutput('minecraft:bowl')
        .mobOutput('pig')

    event.recipes.summoningrituals.altar('minecraft:beetroot_soup')
        .input('2x biomancy:bone_fragments', '4x minecraft:wheat')
        .itemOutput('minecraft:bowl')
        .mobOutput('sheep')

    event.recipes.summoningrituals.altar('minecraft:beetroot_soup')
        .input('2x biomancy:bone_fragments', 'minecraft:red_mushroom')
        .itemOutput('minecraft:bowl')
        .mobOutput('mooshroom')

    event.recipes.summoningrituals.altar('minecraft:beetroot_soup')
        .input('2x biomancy:bone_fragments', 'minecraft:brown_mushroom')
        .itemOutput('minecraft:bowl')
        .mobOutput(
            SummoningOutput.mob('mooshroom')
                .data({ Type: 'brown' })
        )

    event.recipes.summoningrituals.altar('farmersdelight:apple_cider')
        .input('2x biomancy:bone_fragments', '4x minecraft:sugar')
        .itemOutput('minecraft:bowl')
        .itemOutput('minecraft:bee_nest')
        .mobOutput(
            SummoningOutput.mob('bee')
                .count(3)
        )

    event.recipes.summoningrituals.altar('minecraft:beetroot_soup')
        .input('2x biomancy:mob_marrow', '4x chestcavity:iron_scrap')
        .sacrifice('zombie')
        .itemOutput('4x dungeonsdelight:stained_scrap')

    event.recipes.summoningrituals.altar('minecraft:beetroot_soup')
        .input('2x biomancy:bone_fragments', 'minecraft:arrow')
        .itemOutput('minecraft:bowl')
        .mobOutput('skeleton')

    event.recipes.summoningrituals.altar('minecraft:beetroot_soup')
        .input('2x #biomancy:raw_meats', 'minecraft:bone')
        .itemOutput('minecraft:bowl')
        .mobOutput('zombie')

    event.recipes.summoningrituals.altar('minecraft:beetroot_soup')
        .input('#minecraft:wool', 'minecraft:bone')
        .itemOutput('minecraft:bowl')
        .mobOutput('spider')

    event.recipes.summoningrituals.altar('farmersdelight:cabbage')
        .input('4x #minecraft:leaves', 'minecraft:bone')
        .itemOutput('minecraft:bowl')
        .mobOutput('creeper')

    event.recipes.summoningrituals.altar('minecraft:egg')
        .input('dungeonsdelight:stained_scrap')
        .itemOutput('minecraft:skeleton_spawn_egg')
        .sacrifice('skeleton')

    event.recipes.summoningrituals.altar('minecraft:egg')
        .input('dungeonsdelight:stained_scrap')
        .itemOutput('minecraft:zombie_spawn_egg')
        .sacrifice('zombie')

    event.recipes.summoningrituals.altar('minecraft:egg')
        .input('dungeonsdelight:stained_scrap')
        .itemOutput('minecraft:spider_spawn_egg')
        .sacrifice('spider')

    event.recipes.summoningrituals.altar('minecraft:egg')
        .input('dungeonsdelight:stained_scrap')
        .itemOutput('minecraft:creeper_spawn_egg')
        .sacrifice('creeper')
});