ServerEvents.recipes(event => {

    const id_prefix = 'kubejs:block_interacting/'

    const earth_break_recipe = (output_block, input_block, output_item, sound) => {

        if (output_item == undefined) {
            output_item = 'twigs:pebble'
        }

        if (sound == undefined) {
            sound = 'minecraft:block.stone.break'
        }

        event.custom({
            type: 'lychee:block_interacting',
            post: [
                {
                    type: 'place',
                    block: output_block
                }, {
                    type: 'execute',
                    command: `playsound ${sound} block @a ~ ~ ~`,
                    hide: true
                }, {
                    type: 'damage_item',
                    damage: 1
                }, {
                    type: 'random',
                    entries: [
                        {
                            type: 'drop_item',
                            item: output_item,
                            count: 1,
                            weight: 2
                        },
                        {
                            type: 'drop_item',
                            item: output_item,
                            count: 2,
                            weight: 1
                        }
                    ],
                    empty_weight: 3
                }
            ],
            item_in: [
                {
                    item: 'kubejs:bone_hammer'
                }
            ],
            block_in: input_block
        }).id(`${id_prefix}${item_name(output_block)}_from_${item_name(input_block)}`)

    }

    earth_break_recipe('minecraft:cobblestone', 'minecraft:stone')
    earth_break_recipe('minecraft:gravel', 'minecraft:cobblestone')
    earth_break_recipe('minecraft:sand', 'minecraft:gravel', 'biomancy:stone_powder', 'minecraft:block.gravel.break')

    earth_break_recipe('minecraft:coarse_dirt', 'twigs:rocky_dirt')
})