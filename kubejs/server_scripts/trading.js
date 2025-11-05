MoreJSEvents.villagerTrades((event) => {
    event.removeVanillaTrades();
    event.removeModdedTrades();

    event.addTrade('butcher', 1, ['2x minecraft:beef'], '3x minecraft:emerald');
    event.addTrade('butcher', 1, ['2x minecraft:porkchop'], '3x minecraft:emerald');

    event.addTrade('butcher', 2, ['2x minecraft:mutton'], '3x minecraft:emerald');
    event.addTrade('butcher', 2, ['2x minecraft:chicken'], '3x minecraft:emerald');

    event.addTrade('butcher', 3, ['3x farmersdelight:minced_beef'], '2x minecraft:emerald');
    event.addTrade('butcher', 3, ['3x farmersdelight:bacon'], '2x minecraft:emerald');
    event.addTrade('butcher', 3, ['2x minecraft:emerald'], '3x minecraft:bone_meal');

    event.addTrade('butcher', 4, ['3x farmersdelight:mutton_chops'], '2x minecraft:emerald');
    event.addTrade('butcher', 4, ['3x farmersdelight:chicken_cuts'], '2x minecraft:emerald');
    event.addTrade('butcher', 4, ['2x minecraft:emerald'], '4x minecraft:bone_meal');
    
    event.addTrade('butcher', 5, ['2x minecraft:emerald'], 'biomancy:mob_fang');
    event.addTrade('butcher', 5, ['4x minecraft:emerald'], 'biomancy:mob_claw');

    event.addTrade('farmer', 1, ['4x minecraft:wheat'], 'minecraft:emerald');
    event.addTrade('farmer', 1, ['4x minecraft:carrot'], 'minecraft:emerald');
    event.addTrade('farmer', 1, ['4x minecraft:potato'], 'minecraft:emerald');
    event.addTrade('farmer', 1, ['4x minecraft:beetroot'], 'minecraft:emerald');
    
    event.addTrade('farmer', 2, ['4x farmersdelight:tomato'], 'minecraft:emerald');
    event.addTrade('farmer', 2, ['4x farmersdelight:cabbage'], 'minecraft:emerald');
    event.addTrade('farmer', 2, ['4x farmersdelight:onion'], 'minecraft:emerald');
    event.addTrade('farmer', 2, ['4x farmersdelight:rice'], 'minecraft:emerald');
    
    event.addTrade('farmer', 3, ['8x minecraft:sweet_berries'], 'minecraft:emerald');
    event.addTrade('farmer', 3, ['8x minecraft:sugar_cane'], 'minecraft:emerald');
    event.addTrade('farmer', 3, ['minecraft:emerald'], 'farmersdelight:tomato_seeds');
    event.addTrade('farmer', 3, ['minecraft:emerald'], 'farmersdelight:cabbage_seeds');
    
    event.addTrade('farmer', 4, ['2x minecraft:emerald'], 'minecraft:melon_seeds');
    event.addTrade('farmer', 4, ['2x minecraft:emerald'], 'minecraft:pumpkin_seeds');
    event.addTrade('farmer', 4, ['2x minecraft:emerald'], 'supplementaries:flax_seeds');
    
    event.addTrade('farmer', 5, ['minecraft:melon'], '4x minecraft:emerald');
    event.addTrade('farmer', 5, ['minecraft:pumpkin'], '2x minecraft:emerald');
    event.addTrade('farmer', 5, ['2x minecraft:emerald'], 'farmersdelight:vegetable_soup');
    event.addTrade('farmer', 5, ['3x minecraft:emerald'], 'farmersdelight:roast_chicken');
    
    event.addTrade('toolsmith', 1, ['2x chestcavity:iron_scrap'], 'minecraft:emerald');
    event.addTrade('toolsmith', 1, ['4x minecraft:charcoal'], 'minecraft:emerald');
    event.addTrade('toolsmith', 1, ['8x minecraft:flint'], 'minecraft:emerald');

    const stoneSword = VillagerUtils.createEnchantedItemTrade(['6x minecraft:emerald'], 'minecraft:stone_sword').amount(1, 2);
    stoneSword.enchantments('minecraft:smite', 'minecraft:bane_of_arthropods', 'minecraft:unbreaking')
    stoneSword.villagerExperience(15)
    const flintKnife = VillagerUtils.createEnchantedItemTrade(['6x minecraft:emerald'], 'farmersdelight:flint_knife').amount(1, 2);
    flintKnife.enchantments('minecraft:smite', 'minecraft:bane_of_arthropods', 'minecraft:unbreaking')
    flintKnife.villagerExperience(15)
    const stoneHoe = VillagerUtils.createEnchantedItemTrade(['8x minecraft:emerald'], 'minecraft:stone_hoe').amount(1);
    stoneHoe.enchantments('minecraft:fortune', 'minecraft:silk_touch', 'minecraft:unbreaking')
    stoneHoe.villagerExperience(15)
    const stonePickaxe = VillagerUtils.createEnchantedItemTrade(['10x minecraft:emerald'], 'minecraft:stone_pickaxe').amount(1);
    stonePickaxe.enchantments('minecraft:fortune', 'minecraft:silk_touch', 'minecraft:unbreaking')
    stonePickaxe.villagerExperience(20)
    const stoneShovel = VillagerUtils.createEnchantedItemTrade(['10x minecraft:emerald'], 'minecraft:stone_shovel').amount(1);
    stoneShovel.enchantments('minecraft:fortune', 'minecraft:silk_touch', 'minecraft:unbreaking')
    stoneShovel.villagerExperience(20)
    const stoneAxe = VillagerUtils.createEnchantedItemTrade(['10x minecraft:emerald'], 'minecraft:stone_axe').amount(1);
    stoneAxe.enchantments('minecraft:fortune', 'minecraft:silk_touch', 'minecraft:unbreaking')
    stoneAxe.villagerExperience(20)

    const advStoneSword = VillagerUtils.createEnchantedItemTrade(['6x minecraft:emerald'], 'minecraft:stone_sword').amount(2, 4);
    advStoneSword.enchantments('minecraft:sharpness', 'minecraft:looting', 'minecraft:sweeping', 'minecraft:fire_aspect', 'minecraft:unbreaking')
    advStoneSword.villagerExperience(30)
    const advFlintKnife = VillagerUtils.createEnchantedItemTrade(['6x minecraft:emerald'], 'farmersdelight:flint_knife').amount(2, 4);
    advFlintKnife.enchantments('minecraft:sharpness', 'minecraft:looting', 'minecraft:sweeping', 'minecraft:unbreaking')
    advFlintKnife.villagerExperience(30)
    const advStoneHoe = VillagerUtils.createEnchantedItemTrade(['8x minecraft:emerald'], 'minecraft:stone_hoe').amount(2, 3);
    advStoneHoe.enchantments('minecraft:efficiency', 'minecraft:fortune', 'minecraft:silk_touch', 'minecraft:unbreaking')
    advStoneHoe.villagerExperience(30)
    const advStonePickaxe = VillagerUtils.createEnchantedItemTrade(['10x minecraft:emerald'], 'minecraft:stone_pickaxe').amount(2, 3);
    advStonePickaxe.enchantments('minecraft:efficiency', 'minecraft:fortune', 'minecraft:silk_touch', 'minecraft:unbreaking')
    const advStoneShovel = VillagerUtils.createEnchantedItemTrade(['10x minecraft:emerald'], 'minecraft:stone_shovel').amount(2, 3);
    advStoneShovel.enchantments('minecraft:efficiency', 'minecraft:fortune', 'minecraft:silk_touch', 'minecraft:unbreaking')
    const advStoneAxe = VillagerUtils.createEnchantedItemTrade(['10x minecraft:emerald'], 'minecraft:stone_axe').amount(2, 3);
    advStoneAxe.enchantments('minecraft:efficiency', 'minecraft:fortune', 'minecraft:silk_touch', 'minecraft:unbreaking')

    event.addTrade('toolsmith', 2, stoneSword);
    event.addTrade('toolsmith', 2, stoneHoe);
    event.addTrade('toolsmith', 2, flintKnife);
    event.addTrade('toolsmith', 3, stonePickaxe);
    event.addTrade('toolsmith', 3, stoneShovel);
    event.addTrade('toolsmith', 3, stoneAxe);
    event.addTrade('toolsmith', 4, advStoneSword);
    event.addTrade('toolsmith', 4, advStoneHoe);
    event.addTrade('toolsmith', 4, advFlintKnife);
    event.addTrade('toolsmith', 5, advStonePickaxe);
    event.addTrade('toolsmith', 5, advStoneShovel);
    event.addTrade('toolsmith', 5, advStoneAxe);
})