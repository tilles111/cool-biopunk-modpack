ServerEvents.recipes(event => {
	event.remove({ id: 'biomancy:crafting/primordial_core' })

    event.recipes.biomancy.bio_brewing(['biomancy:bloomberry', 'biomancy:bloomberry', 'biomancy:acid_extract', 'biomancy:acid_extract'], 'kubejs:organ_slurry_bucket', 'kubejs:primordial_blood_bucket', 400)

    event.recipes.biomancy.bio_brewing(['minecraft:emerald_block', 'minecraft:emerald_block', 'minecraft:emerald_block', 'minecraft:emerald_block'], 'chestcavity:dragon_appendix', 'kubejs:emerald_appendix', 100)
    event.recipes.biomancy.bio_brewing(['biomancy:water_gel_block', 'biomancy:water_gel_block', 'chestcavity:aqautic_muscle', 'chestcavity:aqautic_muscle'], 'chestcavity:dragon_lung', 'kubejs:aquatic_lung', 200)
    event.recipes.biomancy.bio_brewing(['chestcavity:dragon_muscle', 'chestcavity:dragon_muscle', 'chestcavity:dragon_muscle', 'chestcavity:dragon_muscle'], 'biomancy:packed_flesh', '4x kubejs:dense_muscle', 300)
    event.recipes.biomancy.bio_brewing(['#forge:plates/chitinsteel', 'biomancy:acid_extract'], 'chestcavity:dragon_rib', '2x kubejs:chitinsteel_rib', 300)
    event.recipes.biomancy.bio_brewing(['#forge:plates/chitinsteel', '#forge:plates/chitinsteel', '#forge:plates/chitinsteel', 'biomancy:acid_extract'], 'chestcavity:dragon_spine', 'kubejs:chitinsteel_spine', 600)
    event.recipes.biomancy.bio_brewing(['biomancy:digester', 'biomancy:living_flesh', 'biomancy:acid_extract', 'biomancy:acid_extract'], 'chestcavity:stomach', 'kubejs:fleshkin_stomach', 1200)

    event.recipes.biomancy.bio_brewing(['biomancy:essence', 'biomancy:essence', 'biomancy:essence', 'biomancy:essence'], 'minecraft:ender_eye', 'kubejs:primordial_eye', 1200)
    event.recipes.biomancy.bio_brewing(['kubejs:primordial_eye', 'kubejs:player_heart', 'chestcavity:mana_reactor', 'minecraft:golden_apple'], 'kubejs:primordial_vessel', 'biomancy:primordial_core', 600)

    event.recipes.biomancy.bio_brewing(['biomancy:malignant_flesh_veins', 'biomancy:malignant_flesh_veins', 'biomancy:malignant_flesh_veins', 'biomancy:malignant_flesh_veins'], 'minecraft:sweet_berries', 'biomancy:primal_bloom', 300)
})