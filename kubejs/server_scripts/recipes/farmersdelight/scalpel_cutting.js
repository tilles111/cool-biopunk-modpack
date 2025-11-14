ServerEvents.recipes(event => {

    const id_prefix = 'kubejs:cutting_board/'

    // TODO: this might be awful
    const scalpel_recipe = (output_meat, input_meat, leftover, flesh, bone, sinew, chances) => {

        if (leftover == undefined) {
            leftover = 1
        }

        var values = [flesh, bone, sinew]

        values.forEach(value => {
            if (value == undefined) {
                value = 0
            }
        })

        var bone_type = 'biomancy:bone_fragments'
        var bone_amount = bone

        if (chances == undefined) {
            chances = {
                'leftover': 0.5
            }
            if (flesh > 0) {
                chances['flesh'] = 0.7
            }
            if (bone == 'full') {
                bone_type = 'minecraft:bone'
                bone_amount = 1
                chances['bone'] = 1
            } else { // TODO: this is so ass lmao
                console.log(input_meat)
                if (bone > 0) {
                    chances['bone'] = 0.2
                }
            }
            if (sinew > 0) {
                chances['sinew'] = 0.4
            }
        }

        var output_array = [
            Item.of(output_meat, leftover).withChance(chances['leftover'])
        ]

        if (flesh > 0) {
            output_array.push(Item.of('biomancy:flesh_bits', flesh).withChance(chances['flesh']))
        }
        if (bone > 0 | bone == 'full') {
            output_array.push(Item.of(bone_type, bone_amount).withChance(chances['bone']))
        }
        if (sinew > 0) {
            output_array.push(Item.of('biomancy:mob_sinew', sinew).withChance(chances['sinew']))
        }

        event.recipes.farmersdelight.cutting([
            input_meat
        ], '#kubejs:tools/scalpels', output_array, 'minecraft:entity.sheep.shear').id(`${id_prefix}scalpel_${item_name(input_meat)}`)

        event.recipes.thermal.sawmill(output_array, input_meat).id(`kubejs:sawmill/${item_name(input_meat)}`)

    }

    // TODO: make these numbers more informative, idk
    scalpel_recipe('farmersdelight:minced_beef', 'minecraft:beef', 1, 2, 0, 1)
    scalpel_recipe('farmersdelight:bacon', 'minecraft:porkchop', 2, 2, 0, 1)
    scalpel_recipe('farmersdelight:chicken_cuts', 'minecraft:chicken', 1, 1, 2, 2)
    scalpel_recipe('farmersdelight:mutton_chops', 'minecraft:mutton', 1, 2, 0, 1)
    scalpel_recipe('biomancy:flesh_bits', 'minecraft:rabbit', 2, 0, 1, 2)
    scalpel_recipe('farmersdelight:cod_slice', 'minecraft:cod', 2, 0, 2, 1)
    scalpel_recipe('farmersdelight:salmon_slice', 'minecraft:salmon', 2, 0, 2, 1)
    scalpel_recipe('minecraft:porkchop', 'farmersdelight:ham', 2, 3, 'full', 1)

    scalpel_recipe('biomancy:flesh_bits', 'farmersdelight:minced_beef', 2, 0, 0, 1)
    scalpel_recipe('biomancy:flesh_bits', 'farmersdelight:bacon', 2, 0, 0, 1)
    scalpel_recipe('biomancy:flesh_bits', 'farmersdelight:chicken_cuts', 2, 0, 1, 2)
    scalpel_recipe('biomancy:flesh_bits', 'farmersdelight:mutton_chops', 2, 0, 1, 1)
    scalpel_recipe('biomancy:flesh_bits', 'farmersdelight:cod_slice', 1, 0, 0, 1)
    scalpel_recipe('biomancy:flesh_bits', 'farmersdelight:salmon_slice', 1, 0, 0, 1)

    const scalpel_recipe_2 = (output_array, input) => {
        event.recipes.farmersdelight.cutting([
            input
        ], '#kubejs:tools/scalpels', output_array, 'minecraft:entity.sheep.shear').id(`${id_prefix}scalpel_${item_name(input)}`)

        event.recipes.thermal.sawmill(output_array, input).id(`kubejs:sawmill/${item_name(input)}`)
    }

    scalpel_recipe_2([
        Item.of('minecraft:rabbit_hide', 2).withChance(0.4),
        Item.of('biomancy:tough_fibers', 6).withChance(0.6)
    ], '#forge:leather')
    
    scalpel_recipe_2([
        Item.of('biomancy:tough_fibers', 6).withChance(0.6)
    ], 'minecraft:rabbit_hide')

    scalpel_recipe_2([
        Item.of('minecraft:bone').withChance(0.2),
        Item.of('farmersdelight:cod_slice', 2).withChance(0.6),
        Item.of('biomancy:tough_fibers', 2).withChance(0.7)
    ], 'architects_palette:cod_log')

    scalpel_recipe_2([
        Item.of('minecraft:bone').withChance(0.2),
        Item.of('farmersdelight:salmon_slice', 2).withChance(0.6),
        Item.of('biomancy:tough_fibers', 2).withChance(0.7)
    ], 'architects_palette:salmon_log')

    scalpel_recipe_2([
        Item.of('farmersdelight:cod_slice', 2).withChance(0.6),
        Item.of('biomancy:tough_fibers', 3).withChance(0.7)
    ], 'architects_palette:cod_scales')
    scalpel_recipe_2([
        Item.of('farmersdelight:salmon_slice', 2).withChance(0.6),
        Item.of('biomancy:tough_fibers', 3).withChance(0.7)
    ], 'architects_palette:salmon_scales')

    

})