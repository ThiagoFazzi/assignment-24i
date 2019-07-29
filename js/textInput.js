class Input {
  constructor(id, name, className){
    this.id = id
    this.name = name
    this.className = className

    var el = document.createElement('input')
    el.setAttribute("type", 'search')
    el.setAttribute("id", `${id}`)
    el.setAttribute("name", `${name}`)
    el.setAttribute("class", `${className}`)
    return el
  }

}