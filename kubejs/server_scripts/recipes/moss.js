ServerEvents.recipes(event => {

    // this can probably go into a misc file lol
    event.remove({id: 'quark:building/smelting/moss_paste'})

    event.shapeless('quark:moss_paste', ['minecraft:moss_block']).id('kubejs:shapeless/moss_paste_from_moss_block')
    event.shapeless('minecraft:moss_block', ['quark:moss_paste']).id('kubejs:shapeless/moss_block_from_moss_paste')
    event.shapeless('2x quark:moss_paste', ['minecraft:moss_carpet', 'minecraft:moss_carpet', 'minecraft:moss_carpet']).id('kubejs:shapeless/moss_paste_from_moss_carpet')

})