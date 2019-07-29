class SearchBar {
  constructor(id, name, className){
    this.id = id
    this.name = name
    this.className = className

    var el = document.createElement('div')
    el.setAttribute("id", `${id}`)
    el.setAttribute("name", `${name}`)
    el.setAttribute("class", `${className}`)
    return el
  }
}