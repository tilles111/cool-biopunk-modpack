ItemEvents.modification(event => {
  event.modify('biomancy:primordial_core', item => {
    item.maxStackSize = 1
  })
})