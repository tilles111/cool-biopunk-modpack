ItemEvents.toolTierRegistry(event => {
  event.add('bone', tier => {
    tier.uses = 200
    tier.speed = 5
    tier.attackDamageBonus = 1.5
    tier.level = 1
    tier.enchantmentValue = 20
    tier.repairIngredient = 'minecraft:bone'
  })

  event.add('living', tier => {
    tier.uses = 250
    tier.speed = 6
    tier.attackDamageBonus = 2
    tier.level = 1
    tier.enchantmentValue = 22
    tier.repairIngredient = 'minecraft:bone'
  })
})

StartupEvents.registry('item', event => {
  event.create('bone_sword', 'sword').tier('bone')
  event.create('bone_pickaxe', 'pickaxe').tier('bone')
  event.create('bone_shovel', 'shovel').tier('bone')
  event.create('bone_axe', 'axe').tier('bone')
  event.create('bone_hoe', 'hoe').tier('bone')
  event.create('bone_knife', 'farmersdelight:knife').tier('bone')
    .tag('forge:tools/knives')

  event.create('living_sword', 'sword').tier('living')
  event.create('living_pickaxe', 'pickaxe').tier('living')
  event.create('living_shovel', 'shovel').tier('living')
  event.create('living_axe', 'axe').tier('living')
  event.create('living_hoe', 'hoe').tier('living')
  event.create('living_knife', 'farmersdelight:knife').tier('living')
    .tag('forge:tools/knives')
})