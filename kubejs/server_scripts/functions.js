// priority 1000

function item_name(item) {
    return Item.of(item).id.split(':')[1]
}