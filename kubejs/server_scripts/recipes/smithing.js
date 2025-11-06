ServerEvents.recipes(event => {

    const tool_types = ['sword', 'pickaxe', 'shovel', 'axe', 'hoe', 'knife']
    const materials = ['biobrass', 'chitinsteel']

    tool_types.forEach(tool_type => {
        materials.forEach(material => {
            event.smithing(`kubejs:living_${material}_${tool_type}`, 'kubejs:living_tool_smithing_template', `kubejs:${material}_${tool_type}`, 'biomancy:living_flesh')
        })
    });

    

})