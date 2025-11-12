StartupEvents.registry('item', event => {
    event.create('bottle_of_blood')
    event.create('copper_scrap')
    event.create('mineral_brick')
    event.create('biological_core')
      .texture('biomancy:item/tab_icon')

    event.create('crushed_chitin')
    event.create('crushed_iron_scrap')
    event.create('charcoal_dust')
        .tag('forge:dusts/charcoal')
    event.create('chitinsteel_grit')
    
    event.create('biobrass_plate')
        .tag('forge:plates/biobrass')
    event.create('biobrass_gear')
        .tag('forge:gears/biobrass')

    event.create('chitinsteel_plate')
        .tag('forge:plates/chitinsteel')
    event.create('chitinsteel_gear')
        .tag('forge:gears/chitinsteel')

    event.create('player_heart')
        .maxStackSize(1)
})

StartupEvents.registry('fluid', event => {
  event.create('blood')
    .thinTexture(0x790026)
    .bucketColor(0x790026)
    .displayName('Blood')
    
  event.create('organ_slurry')
    .thickTexture(0xb33e44)
    .bucketColor(0xb33e44)
    .displayName('Organ Slurry')
    
  event.create('rotten_organ_slurry')
    .thickTexture(0xa6543d)
    .bucketColor(0xa6543d)
    .displayName('Rotten Organ Slurry')
    
  event.create('alien_organ_slurry')
    .thickTexture(0x26524f)
    .bucketColor(0x26524f)
    .displayName('Alien Organ Slurry')
    
  event.create('toxic_meat_slurry')
    .thickTexture(0x394a01)
    .bucketColor(0x394a01)
    .displayName('Toxic Meat Slurry')
})