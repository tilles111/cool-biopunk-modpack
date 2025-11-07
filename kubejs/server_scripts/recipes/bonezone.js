ServerEvents.recipes(event => {

    const id_prefix = 'kubejs:bonecarving/'

    event.remove({ id: 'bonezone:crafting/bonecarver' })
    event.shaped('bonezone:bonecarver', [
		' A ',
		'BCB',
		'DDD'
	], {
		A: '#forge:leather',
		B: '#minecraft:planks',
		C: 'minecraft:grindstone',
		D: ['#kubejs:basalt', '#kubejs:deepslate']
	}).id('kubejs:shaped/bonecarver')
    
    const bonecarving = (output, input) => {
        
        event.custom({
            type: 'bonezone:bonecarving',
            input: Ingredient.of(input).toJson(),
            output: Item.of(output).toJson()
        }).id(`${id_prefix}${item_name(output)}_from_${item_name(input)}`)
        
    }
    
    const bone_stuff = [
        'minecraft:skeleton_skull',
        'architects_palette:osseous_bricks',
        '2x architects_palette:bone_nub',
        '3x biomancy:mob_fang',
        '3x biomancy:mob_claw'
    ]

    bone_stuff.forEach(bone_thing => {
        bonecarving(bone_thing, 'minecraft:bone_block')
    })

    event.remove({id: '/bonezone:*wither_*/'})

    const wither_stuff = [
        'bonezone:empty_wither_pot_flipped',
        '6x bonezone:wither_bone_mosaic',
        '6x bonezone:wither_bone_bricks',
        '6x bonezone:wither_bone_ladder',
        'bonezone:empty_wither_pot',
        'bonezone:candle_skull_wither_empty',
        'minecraft:wither_skeleton_skull',
        'architects_palette:withered_osseous_bricks'
    ]

    wither_stuff.forEach(wither_thing => {
        bonecarving(wither_thing, 'architects_palette:withered_bone_block')
    })

    event.remove({ id: '/architects_palette:.*bone.*stonecutting/'})
    event.remove({ id: '/architects_palette:.*osseous.*stonecutting/'})

    const osseous_stuff = [
        '2x architects_palette:osseous_brick_slab',
        '2x architects_palette:osseous_brick_vertical_slab',
        'architects_palette:osseous_brick_stairs',
        'architects_palette:osseous_brick_wall',
        'architects_palette:osseous_pillar',
        'architects_palette:osseous_skull'
    ]

    osseous_stuff.forEach(osseous_thing => {
        bonecarving(osseous_thing, ['minecraft:bone_block', 'architects_palette:osseous_bricks'])
    })

    const withered_osseous_stuff = [
        '2x architects_palette:withered_osseous_brick_slab',
        '2x architects_palette:withered_osseous_brick_vertical_slab',
        'architects_palette:withered_osseous_brick_stairs',
        'architects_palette:withered_osseous_brick_wall',
        'architects_palette:withered_osseous_pillar',
        'architects_palette:withered_osseous_skull'
    ]

    withered_osseous_stuff.forEach(withered_osseous_thing => {
        bonecarving(withered_osseous_thing, ['architects_palette:withered_bone_block', 'architects_palette:withered_osseous_bricks'])
    })

    event.remove({ id: 'biomancy:crafting/bone_meal' })

    bonecarving('4x minecraft:bone_meal', 'minecraft:bone')
    bonecarving('2x minecraft:bone_meal', 'biomancy:mob_fang')
    bonecarving('biomancy:bone_fragments', 'minecraft:bone_meal')
    bonecarving('5x biomancy:bone_fragments', 'minecraft:bone')
    bonecarving('3x biomancy:bone_fragments', 'biomancy:mob_fang')
    




})