ServerEvents.recipes(event => {
    
	event.remove({ id: 'biomancy:crafting/primordial_cradle' })
	event.remove({ id: 'thermal:florb_8' })

    event.recipes.summoningrituals.altar('biomancy:impermeable_membrane')
        .input('biomancy:mob_gland', '4x biomancy:elastic_fibers')
        .itemOutput('4x thermal:florb')
    event.recipes.summoningrituals.altar('kubejs:bottle_of_blood')
        .input('3x biomancy:impermeable_membrane', 'biomancy:mob_gland', '4x biomancy:flesh_bits', '4x biomancy:tough_fibers')
        .itemOutput('biomancy:storage_sac')
        .itemOutput('minecraft:glass_bottle')
    event.recipes.summoningrituals.altar('minecraft:bone')
        .input('3x biomancy:tough_fibers', '4x biomancy:flesh_bits')
        .itemOutput('2x biomancy:flesh_spike')
    event.recipes.summoningrituals.altar('kubejs:bottle_of_blood')
        .input('2x biomancy:tough_fibers', '8x biomancy:flesh_bits', '2x architects_palette:nether_brass_ingot', 'minecraft:chest')
        .sacrifice('pig')
        .itemOutput('biomancy:fleshkin_chest')
        .itemOutput('minecraft:glass_bottle')
    event.recipes.summoningrituals.altar('kubejs:bottle_of_blood')
        .input('chestcavity:iron_scrap', '4x biomancy:elastic_fibers', '8x biomancy:flesh_bits', 'architects_palette:nether_brass_ingot')
        .sacrifice('pig')
        .itemOutput('2x biomancy:maw_hopper')
        .itemOutput('minecraft:glass_bottle')
    event.recipes.summoningrituals.altar('kubejs:bottle_of_blood')
        .input('4x biomancy:elastic_fibers', '6x biomancy:flesh_bits')
        .sacrifice('pig')
        .itemOutput('biomancy:tongue')
        .itemOutput('minecraft:glass_bottle')

    event.custom({
        type: 'dungeonsdelight:monster_cooking',
        ingredients: [
            { item: 'biomancy:impermeable_membrane' },
            { item: 'biomancy:mob_gland' },
            { item: 'biomancy:elastic_fibers' },
            { item: 'biomancy:elastic_fibers' }
        ],
        cookingtime: 200,
        experience: 0,
        result:{ 
            item: 'thermal:florb',
            count: 4
        }
    }).id(`kubejs:monster_cooking/florb`)
    event.custom({
        type: 'dungeonsdelight:monster_cooking',
        ingredients: [
            { item: 'biomancy:impermeable_membrane' },
            { item: 'biomancy:impermeable_membrane' },
            { item: 'biomancy:flesh_bits' },
            { item: 'biomancy:flesh_bits' },
            { item: 'biomancy:tough_fibers' },
            { item: 'biomancy:tough_fibers' }
        ],
        cookingtime: 300,
        experience: 0,
        result:{ 
            item: 'biomancy:storage_sac'
        }
    }).id(`kubejs:monster_cooking/storage_sac`)
    event.custom({
        type: 'dungeonsdelight:monster_cooking',
        ingredients: [
            { item: 'biomancy:bone_fragments' },
            { item: 'biomancy:flesh_bits' },
            { item: 'biomancy:flesh_bits' },
            { item: 'biomancy:tough_fibers' }
        ],
        cookingtime: 100,
        experience: 0,
        result:{ 
            item: 'biomancy:flesh_spike'
        }
    }).id(`kubejs:monster_cooking/flesh_spike`)
    event.custom({
        type: 'dungeonsdelight:monster_cooking',
        container: {
            item: 'minecraft:chest'
        },
        ingredients: [
            { item: 'architects_palette:nether_brass_ingot' },
            { item: 'architects_palette:nether_brass_ingot' },
            { item: 'biomancy:tough_fibers' },
            { item: 'biomancy:flesh_bits' },
            { item: 'biomancy:flesh_bits' },
            { item: 'biomancy:flesh_bits' }
        ],
        cookingtime: 400,
        experience: 0,
        result:{ 
            item: 'biomancy:fleshkin_chest'
        }
    }).id(`kubejs:monster_cooking/fleshkin_chest`)
    event.custom({
        type: 'dungeonsdelight:monster_cooking',
        ingredients: [
            { item: 'architects_palette:nether_brass_ingot' }, 
            { item: 'biomancy:flesh_bits' },
            { item: 'biomancy:flesh_bits' },
            { item: 'biomancy:flesh_bits' },
            { item: 'biomancy:elastic_fibers' },
            { item: 'biomancy:elastic_fibers' }
        ],
        cookingtime: 200,
        experience: 0,
        result:{ 
            item: 'biomancy:maw_hopper',
            count: 2
        }
    }).id(`kubejs:monster_cooking/maw_hopper`)
    event.custom({
        type: 'dungeonsdelight:monster_cooking',
        ingredients: [
            { item: 'biomancy:elastic_fibers' },
            { item: 'biomancy:elastic_fibers' },
            { item: 'biomancy:flesh_bits' },
            { item: 'biomancy:flesh_bits' },
            { item: 'biomancy:flesh_bits' },
            { item: 'biomancy:flesh_bits' }
        ],
        cookingtime: 100,
        experience: 0,
        result:{ 
            item: 'biomancy:tongue'
        }
    }).id(`kubejs:monster_cooking/tongue`)

    event.recipes.summoningrituals.altar('minecraft:spawner')
        .input('8x kubejs:bottle_of_blood', '16x biomancy:flesh_bits', '4x biomancy:mob_gland', '8x biomancy:elastic_fibers', '8x biomancy:flesh_spike', '4x architects_palette:nether_brass_ingot')
        .sacrifice('villager')
        .itemOutput('biomancy:primordial_cradle')
        .itemOutput('8x minecraft:glass_bottle')
})