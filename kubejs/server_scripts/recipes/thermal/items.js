ServerEvents.recipes(event => {

    event.remove({ id: 'thermal:florb_8' })
    event.remove({ output: 'thermal:press_gear_die' })
    event.remove({ output: 'thermal:wrench' })

    // event.recipes.summoningrituals.altar('biomancy:impermeable_membrane')
    //     .input('biomancy:mob_gland', '4x biomancy:elastic_fibers')
    //     .itemOutput('4x thermal:florb')

	event.shaped('thermal:press_gear_die', [
    		' I ',
    		'IGI',
			' I '
		], {
			I: 'chestcavity:iron_scrap',
			G: '#forge:gears/biobrass'
		}
	).id('kubejs:shaped/press_gear_die')

	event.shaped('thermal:wrench', [
    		' I ',
    		' BI',
			'B  '
		], {
			I: 'architects_palette:nether_brass_ingot',
			B: 'minecraft:bone'
		}
	).id('kubejs:shaped/wrench')

    event.remove({ id: 'thermal:aquachow_4' })
    event.shapeless('4x thermal:aquachow', [
        'quark:moss_paste',
        'thermal:phytogro'
    ])
})