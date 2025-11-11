ServerEvents.recipes(event => {
	event.remove({ id: 'biomancy:crafting/primordial_cradle' })
	event.remove({ id: 'biomancy:crafting/decomposer' })
	event.remove({ id: 'biomancy:crafting/digester' })
	event.remove({ id: 'biomancy:crafting/bio_forge' })
	event.remove({ id: 'biomancy:bio_forging/decomposer' })
	event.remove({ id: 'biomancy:bio_forging/digester' })
	event.remove({ id: 'biomancy:bio_forging/bio_forge' })

    event.recipes.summoningrituals.altar('biomancy:fleshkin_chest')
        .input('2x kubejs:bottle_of_blood', '4x biomancy:flesh_spike', '6x biomancy:flesh')
        .sacrifice('villager')
        .itemOutput('biomancy:primordial_cradle')
        .itemOutput('2x minecraft:glass_bottle')
    
    event.recipes.thermal.smelter('kubejs:biologic_core', ['2x architects_palette:entrails', 'chestcavity:heart', '1x biomancy:living_flesh'])
    event.recipes.thermal.smelter('biomancy:digester', ['kubejs:biologic_core', '2x architects_palette:entrails', 'chestcavity:stomach'])
    event.recipes.thermal.smelter('biomancy:decomposer', ['kubejs:biologic_core', '4x architects_palette:entrails', '4x biomancy:mob_fang'])

    event.recipes.biomancy.decomposing('chestcavity:iron_scrap', ['6x biomancy:mineral_fragment'])
    event.recipes.biomancy.decomposing('kubejs:copper_scrap', ['8x biomancy:mineral_fragment'])
})