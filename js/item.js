class Item {
  constructor(value, className, poster, type, year, imdbID){
    this.className = className
    this.value = value
    this.poster = poster
    this.type = type
    this.year = year
    this.imdbID = imdbID

    var el = document.createElement('li')
    el.setAttribute("class", `${className}`)

    var poster = new Poster(this.poster, 'poster')

    var group = document.createElement('div')
    group.setAttribute("class", 'item-group')

    var title = document.createElement('p')
    title.setAttribute('class', 'item-title')
    title.innerHTML = this.value

    var boxdetail = new Box(this.value, 'box-detail', this.poster, this.type, this.year, this.imdbID)

    group.append(poster.el, title)

    el.append(group, boxdetail.el)

    el.addEventListener('click', () => {
      boxdetail.boxToggle()      
    })   

    this.el = el
  }

}