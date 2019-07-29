class Dock {
  constructor(className, id){
    this.className = className
    this.id = id

    var el = document.createElement('div')
    el.setAttribute("class", `${className}`)
    el.setAttribute("id", `${id}`)
    this.el = el
  }
}