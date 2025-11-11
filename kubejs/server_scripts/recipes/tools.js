ServerEvents.recipes(event => {

    const id_prefix = 'kubejs:shaped/'

    const materials = {
        'bone':
        {
            'material': 'biomancy:bone_fragments',
            'handle': '#forge:rods/wooden'
        },
        'biobrass':
        {
            'material': 'architects_palette:nether_brass_ingot',
            'handle': 'minecraft:bone'
        },
        'chitinsteel':
        {
            'material': 'architects_palette:sunmetal_brick',
            'handle': 'minecraft:bone'
        }
    }



    for (var [material, part] of Object.entries(materials)) {

        event.shaped(`kubejs:${material}_sword`, [
            'A',
            'A',
            'B'
        ], {
            A: part['material'],
            B: part['handle']
        }).id(`${id_prefix}${material}_sword`)

        event.shaped(`kubejs:${material}_pickaxe`, [
            'AAA',
            ' B ',
            ' B '
        ], {
            A: part['material'],
            B: part['handle']
        }).id(`${id_prefix}${material}_pickaxe`)

        event.shaped(`kubejs:${material}_shovel`, [
            'A',
            'B',
            'B'
        ], {
            A: part['material'],
            B: part['handle']
        }).id(`${id_prefix}${material}_shovel`)

        event.shaped(`kubejs:${material}_axe`, [
            'AA',
            'AB',
            ' B'
        ], {
            A: part['material'],
            B: part['handle']
        }).id(`${id_prefix}${material}_axe`)

        event.shaped(`kubejs:${material}_hoe`, [
            'AA',
            ' B',
            ' B'
        ], {
            A: part['material'],
            B: part['handle']
        }).id(`${id_prefix}${material}_hoe`)

        event.shaped(`kubejs:${material}_knife`, [
            'A',
            'B'
        ], {
            A: part['material'],
            B: part['handle']
        }).id(`${id_prefix}${material}_knife`)

    }
    
	event.shaped('kubejs:bone_shears', [
    		' B ',
    		'S B',
    		' S '
		],{
            B: 'biomancy:bone_fragments',
            S: '#forge:rods/wooden'
        }).id('kubejs:shaped/bone_shears')

	event.shaped('kubejs:bone_hammer',[
    		' B ',
    		' SB',
    		'S  '
		],{
            B: 'minecraft:bone_block',
            S: '#forge:rods/wooden'
        }).id('kubejs:shaped/bone_hammer')

    event.shaped('kubejs:stained_scalpel', [
    		'  B',
    		' B ',
    		'SS '
		],{
			S: 'dungeonsdelight:stained_scrap',
            B: 'minecraft:bone'

	}).id('kubejs:shaped/nether_quartz_cutting_knife')

    const living_tools = ['sword', 'pickaxe', 'shovel', 'axe', 'hoe', 'knife']

    living_tools.forEach(tool_type => {
        event.recipes.summoningrituals.altar(`kubejs:bone_${tool_type}`)
            .input('2x kubejs:bottle_of_blood', '8x biomancy:flesh_bits', '6x biomancy:elastic_fibers')
            .itemOutput(`kubejs:living_bone_${tool_type}`)
            .itemOutput('2x minecraft:glass_bottle')
            .id(`kubejs:altar/living_bone_${tool_type}`)
        event.recipes.thermal.smelter([`kubejs:living_biobrass_${tool_type}`, '2x minecraft:glass_bottle'], [`kubejs:biobrass_${tool_type}`, 'biomancy:living_flesh', '2x kubejs:bottle_of_blood'])
    })
})