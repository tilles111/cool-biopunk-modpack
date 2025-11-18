ServerEvents.recipes(event => {
    event.recipes.summoningrituals.altar('biomancy:fleshkin_chest')
        .input('2x kubejs:bottle_of_blood', '4x biomancy:flesh_spike', '6x biomancy:flesh')
        .sacrifice('villager')
        .itemOutput('biomancy:primordial_cradle')
        .itemOutput('2x minecraft:glass_bottle')
    
    event.recipes.thermal.smelter('kubejs:biological_core', ['2x architects_palette:entrails', 'chestcavity:heart', '1x biomancy:living_flesh'])
    event.recipes.thermal.smelter('biomancy:digester', ['kubejs:biological_core', '2x architects_palette:entrails', 'chestcavity:stomach'])
    event.recipes.thermal.smelter('biomancy:decomposer', ['kubejs:biological_core', '4x architects_palette:entrails', '4x biomancy:mob_fang'])

    event.recipes.biomancy.decomposing('chestcavity:iron_scrap', ['8x biomancy:mineral_fragment'])
    event.recipes.biomancy.decomposing('kubejs:copper_scrap', ['8x biomancy:mineral_fragment'])
    event.recipes.biomancy.decomposing('biomancy:acid_bucket', ['4x biomancy:acid_extract', 'minecraft:bucket'])

    event.recipes.industrialforegoing.dissolution_chamber([
            'biomancy:impermeable_membrane',
            'kubejs:biological_core',
            'biomancy:impermeable_membrane',
            'architects_palette:entrails',
            'architects_palette:entrails',
            'kubejs:mineral_brick',
            'kubejs:mineral_brick',
            'kubejs:mineral_brick'
        ], 
        Fluid.of('industrialforegoing:meat', 1000), 
        'biomancy:bio_forge', 
        400
    )
    event.recipes.industrialforegoing.dissolution_chamber([
            'biomancy:gelling_agent',
            'biomancy:gelling_agent',
            'biomancy:gelling_agent',
            'biomancy:gelling_agent',
            'biomancy:mineral_fragment',
            'biomancy:mineral_fragment',
            'biomancy:mineral_fragment',
            'biomancy:mineral_fragment'
        ], 
        Fluid.of('industrialforegoing:pink_slime', 500), 
        '2x industrialforegoing:pink_slime_ingot', 
        200
    )
})