ServerEvents.recipes(event => {

    const id_prefix = 'kubejs:shaped/'

    // Reference stand-in
    const tool_types = ['sword', 'pickaxe', 'shovel', 'axe', 'hoe', 'knife']

    const materials = {
        'bone':
        {
            'material': '#kubejs:bone_tool_materials',
            'handle': '#forge:rods/wooden'
        }
        /*
        'improved_bone':
        {
            'material': '#kubejs:bone_tool_materials', // improved bone material??
            'handle': '#kubejs:bones' // TODO: fill tag with bones
        },
        */
       /*
        'biobrass':
        {
            'material': 'architects_palette:nether_brass_ingot',
            'handle': '#kubejs:bones'
        },
        */
       /*
        'chitinsteel':
        {
            'material': 'architects_palette:sunmetal_brick',
            'handle': '#kubejs:bones'
        }
        */
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
    
})