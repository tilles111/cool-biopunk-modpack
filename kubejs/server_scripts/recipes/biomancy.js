ServerEvents.recipes(event => {
	event.remove({ id: 'biomancy:crafting/primordial_cradle' })

    event.custom({
        type: 'dungeonsdelight:monster_cooking',
        container: {
            item: 'minecraft:glass_bottle'
        },
        ingredients: [
            { item: 'dungeonsdelight:spider_extract' },
            { item: 'biomancy:mob_gland' },
            { item: 'biomancy:mob_marrow' },
            { item: 'minecraft:rotten_flesh' }
        ],
        cookingtime: 100,
        experience: 0,
        result:{ 
            item: 'biomancy:acid_extract',
            count: 2
        }
    }).id(`kubejs:monster_cooking/gastric_juice`)

    event.recipes.summoningrituals.altar('biomancy:fleshkin_chest')
        .input('2x kubejs:bottle_of_blood', '4x biomancy:flesh_spike', '6x biomancy:flesh')
        .sacrifice('villager')
        .itemOutput('biomancy:primordial_cradle')
        .itemOutput('2x minecraft:glass_bottle')
})