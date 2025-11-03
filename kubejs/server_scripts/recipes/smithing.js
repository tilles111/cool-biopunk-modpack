ServerEvents.recipes(event => {

    // TODO: smithing template or otherwise, muscles are a stand-in for now

    const tool_types = ['sword', 'pickaxe', 'shovel', 'axe', 'hoe', 'knife']

    tool_types.forEach(tool_type => {
       event.smithing(`kubejs:living_bone_${tool_type}`, '#kubejs:muscles/standard', `kubejs:bone_${tool_type}`, 'biomancy:living_flesh')
    });

    

})