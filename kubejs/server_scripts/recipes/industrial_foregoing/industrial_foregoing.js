ServerEvents.recipes(event => {
	event.remove({ output: 'industrialforegoing:dissolution_chamber' })
	event.remove({ output: 'industrialforegoing:mob_slaughter_factory' })

	event.shaped('industrialforegoing:dissolution_chamber', [
    		'BCB',
    		'GPG',
    		'BFB'
		], {
			C: 'kubejs:biological_core',
			B: 'kubejs:mineral_brick',
			G: '#forge:gears/chitinsteel',
			F: 'thermal:machine_frame',
			P: 'biomancy:primordial_cradle'
		}
	).id('kubejs:shaped/dissolution_chamber')

	event.remove({ output: 'industrialforegoing:block_placer' })
	event.remove({ output: 'industrialforegoing:block_breaker' })
	event.remove({ output: 'industrialforegoing:fluid_placer' })
	event.remove({ output: 'industrialforegoing:fluid_collector' })
	event.remove({ output: 'industrialforegoing:animal_rancher' })
	event.remove({ output: 'industrialforegoing:animal_feeder' })
	event.remove({ output: 'industrialforegoing:animal_baby_separator' })
	event.remove({ output: 'industrialforegoing:mob_crusher' })
	event.remove({ output: 'industrialforegoing:plant_sower' })
	event.remove({ output: 'industrialforegoing:plant_gatherer' })

	event.shaped('industrialforegoing:block_placer', [
    		'STS',
    		'CMC',
    		'BBB'
		], {
			S: 'chestcavity:iron_scrap',
            C: 'kubejs:copper_scrap',
            B: 'architects_palette:nether_brass_ingot',
            T: 'kubejs:bone_pickaxe',
            M: 'biomancy:maw_hopper'
		}
	).id('kubejs:shaped/block_placer')
	event.shaped('industrialforegoing:block_breaker', [
    		'STS',
    		'SMS',
    		'BBB'
		], {
			S: 'chestcavity:iron_scrap',
            B: 'architects_palette:nether_brass_ingot',
            T: 'kubejs:bone_pickaxe',
            M: 'biomancy:maw_hopper'
		}
	).id('kubejs:shaped/block_breaker')
	event.shaped('industrialforegoing:fluid_placer', [
    		'STS',
    		'CMC',
    		'BBB'
		], {
			S: 'chestcavity:iron_scrap',
            C: 'kubejs:copper_scrap',
            B: 'architects_palette:nether_brass_ingot',
            T: 'thermal:florb',
            M: 'biomancy:maw_hopper'
		}
	).id('kubejs:shaped/fluid_placer')
	event.shaped('industrialforegoing:fluid_collector', [
    		'STS',
    		'SMS',
    		'BBB'
		], {
			S: 'chestcavity:iron_scrap',
            B: 'architects_palette:nether_brass_ingot',
            T: 'thermal:florb',
            M: 'biomancy:maw_hopper'
		}
	).id('kubejs:shaped/fluid_collector')
	event.shaped('industrialforegoing:animal_rancher', [
    		'SSS',
    		'GFG',
    		'BBB'
		], {
			S: 'chestcavity:iron_scrap',
            B: 'architects_palette:nether_brass_ingot',
            F: 'thermal:machine_frame',
            G: 'minecraft:golden_carrot'
		}
	).id('kubejs:shaped/animal_rancher')
	event.shaped('industrialforegoing:animal_feeder', [
    		'SSS',
    		'GFG',
    		'BBB'
		], {
			S: 'kubejs:copper_scrap',
            B: 'architects_palette:nether_brass_ingot',
            F: 'thermal:machine_frame',
            G: 'minecraft:golden_carrot'
		}
	).id('kubejs:shaped/animal_feeder')
	event.shaped('industrialforegoing:animal_baby_separator', [
    		'SFS',
    		'FGF',
    		'BFB'
		], {
			S: 'chestcavity:iron_scrap',
            B: 'architects_palette:nether_brass_ingot',
            F: 'thermal:item_filter_augment',
            G: 'minecraft:golden_carrot'
		}
	).id('kubejs:shaped/animal_baby_separator')
	event.shaped('industrialforegoing:mob_crusher', [
    		'SPS',
    		'BFB',
    		'SGS'
		], {
			S: 'chestcavity:iron_scrap',
            P: '#forge:plates/biobrass',
            G: '#forge:gears/chitinsteel',
            B: 'thermal:saw_blade',
            F: 'thermal:machine_frame'
		}
	).id('kubejs:shaped/mob_crusher')
	event.shaped('industrialforegoing:plant_sower', [
    		'SHS',
    		'OFO',
    		'BHB'
		], {
			S: 'chestcavity:iron_scrap',
            B: 'architects_palette:nether_brass_ingot',
            F: 'thermal:machine_frame',
			H: 'kubejs:bone_hoe',
			O: 'industrialforegoing:block_placer'
		}
	).id('kubejs:shaped/plant_sower')
	event.shaped('industrialforegoing:plant_gatherer', [
    		'SHS',
    		'OFO',
    		'BHB'
		], {
			S: 'chestcavity:iron_scrap',
            B: 'architects_palette:nether_brass_ingot',
            F: 'thermal:machine_frame',
			H: 'kubejs:bone_hoe',
			O: 'biomancy:tongue'
		}
	).id('kubejs:shaped/plant_gatherer')

    event.recipes.biomancy.bio_forging(['4x thermal:saw_blade', '8x kubejs:mineral_brick', 'thermal:machine_frame', 'kubejs:biological_core', '2x thermal:fluid_cell_frame'], 'industrialforegoing:mob_slaughter_factory', 'biomancy:machines', 100)
})