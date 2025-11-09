ServerEvents.tags('item', event => {

    event.add('kubejs:bone_materials', [
        'biomancy:bone_fragments',
        'minecraft:bone_meal',
        'biomancy:mob_marrow'
    ])

    // event.add('kubejs:bone_tool_materials', [
    //     'biomancy:bone_fragments',
    //     'minecraft:bone_meal'
    // ])

    // Meat for Biomancy
    event.add('biomancy:raw_meats', [
        '#c:raw_meats',
        '#chestcavity:salvageable_sausage_skin',
        '#chestcavity:salvageable_mini_sausage_skin',
        '#chestcavity:salvageable_human_organ_meat',
        '#chestcavity:salvageable_rotten_flesh',
        '#chestcavity:salvageable_animal_organ_meat',
        '#chestcavity:salvageable_small_animal_organ_meat',
        '#chestcavity:salvageable_burnable_meat',
        '#chestcavity:salvageable_toxic_organ_meat',
        '#chestcavity:salvageable_alien_organ_meat',
        '#chestcavity:salvageable_dragon_organ_meat'
    ])

    event.add('biomancy:cooked_meats', [
        'chestcavity:cooked_organ_meat',
        'chestcavity:cooked_toxic_organ_meat',
        'chestcavity:cooked_human_organ_meat',
        'chestcavity:cooked_alien_organ_meat',
        'chestcavity:cooked_dragon_organ_meat',
        'chestcavity:cooked_butchered_meat',
        'chestcavity:cooked_toxic_meat',
        'chestcavity:cooked_man_meat',
        'chestcavity:cooked_alien_meat',
        'chestcavity:cooked_dragon_meat',
        'chestcavity:sausage',
        'chestcavity:toxic_sausage',
        'chestcavity:human_sausage',
        'chestcavity:alien_sausage',
        'chestcavity:dragon_sausage',
        'chestcavity:rich_sausage',
        'chestcavity:rich_toxic_sausage',
        'chestcavity:rich_human_sausage',
        'chestcavity:rich_alien_sausage',
        'chestcavity:rich_dragon_sausage',
        'chestcavity:mini_sausage',
        'chestcavity:rich_mini_sausage'
    ])

    // TODO: dungeons delight meat compat
    // TODO: other chest cavity, special muscles? add to biomancy raw meat

    event.add('kubejs:muscles/standard', [
        'chestcavity:muscle',
        'chestcavity:animal_muscle',
        'chestcavity:aquatic_muscle',
        'chestcavity:fish_muscle',
        'chestcavity:brutish_muscle',
        'chestcavity:swift_muscle',
        'chestcavity:springy_muscle',
        'chestcavity:fireproof_muscle',
        'chestcavity:dragon_muscle'
    ])

    event.remove('supplementaries:throwable_bricks', [
        'architects_palette:sunmetal_brick'
    ])

    // these names are awful
    event.add('kubejs:flowers/forest', [
        'minecraft:dandelion',
        'minecraft:poppy'
    ])

    event.add('kubejs:plants/swamp', [
        'minecraft:lily_pad',
        'minecraft:vine'
    ])

    event.add('kubejs:plants/dripleaf', [
        'minecraft:big_dripleaf',
        'minecraft:small_dripleaf'
    ])

    event.add('kubejs:knives/standard', [
        'farmersdelight:flint_knife',
        'farmersdelight:iron_knife',
        'farmersdelight:diamond_knife',
        'farmersdelight:netherite_knife',
        'farmersdelight:golden_knife',
        'kubejs:bone_knife',
        'kubejs:living_bone_knife',
        'kubejs:biobrass_knife',
        'kubejs:living_biobrass_knife',
        'kubejs:chitinsteel_knife',
        'kubejs:living_chitinsteel_knife',
        'dungeonsdelight:stained_knife'
    ])

    // event.add('kubejs:tools/scalpels', [
    //     '#ae2:knife'
    // ])

    event.add('kubejs:basalt', [
        'minecraft:basalt',
        'minecraft:smooth_basalt',
        'minecraft:polished_basalt',
        'architects_palette:basalt_tiles',
        'architects_palette:cracked_basalt_tiles',
        'architects_palette:chiseled_basalt_tiles',
        'twigs:polished_basalt_bricks',
        'twigs:chiseled_smooth_basalt_bricks',
        'twigs:smooth_basalt_bricks'
    ])

    event.add('kubejs:deepslate', [
        'minecraft:deepslate',
        'minecraft:cobbled_deepslate'
    ])

})