ServerEvents.recipes(event => {
    event.remove({ type: 'thermal:crystallizer' })

    const organs = ['heart', 'lung', 'liver', 'kidney', 'stomach', 'spleen', 'appendix', 'intestine']

    organs.forEach(organ => {
        event.recipes.thermal.crystallizer(`chestcavity:animal_${organ}`, [`chestcavity:rotten_${organ}`, '2x chestcavity:raw_organ_meat', Fluid.of('industrialforegoing:meat', 500)])
        event.recipes.thermal.crystallizer(`chestcavity:small_animal_${organ}`, [`chestcavity:rotten_${organ}`, '2x chestcavity:raw_organ_meat', Fluid.of('kubejs:blood', 100)])
        event.recipes.thermal.crystallizer(`chestcavity:insect_${organ}`, [`chestcavity:rotten_${organ}`, '2x chestcavity:raw_toxic_organ_meat', Fluid.of('industrialforegoing:meat', 500)])
        event.recipes.thermal.crystallizer(`chestcavity:${organ}`, [`chestcavity:animal_${organ}`, '2x chestcavity:raw_human_organ_meat', Fluid.of('industrialforegoing:meat', 500)])
        event.recipes.thermal.crystallizer(`chestcavity:ender_${organ}`, [`chestcavity:${organ}`, 'chestcavity:raw_ender_organ_meat', Fluid.of('thermal:ender', 250)])
    })

    event.recipes.thermal.crystallizer('2x architects_palette:entrails', [`2x chestcavity:intestine`, '4x chestcavity:raw_human_organ_meat', Fluid.of('industrialforegoing:meat', 1000)])
})