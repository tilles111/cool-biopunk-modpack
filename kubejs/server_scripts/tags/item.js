ServerEvents.tags('item', event => {

    event.add('kubejs:bone_materials', [
        'minecraft:bone_meal',
        'biomancy:bone_fragments',
        'biomancy:mob_marrow'
    ])

    event.add('kubejs:bone_tool_materials', [
        'minecraft:bone_meal',
        'biomancy:bone_fragments'
    ])

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

})