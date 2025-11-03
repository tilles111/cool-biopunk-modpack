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
})

StartupEvents.registry('item', event => {
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
})