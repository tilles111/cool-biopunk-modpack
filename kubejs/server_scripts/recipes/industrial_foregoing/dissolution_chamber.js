ServerEvents.recipes(event => {
    event.remove({ type: 'industrialforegoing:dissolution_chamber' })

    const organs = ['heart', 'lung', 'liver', 'kidney', 'stomach', 'spleen', 'appendix', 'intestine']

    organs.forEach(organ => {
        event.recipes.industrialforegoing.dissolution_chamber([`chestcavity:rotten_${organ}`, 'chestcavity:raw_organ_meat', 'chestcavity:raw_organ_meat'], Fluid.of('industrialforegoing:meat', 500), `chestcavity:animal_${organ}`, 600)
        event.recipes.industrialforegoing.dissolution_chamber([`chestcavity:rotten_${organ}`, 'chestcavity:raw_organ_meat', 'chestcavity:raw_organ_meat'], Fluid.of('kubejs:blood', 100), `chestcavity:small_animal_${organ}`, 400)
        event.recipes.industrialforegoing.dissolution_chamber([`chestcavity:animal_${organ}`, 'chestcavity:raw_human_organ_meat', 'chestcavity:raw_human_organ_meat'], Fluid.of('industrialforegoing:meat', 500), `chestcavity:${organ}`, 900)
        event.recipes.industrialforegoing.dissolution_chamber([`chestcavity:${organ}`, 'chestcavity:raw_alien_organ_meat'], Fluid.of('thermal:ender', 250), `chestcavity:ender_${organ}`, 1200)
        event.recipes.industrialforegoing.dissolution_chamber([`chestcavity:rotten_${organ}`, 'chestcavity:animal_muscle', 'chestcavity:animal_muscle'], Fluid.of('industrialforegoing:meat', 500), `chestcavity:animal_${organ}`, 600)
        event.recipes.industrialforegoing.dissolution_chamber([`chestcavity:rotten_${organ}`, 'chestcavity:small_animal_muscle', 'chestcavity:small_animal_muscle'], Fluid.of('kubejs:blood', 100), `chestcavity:small_animal_${organ}`, 400)
        event.recipes.industrialforegoing.dissolution_chamber([`chestcavity:animal_${organ}`, 'chestcavity:muscle', 'chestcavity:muscle'], Fluid.of('industrialforegoing:meat', 500), `chestcavity:${organ}`, 900)
        event.recipes.industrialforegoing.dissolution_chamber([`chestcavity:${organ}`, 'chestcavity:ender_muscle'], Fluid.of('thermal:ender', 250), `chestcavity:ender_${organ}`, 1200)
    })
    const insect_organs = ['heart', 'lung', 'stomach', 'intestine']
    insect_organs.forEach(organ => {
        event.recipes.industrialforegoing.dissolution_chamber([`chestcavity:rotten_${organ}`, 'chestcavity:raw_toxic_organ_meat', 'chestcavity:raw_toxic_organ_meat'], Fluid.of('industrialforegoing:meat', 500), `chestcavity:insect_${organ}`, 400)
        event.recipes.industrialforegoing.dissolution_chamber([`chestcavity:rotten_${organ}`, 'chestcavity:insect_muscle', 'chestcavity:insect_muscle'], Fluid.of('industrialforegoing:meat', 500), `chestcavity:insect_${organ}`, 400)
    })
    const dragon_organs = ['heart', 'lung', 'liver', 'kidney', 'spleen', 'appendix', 'rib', 'spine']
    dragon_organs.forEach(organ => {
        event.recipes.industrialforegoing.dissolution_chamber([`chestcavity:${organ}`, 'chestcavity:raw_dragon_organ_meat'], Fluid.of('thermal:ender', 250), `chestcavity:dragon_${organ}`, 1800)
        event.recipes.industrialforegoing.dissolution_chamber([`chestcavity:${organ}`, 'biomancy:malignant_flesh', 'biomancy:malignant_flesh', 'biomancy:malignant_flesh', 'biomancy:malignant_flesh'], Fluid.of('thermal:ender', 1000), `chestcavity:dragon_${organ}`, 1800)
    })
    event.recipes.industrialforegoing.dissolution_chamber(['chestcavity:muscle', 'biomancy:malignant_flesh'], Fluid.of('thermal:ender', 125), 'chestcavity:dragon_muscle', 1800)
})