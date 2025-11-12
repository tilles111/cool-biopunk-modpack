ItemEvents.toolTierRegistry(event => {
  event.add('bone', tier => {
    tier.uses = 200
    tier.speed = 5
    tier.attackDamageBonus = 1.5
    tier.level = 1
    tier.enchantmentValue = 20
    tier.repairIngredient = '#kubejs:bone_materials'
  })

  event.add('living_bone', tier => {
    tier.uses = 200
    tier.speed = 5
    tier.attackDamageBonus = 1.5
    tier.level = 1
    tier.enchantmentValue = 20
    tier.repairIngredient = 'biomancy:flesh_bits'
  })
  event.add('biobrass', tier => {
    tier.uses = 500
    tier.speed = 7
    tier.attackDamageBonus = 2.5
    tier.level = 2
    tier.enchantmentValue = 18
    tier.repairIngredient = 'architects_palette:nether_brass_ingot'
  })

  event.add('living_biobrass', tier => {
    tier.uses = 500
    tier.speed = 7
    tier.attackDamageBonus = 2.5
    tier.level = 2
    tier.enchantmentValue = 18
    tier.repairIngredient = 'biomancy:flesh_bits'
  })
  
  event.add('chitinsteel', tier => {
    tier.uses = 1750
    tier.speed = 9
    tier.attackDamageBonus = 3.5
    tier.level = 3
    tier.enchantmentValue = 15
    tier.repairIngredient = 'architects_palette:sunmetal_brick'
  })

  event.add('living_chitinsteel', tier => {
    tier.uses = 1750
    tier.speed = 9
    tier.attackDamageBonus = 3.5
    tier.level = 3
    tier.enchantmentValue = 15
    tier.repairIngredient = 'biomancy:flesh_bits'
  })
})

