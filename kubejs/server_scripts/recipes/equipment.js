ServerEvents.recipes(event => {

    const id_prefix = 'kubejs:shaped/'

    event.remove({ output: 'constructionwand:iron_wand' })
    event.remove({ output: 'constructionwand:diamond_wand' })
    event.remove({ output: 'constructionwand:infinity_wand' })
	event.remove({ output: 'minecraft:leather_helmet' })
	event.remove({ output: 'minecraft:leather_chestplate' })
	event.remove({ output: 'minecraft:leather_leggings' })
	event.remove({ output: 'minecraft:leather_boots' })
	event.remove({ output: 'minecraft:iron_helmet' })
	event.remove({ output: 'minecraft:iron_chestplate' })
	event.remove({ output: 'minecraft:iron_leggings' })
	event.remove({ output: 'minecraft:iron_boots' })
	event.remove({ output: 'biomancy:warrior_armor_helmet' })
	event.remove({ output: 'biomancy:warrior_armor_chestplate' })
	event.remove({ output: 'biomancy:warrior_armor_leggings' })
	event.remove({ output: 'biomancy:warrior_armor_boots' })
	event.remove({ output: 'biomancy:acolyte_armor_helmet' })
	event.remove({ output: 'biomancy:acolyte_armor_chestplate' })
	event.remove({ output: 'biomancy:acolyte_armor_leggings' })
	event.remove({ output: 'biomancy:acolyte_armor_boots' })

    const materials = {
        'bone':
        {
            'material': 'biomancy:bone_fragments',
            'handle': '#forge:rods/wooden',
            'construction_wand': 'constructionwand:iron_wand'
        },
        'biobrass':
        {
            'material': 'architects_palette:nether_brass_ingot',
            'handle': 'minecraft:bone',
            'construction_wand': 'constructionwand:diamond_wand'
        },
        'chitinsteel':
        {
            'material': 'architects_palette:sunmetal_brick',
            'handle': 'minecraft:bone',
            'construction_wand': 'constructionwand:infinity_wand'
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

        event.shaped(part['construction_wand'], [
            '  A',
            ' B ',
            'B  '
        ], {
            A: part['material'],
            B: part['handle']
        }).id(`${id_prefix}${material}_construction_wand`)

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

    const tool_types = ['sword', 'pickaxe', 'shovel', 'axe', 'hoe', 'knife']
    const smithing_materials = ['bone', 'biobrass', 'chitinsteel']

    tool_types.forEach(tool_type => {
        event.recipes.summoningrituals.altar(`kubejs:bone_${tool_type}`)
            .input('2x kubejs:bottle_of_blood', '8x biomancy:flesh_bits', '6x biomancy:elastic_fibers')
            .itemOutput(`kubejs:living_bone_${tool_type}`)
            .itemOutput('2x minecraft:glass_bottle')
            .id(`kubejs:altar/living_bone_${tool_type}`)
        event.recipes.thermal.smelter([`kubejs:living_biobrass_${tool_type}`, '2x minecraft:glass_bottle'], [`kubejs:biobrass_${tool_type}`, 'biomancy:living_flesh', '2x kubejs:bottle_of_blood'])
        smithing_materials.forEach(material => {
            event.smithing(`kubejs:living_${material}_${tool_type}`, 'kubejs:living_tool_smithing_template', `kubejs:${material}_${tool_type}`, 'biomancy:living_flesh')
        })
    })

	event.shaped('minecraft:leather_helmet', [
    		'LFL',
    		'F F'
		], {
			L: 'minecraft:leather',
			F: 'biomancy:tough_fibers'
		}
	).id('kubejs:shaped/leather_helmet')
	event.shaped('minecraft:leather_chestplate', [
    		'F F',
    		'LFL',
    		'FFF'
		], {
			L: 'minecraft:leather',
			F: 'biomancy:tough_fibers'
		}
	).id('kubejs:shaped/leather_chestplate')
	event.shaped('minecraft:leather_leggings', [
    		'FFF',
    		'L L',
    		'F F'
		], {
			L: 'minecraft:leather',
			F: 'biomancy:tough_fibers'
		}
	).id('kubejs:shaped/leather_leggings')
	event.shaped('minecraft:leather_boots', [
    		'F F',
    		'L L'
		], {
			L: 'minecraft:leather',
			F: 'biomancy:tough_fibers'
		}
	).id('kubejs:shaped/leather_boots')

    const armor_pieces = ['helmet', 'chestplate', 'leggings', 'boots']

    armor_pieces.forEach(armor => {
        event.smithing(`minecraft:iron_${armor}`,'chestcavity:iron_scrap', `minecraft:leather_${armor}`, 'chestcavity:iron_scrap')
        event.recipes.thermal.smelter(`biomancy:acolyte_armor_${armor}`, [`minecraft:iron_${armor}`, 'biomancy:living_flesh', '2x #forge:plates/biobrass'])
        event.recipes.thermal.smelter(`biomancy:warrior_armor_${armor}`, [`minecraft:iron_${armor}`, 'biomancy:living_flesh', '2x #forge:plates/chitinsteel'])
    })
})