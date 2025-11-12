ServerEvents.recipes(event => {
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
        .itemOutput('minecraft:glass_bottle')
        .itemOutput('minecraft:bee_nest')
        .mobOutput(
            SummoningOutput.mob('bee')
                .count(3)
        )

    event.recipes.summoningrituals.altar(Item.of('minecraft:potion', '{Potion:"minecraft:water"}'))
        .input('2x biomancy:bone_fragments', '2x thermal:aquachow', '#forge:dyes/white')
        .itemOutput('minecraft:glass_bottle')
        .mobOutput(
            SummoningOutput.mob('cod')
                .count(3)
        )

    event.recipes.summoningrituals.altar(Item.of('minecraft:potion', '{Potion:"minecraft:water"}'))
        .input('2x biomancy:bone_fragments', '2x thermal:aquachow', '#forge:dyes/red')
        .itemOutput('minecraft:glass_bottle')
        .mobOutput(
            SummoningOutput.mob('salmon')
                .count(3)
        )
})