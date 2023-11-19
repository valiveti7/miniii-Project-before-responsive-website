let accordianInfo = [1, 2, 3];

openedItem = 0
function whichItem(id) {
  if (this.openedItem == id) {
    document.getElementById(id).classList.remove('open')
  } else {
    for (let item of accordianInfo) {
      if (item == id) {
        this.openedItem = item
        document.getElementById(item).classList.add('open')
      } else {
        document.getElementById(item).classList.remove('open')
      }
    }
  }
}