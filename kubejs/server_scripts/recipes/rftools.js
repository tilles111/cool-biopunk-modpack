ServerEvents.recipes(event => {
	event.remove({ output: 'rftoolsstorage:modular_storage' })
	event.remove({ output: 'rftoolsstorage:storage_scanner' })
	event.remove({ output: 'rftoolsstorage:storage_module0' })
	event.remove({ output: 'rftoolsstorage:storage_module1' })
	event.remove({ output: 'rftoolsstorage:storage_module2' })
	event.remove({ output: 'rftoolsstorage:storage_module3' })
	event.remove({ output: 'rftoolsbase:filter_module' })

	event.shaped('rftoolsstorage:modular_storage', [
    		'BSB',
			'MFM',
			'CSC'
		], {
			B: 'architects_palette:nether_brass_ingot',
            C: 'architects_palette:sunmetal_brick',
			F: 'biomancy:fleshkin_chest',
            M: 'biomancy:impermeable_membrane',
            S: 'kubejs:copper_scrap'
		}
	).id('kubejs:shaped/modular_storage')
	event.shaped('rftoolsstorage:storage_scanner', [
    		'BSB',
			'HMH',
			'CSC'
		], {
			B: 'architects_palette:nether_brass_ingot',
            C: 'architects_palette:sunmetal_brick',
			H: 'biomancy:maw_hopper',
            M: 'biomancy:impermeable_membrane',
            S: 'chestcavity:iron_scrap'
		}
	).id('kubejs:shaped/storage_scanner')
	event.shaped('rftoolsstorage:storage_module0', [
    		' P ',
			'CSC',
			' P '
		], {
			S: 'biomancy:storage_sac',
			C: 'biomancy:fleshkin_chest',
			P: '#forge:plates/biobrass'
		}
	).id('kubejs:shaped/storage_module0')
	event.shaped('rftoolsstorage:storage_module1', [
    		'PCP',
			'CSC',
			'PCP'
		], {
			S: 'biomancy:storage_sac',
			C: 'biomancy:fleshkin_chest',
			P: '#forge:plates/chitinsteel'
		}
	).id('kubejs:shaped/storage_module1')
	event.shaped('rftoolsbase:filter_module', [
    		'FSF'
		], {
			F: 'thermal:item_filter_augment',
            S: 'kubejs:copper_scrap'
		}
	).id('kubejs:shaped/filter_module')

    event.recipes.thermal.smelter('rftoolsstorage:storage_module2', ['6x biomancy:fleshkin_chest', 'biomancy:living_flesh', '4x #forge:plates/biobrass'])
    event.recipes.thermal.smelter('rftoolsstorage:storage_module3', ['10x biomancy:fleshkin_chest', 'kubejs:biological_core', '8x kubejs:mineral_brick'])
})