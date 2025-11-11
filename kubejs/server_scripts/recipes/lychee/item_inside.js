ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:item_inside/'

    const sac_fill_recipe = (fluid, sound) => {

        if (sound == undefined) {
            sound = 'biomancy:ui.storage_sac.open'
        }

        event.custom({
            type: 'lychee:item_inside',
            post: [
                {
                    type: 'place',
                    block: 'minecraft:air'
                }, {
                    type: 'execute',
                    command: `playsound ${sound} block @a ~ ~ ~`,
                    hide: true
                }, {
                    type: 'drop_item',
                    item: 'thermal:florb',
                    nbt: `{Fluid:{Amount:1000,FluidName:"${fluid}"}}`
                }
            ],
            item_in: [
                {
                    item: 'thermal:florb'
                }
            ],
            block_in: fluid
        }).id(`${id_prefix}sac_filling_${fluid_name(fluid)}`)
    }

    sac_fill_recipe('minecraft:water')
    sac_fill_recipe('industrialforegoing:meat')
    sac_fill_recipe('kubejs:blood')
})