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

    earth_break_recipe('minecraft:air', 'twigs:pebble', 'biomancy:stone_powder')

    const moss_recipes = (standard_block, mossy_block) => {

        event.custom({
        type: 'lychee:block_interacting',
            post: [
                {
                    type: 'place',
                    block: standard_block
                }, {
                    type: 'execute',
                    command: 'playsound minecraft:block.vine.break block @a ~ ~ ~',
                    hide: true
                }, {
                    type: 'random',
                    entries: [
                        {
                            type: 'drop_item',
                            item: 'quark:moss_paste',
                            count: 1,
                            weight: 2
                        }
                    ],
                    empty_weight: 1
                }, {
                    type: 'damage_item',
                    damage: 1
                }
            ],
            item_in: [
                {
                    tag: 'kubejs:knives/standard'
                }
            ],
            block_in: mossy_block
        }).id(`${id_prefix}${item_name(standard_block)}_from_${item_name(mossy_block)}_${item_mod_name(mossy_block)}`)

        event.custom({
        type: 'lychee:block_interacting',
            post: [
                {
                    type: 'place',
                    block: mossy_block
                }, {
                    type: 'execute',
                    command: 'playsound minecraft:block.vine.place block @a ~ ~ ~',
                    hide: true
                }
            ],
            item_in: [
                {
                    item: 'quark:moss_paste'
                }
            ],
            block_in: standard_block
        }).id(`${id_prefix}${item_name(mossy_block)}_from_${item_name(standard_block)}_${item_mod_name(mossy_block)}`)

    }

    const moss_conversions = [
        ['minecraft:cobblestone', 'minecraft:mossy_cobblestone'],
        // ['minecraft:cobblestone_wall', 'minecraft:mossy_cobblestone_wall'],
        ['quark:cobblestone_bricks', 'quark:mossy_cobblestone_bricks'],
        // ['quark:cobblestone_bricks_wall', 'quark:mossy_cobblestone_bricks_wall'],
        ['minecraft:stone_bricks', 'minecraft:mossy_stone_bricks'],
        // ['minecraft:stone_brick_wall', 'minecraft:mossy_stone_brick_wall'],
        ['architects_palette:heavy_stone_bricks', 'architects_palette:heavy_mossy_stone_bricks'],
        ['minecraft:bricks', 'twigs:mossy_bricks'],
        // ['minecraft:brick_wall', 'twigs:mossy_brick_wall'],
        ['twigs:cobblestone_bricks', 'twigs:mossy_cobblestone_bricks'],
        // ['twigs:cobblestone_brick_wall', 'twigs:mossy_cobblestone_brick_wall']
    ]

    moss_conversions.forEach(blocks => {
        moss_recipes(blocks[0], blocks[1])
    })
    

    
})