StartupEvents.registry('item', event => {
  event.create('living_tool_smithing_template')

  event.create('bone_sword', 'sword').tier('bone')
    .tag('minecraft:swords')
    .tag('forge:tools/bone')
  event.create('bone_pickaxe', 'pickaxe').tier('bone')
    .tag('minecraft:pickaxes')
    .tag('forge:tools/bone')
  event.create('bone_shovel', 'shovel').tier('bone')
    .tag('minecraft:shovels')
    .tag('forge:tools/bone')
  event.create('bone_axe', 'axe').tier('bone')
    .tag('minecraft:axes')
    .tag('forge:tools/bone')
  event.create('bone_hoe', 'hoe').tier('bone')
    .tag('minecraft:hoes')
    .tag('forge:tools/bone')
  event.create('bone_knife', 'farmersdelight:knife').tier('bone')
    .tag('forge:tools/knives')
    .tag('forge:tools/bone')

  event.create('bone_shears', 'shears')
    .maxDamage(200)
    .tag('forge:tools/bone')
  event.create('bone_hammer')
    .maxDamage(1000)
    .parentModel('minecraft:item/handheld')
    .tag('forge:tools/hammers')
    .tag('forge:tools/bone')

  event.create('living_bone_sword', 'sword').tier('living_bone')
    .tag('minecraft:swords')
    .tag('forge:tools/living_bone')
  event.create('living_bone_pickaxe', 'pickaxe').tier('living_bone')
    .tag('minecraft:pickaxes')
    .tag('forge:tools/living_bone')
  event.create('living_bone_shovel', 'shovel').tier('living_bone')
    .tag('minecraft:shovels')
    .tag('forge:tools/living_bone')
  event.create('living_bone_axe', 'axe').tier('living_bone')
    .tag('minecraft:axes')
    .tag('forge:tools/living_bone')
  event.create('living_bone_hoe', 'hoe').tier('living_bone')
    .tag('minecraft:hoes')
    .tag('forge:tools/living_bone')
  event.create('living_bone_knife', 'farmersdelight:knife').tier('living_bone')
    .tag('forge:tools/knives')
    .tag('forge:tools/living_bone')

  event.create('biobrass_sword', 'sword').tier('biobrass')
    .tag('minecraft:swords')
    .tag('forge:tools/biobrass')
  event.create('biobrass_pickaxe', 'pickaxe').tier('biobrass')
    .tag('minecraft:pickaxes')
    .tag('forge:tools/biobrass')
  event.create('biobrass_shovel', 'shovel').tier('biobrass')
    .tag('minecraft:shovels')
    .tag('forge:tools/biobrass')
  event.create('biobrass_axe', 'axe').tier('biobrass')
    .tag('minecraft:axes')
    .tag('forge:tools/biobrass')
  event.create('biobrass_hoe', 'hoe').tier('biobrass')
    .tag('minecraft:hoes')
    .tag('forge:tools/biobrass')
  event.create('biobrass_knife', 'farmersdelight:knife').tier('biobrass')
    .tag('forge:tools/knives')
    .tag('forge:tools/biobrass')

  event.create('living_biobrass_sword', 'sword').tier('living_biobrass')
    .tag('minecraft:swords')
    .tag('forge:tools/living_biobrass')
  event.create('living_biobrass_pickaxe', 'pickaxe').tier('living_biobrass')
    .tag('minecraft:pickaxes')
    .tag('forge:tools/living_biobrass')
  event.create('living_biobrass_shovel', 'shovel').tier('living_biobrass')
    .tag('minecraft:shovels')
    .tag('forge:tools/living_biobrass')
  event.create('living_biobrass_axe', 'axe').tier('living_biobrass')
    .tag('minecraft:axes')
    .tag('forge:tools/living_biobrass')
  event.create('living_biobrass_hoe', 'hoe').tier('living_biobrass')
    .tag('minecraft:hoes')
    .tag('forge:tools/living_biobrass')
  event.create('living_biobrass_knife', 'farmersdelight:knife').tier('living_biobrass')
    .tag('forge:tools/knives')
    .tag('forge:tools/living_biobrass')

  event.create('chitinsteel_sword', 'sword').tier('chitinsteel')
    .tag('minecraft:swords')
    .tag('forge:tools/chitinsteel')
  event.create('chitinsteel_pickaxe', 'pickaxe').tier('chitinsteel')
    .tag('minecraft:pickaxes')
    .tag('forge:tools/chitinsteel')
  event.create('chitinsteel_shovel', 'shovel').tier('chitinsteel')
    .tag('minecraft:shovels')
    .tag('forge:tools/chitinsteel')
  event.create('chitinsteel_axe', 'axe').tier('chitinsteel')
    .tag('minecraft:axes')
    .tag('forge:tools/chitinsteel')
  event.create('chitinsteel_hoe', 'hoe').tier('chitinsteel')
    .tag('minecraft:hoes')
    .tag('forge:tools/chitinsteel')
  event.create('chitinsteel_knife', 'farmersdelight:knife').tier('chitinsteel')
    .tag('forge:tools/knives')
    .tag('forge:tools/chitinsteel')

  event.create('living_chitinsteel_sword', 'sword').tier('living_chitinsteel')
    .tag('minecraft:swords')
    .tag('forge:tools/living_chitinsteel')
  event.create('living_chitinsteel_pickaxe', 'pickaxe').tier('living_chitinsteel')
    .tag('minecraft:pickaxes')
    .tag('forge:tools/living_chitinsteel')
  event.create('living_chitinsteel_shovel', 'shovel').tier('living_chitinsteel')
    .tag('minecraft:shovels')
    .tag('forge:tools/living_chitinsteel')
  event.create('living_chitinsteel_axe', 'axe').tier('living_chitinsteel')
    .tag('minecraft:axes')
    .tag('forge:tools/living_chitinsteel')
  event.create('living_chitinsteel_hoe', 'hoe').tier('living_chitinsteel')
    .tag('minecraft:hoes')
    .tag('forge:tools/living_chitinsteel')
  event.create('living_chitinsteel_knife', 'farmersdelight:knife').tier('living_chitinsteel')
    .tag('forge:tools/knives')
    .tag('forge:tools/living_chitinsteel')

  event.create('stained_scalpel')
    .maxDamage(1000)
    .tag('kubejs:tools/scalpels')
})