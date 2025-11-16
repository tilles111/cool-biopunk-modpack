ServerEvents.recipes(event => {
	event.remove({ id: 'biomancy:crafting/primordial_cradle' })
	event.remove({ id: 'biomancy:crafting/decomposer' })
	event.remove({ id: 'biomancy:crafting/digester' })
	event.remove({ id: 'biomancy:crafting/bio_forge' })
	event.remove({ id: 'biomancy:bio_forging/decomposer' })
	event.remove({ id: 'biomancy:bio_forging/digester' })
	event.remove({ id: 'biomancy:bio_forging/bio_forge' })
	event.remove({ id: 'biomancy:bio_forging/bio_lab' })

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

    event.recipes.biomancy.bio_forging(['4x industrialforegoing:pink_slime_ingot', '2x architects_palette:entrails', 'kubejs:biological_core', 'chestcavity:ender_liver', 'biomancy:creator_mix'], 'biomancy:bio_lab', 'biomancy:machines', 150)
    event.recipes.biomancy.bio_forging(['4x #forge:plates/chitinsteel', '2x architects_palette:entrails', '4x kubejs:mineral_brick', 'chestcavity:heart', 'biomancy:living_flesh'], 'kubejs:living_tool_smithing_template', 'biomancy:tools', 75)

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