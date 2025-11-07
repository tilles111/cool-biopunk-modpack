ServerEvents.recipes(event => {
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
})