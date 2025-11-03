ItemEvents.toolTierRegistry(event => {
  event.add('bone', tier => {
    tier.uses = 200
    tier.speed = 5
    tier.attackDamageBonus = 1.5
    tier.level = 1
    tier.enchantmentValue = 20
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
})