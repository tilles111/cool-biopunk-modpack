ServerEvents.recipes(event => {
	event.remove({ output: 'architects_palette:nether_brass_blend' })
	event.remove({ output: 'dungeonsdelight:monster_pot' })
	event.remove({ output: 'dungeonsdelight:dungeon_stove' })
	event.remove({ output: 'biomancy:primordial_cradle' })
	event.remove({ output: 'thermal:florb' })

    event.recipes.farmersdelight.cooking(
	    [
            'kubejs:copper_scrap',
            'kubejs:copper_scrap',
            'biomancy:tough_fibers',
            'biomancy:tough_fibers',
            'biomancy:elastic_fibers',
            'biomancy:gelling_agent'
        ],
	    '4x architects_palette:nether_brass_blend',
	    0,
	    300
	).id(`kubejs:cooking_pot/biobrass_blend`)

    const bone_tools = ['sword', 'pickaxe', 'shovel', 'axe', 'hoe', 'knife']

    bone_tools.forEach(tool_type => {
        event.recipes.summoningrituals.altar(`kubejs:bone_${tool_type}`)
            .input('2x kubejs:bottle_of_blood', '8x biomancy:flesh_bits', '6x biomancy:elastic_fibers')
            .itemOutput(`kubejs:living_bone_${tool_type}`)
            .itemOutput('2x minecraft:glass_bottle')
    });

    event.recipes.summoningrituals.altar('farmersdelight:cooking_pot')
        .input('5x dungeonsdelight:stained_scrap', '2x biomancy:mob_gland', '4x biomancy:flesh_bits')
        .sacrifice('skeleton')
        .itemOutput('dungeonsdelight:monster_pot')
    
	event.shaped('dungeonsdelight:dungeon_stove', [
    		'SSS',
    		'DBD',
    		'DCD'
		],{
			S: 'dungeonsdelight:stained_scrap',
			D: ['#kubejs:basalt', '#kubejs:deepslate'],
            C: 'minecraft:campfire',
            B: 'biomancy:mob_gland'

	}).id('kubejs:shaped/dungeon_stove')
    
	event.shaped(Item.of('ae2:nether_quartz_cutting_knife', "{Damage:0,RepairCost:0,display:{Name:'{\"text\":\"Scalpel (needs retexture or replacement)\"}'}}"), [
    		'  R',
    		'IR ',
    		'SS '
		],{
			S: 'dungeonsdelight:stained_scrap',
			I: 'chestcavity:iron_scrap',
            R: '#forge:rods/wooden'

	}).id('kubejs:shaped/scalpel')

    event.recipes.farmersdelight.cooking(
	    [
            'biomancy:elastic_fibers',
            'biomancy:elastic_fibers',
            'biomancy:elastic_fibers'
        ],
	    'biomancy:impermeable_membrane',
	    0,
	    300,
        'biomancy:gelling_agent'
	).id(`kubejs:cooking_pot/impermeable_membrane`)

    event.custom({
        type: 'dungeonsdelight:monster_cooking',
        container: {
            item: 'biomancy:gelling_agent'
        },
        ingredients: [
            { item: 'biomancy:elastic_fibers' },
            { item: 'biomancy:elastic_fibers' },
            { item: 'biomancy:elastic_fibers' }
        ],
        cookingtime: 400,
        experience: 0,
        result:{ 
            item: 'biomancy:impermeable_membrane',
            count: 2
        }
    }).id(`kubejs:monster_cooking/impermeable_membrane`)

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