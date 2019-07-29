class Button {
  constructor(id, value, className) {
    this.id = id
    this.value = value
    this.className = className

    var el = document.createElement('input')
    el.setAttribute('type', 'button')
    el.setAttribute('id', `${id}`)
    el.setAttribute('value', `${value}`)
    el.setAttribute('class', `${className}`)
    this.el = el
  }

  addSearchEvent = list => {
    this.el.addEventListener('click', () => {
      list.clearList()
      return list.fetchItems(document.getElementById('text-input').value)
    })
  }
}
