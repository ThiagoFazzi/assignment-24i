class Poster {
  constructor(src, className){
    this.className = className
    this.src = src

    var el = document.createElement('img')
    el.setAttribute("class", `${className}`)
    el.setAttribute("src", `${src}`)
    this.el = el
  }
}