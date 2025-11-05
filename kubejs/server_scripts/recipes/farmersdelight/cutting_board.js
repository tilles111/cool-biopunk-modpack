ServerEvents.recipes(event => {

    const id_prefix = 'kubejs:cutting_board/'

    event.recipes.farmersdelight.cutting(
        ['biomancy:mob_sinew'],
        '#forge:tools/knives',
        [
            Item.of('3x biomancy:elastic_fibers').withChance(0.3)
        ]
    ).id(`${id_prefix}elastic_fibers_knife`)

    event.recipes.farmersdelight.cutting(
        ['biomancy:mob_sinew'],
        '#kubejs:tools/scalpels',
        [
            Item.of('4x biomancy:elastic_fibers').withChance(0.4)
        ],
        'minecraft:entity.sheep.shear'
    ).id(`${id_prefix}elastic_fibers_scalpel`)

})