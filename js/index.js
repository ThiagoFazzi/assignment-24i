var app

window.onload = () => {
  app = document.getElementById('app')
  start()
}

function start() {
  var searchBar = new SearchBar(null, null, 'search-bar')
  var textInput = new Input('text-input', 'text-input', 'text-input')
  var dock = new Dock('dock', 'dock')
  let list = new List('list')
  var button = new Button('button', 'Search', 'button')

  searchBar.append(textInput, button.el)

  button.addSearchEvent(list)

  dock.el.append(list.el)

  app.append(searchBar, dock.el)

  document.addEventListener('scroll', () => {
    if (document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight) {
      list.fetchItems(document.getElementById('text-input').value)
    }
  })
}
