ItemEvents.toolTierRegistry(event => {
  event.add('bone', tier => {
    tier.uses = 200
    tier.speed = 5
    tier.attackDamageBonus = 1.5
    tier.level = 1
    tier.enchantmentValue = 20
    tier.repairIngredient = '#kubejs:bone_material'
  })

  event.add('living', tier => {
    tier.uses = 250
    tier.speed = 6
    tier.attackDamageBonus = 2
    tier.level = 1
    tier.enchantmentValue = 22
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

  event.create('living_sword', 'sword').tier('living')
    .tag('minecraft:swords')
    .tag('forge:tools/living')
  event.create('living_pickaxe', 'pickaxe').tier('living')
    .tag('minecraft:pickaxes')
    .tag('forge:tools/living')
  event.create('living_shovel', 'shovel').tier('living')
    .tag('minecraft:shovels')
    .tag('forge:tools/living')
  event.create('living_axe', 'axe').tier('living')
    .tag('minecraft:axes')
    .tag('forge:tools/living')
  event.create('living_hoe', 'hoe').tier('living')
    .tag('minecraft:hoes')
    .tag('forge:tools/living')
  event.create('living_knife', 'farmersdelight:knife').tier('living')
    .tag('forge:tools/knives')
    .tag('forge:tools/living')
})