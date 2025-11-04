ServerEvents.recipes(event => {
	event.remove({ output: 'biomancy:primordial_cradle' })

    event.recipes.summoningrituals.altar('minecraft:spawner')
        .input('16x #biomancy:raw_meats', '2x biomancy:mob_marrow', '4x biomancy:mob_gland')
        .itemOutput('biomancy:primordial_cradle')
        .sacrifice('pig')
        .sacrifice('sheep')
        .sacrifice('cow')
        .sacrifice('chicken')
})