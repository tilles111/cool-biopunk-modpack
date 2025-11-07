StartupEvents.registry('item', event => {
    event.create('bottle_of_blood')
    event.create('copper_scrap')
    
    event.create('biobrass_plate')
        .tag('forge:plates/biobrass')
    event.create('biobrass_gear')
        .tag('forge:gears/biobrass')

    event.create('chitinsteel_plate')
        .tag('forge:plates/chitinsteel')
    event.create('chitinsteel_gear')
        .tag('forge:gears/chitinsteel')
})