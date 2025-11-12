ServerEvents.recipes(event => {
    event.remove({ type: 'industrialforegoing:dissolution_chamber' })

    const organs = ['heart', 'lung', 'liver', 'kidney', 'stomach', 'spleen', 'appendix', 'intestine', 'muscle']

    organs.forEach(organ => {
        event.recipes.industrialforegoing.dissolution_chamber([`chestcavity:rotten_${organ}`, 'chestcavity:raw_organ_meat', 'chestcavity:raw_organ_meat'], Fluid.of('industrialforegoing:meat', 500), `chestcavity:animal_${organ}`, 600)
        event.recipes.industrialforegoing.dissolution_chamber([`chestcavity:rotten_${organ}`, 'chestcavity:raw_organ_meat', 'chestcavity:raw_organ_meat'], Fluid.of('kubejs:blood', 100), `chestcavity:small_animal_${organ}`, 400)
        event.recipes.industrialforegoing.dissolution_chamber([`chestcavity:animal_${organ}`, 'chestcavity:raw_human_organ_meat', 'chestcavity:raw_human_organ_meat'], Fluid.of('industrialforegoing:meat', 500), `chestcavity:${organ}`, 900)
        event.recipes.industrialforegoing.dissolution_chamber([`chestcavity:${organ}`, 'chestcavity:raw_alien_organ_meat'], Fluid.of('thermal:ender', 250), `chestcavity:ender_${organ}`, 1200)
    })
    const insect_organs = ['heart', 'lung', 'stomach', 'intestine', 'muscle']
    insect_organs.forEach(organ => {
        event.recipes.industrialforegoing.dissolution_chamber([`chestcavity:rotten_${organ}`, 'chestcavity:raw_toxic_organ_meat', 'chestcavity:raw_toxic_organ_meat'], Fluid.of('industrialforegoing:meat', 500), `chestcavity:insect_${organ}`, 400)
    })
})