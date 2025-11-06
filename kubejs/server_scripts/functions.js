// priority 1000

function item_name(item) {
    return Item.of(item).id.split(':')[1]
}
function item_mod_name(item) {
    return Item.of(item).id.split(':')[0]
}

function fluid_name(fluid) {
    return Fluid.of(fluid).id.split(':')[1]
}