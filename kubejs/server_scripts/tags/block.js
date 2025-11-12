ServerEvents.tags('block', event => {

    event.add('minecraft:mineable/hoe', [
        'architects_palette:entrails'
    ])

    event.add('forge:mineable/knife', [
        '#minecraft:mineable/hoe'
    ])

})