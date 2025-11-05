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

        if (chances == undefined) {
            chances = {
                'leftover': 0.5
            }
            if (flesh > 0) {
                chances['flesh'] = 0.7
            }
            if (bone > 0) {
                chances['bone'] = 0.2
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
        if (bone > 0) {
            output_array.push(Item.of('biomancy:bone_fragments', bone).withChance(chances['bone']))
        }
        if (sinew > 0) {
            output_array.push(Item.of('biomancy:mob_sinew', sinew).withChance(chances['sinew']))
        }

        event.recipes.farmersdelight.cutting([
            input_meat
        ], '#kubejs:tools/scalpels', output_array, 'minecraft:entity.sheep.shear').id(`${id_prefix}scalpel_${item_name(input_meat)}`)

    }

    // TODO: make these numbers more informative, idk
    scalpel_recipe('farmersdelight:minced_beef', 'minecraft:beef', 1, 2, 0, 1)
    scalpel_recipe('farmersdelight:bacon', 'minecraft:porkchop', 2, 2, 0, 1)
    scalpel_recipe('farmersdelight:chicken_cuts', 'minecraft:chicken', 1, 1, 2, 2)
    scalpel_recipe('farmersdelight:mutton_chops', 'minecraft:mutton', 1, 2, 0, 1)
    scalpel_recipe('biomancy:flesh_bits', 'minecraft:rabbit', 2, 0, 1, 2)
    scalpel_recipe('farmersdelight:cod_slice', 'minecraft:cod', 2, 0, 2, 1)
    scalpel_recipe('farmersdelight:salmon_slice', 'minecraft:salmon', 2, 0, 2, 1)
    scalpel_recipe('minecraft:porkchop', 'farmersdelight:ham', 2, 3, 0, 1)

})