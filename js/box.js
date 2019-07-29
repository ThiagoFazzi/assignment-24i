class Box {
  constructor(value, className, poster, type, year, imdbID){
    this.className = className
    this.value = value
    this.poster = poster
    this.type = type
    this.year = year
    this.imdbID = imdbID
    this.isBoxVisible = false

    var el = document.createElement('div')
    el.setAttribute("class", `${className}`)
    el.setAttribute('id', `${this.imdbID}`)

    var details = document.createElement('div')
    details.setAttribute('class', 'details')

    var poster = document.createElement('img')
    poster.setAttribute("class", 'box-poster' )
    poster.setAttribute('src', `${this.poster}`)

    var title = document.createElement('p')
    title.setAttribute("class", 'box-title')
    title.innerHTML = `${this.value}`

    var type = document.createElement('p')
    type.setAttribute("class", 'box-type')
    type.innerHTML = `${this.type}`

    var year = document.createElement('p')
    year.setAttribute("class", 'box-year')
    year.innerHTML = `${this.year}`

    var group = document.createElement('div')
    group.setAttribute("class", 'box-group')

    var video = document.createElement('video')
    video.setAttribute("controls", true)
    video.setAttribute("width", 'auto')
    video.setAttribute("height", '300')

    var source = document.createElement('source')
    source.setAttribute("src", 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4')
    source.setAttribute("type", "video/mp4")

    video.append(source)

    group.append(
      poster,
      title,
      type,
      year
    )

    details.append(
      group,
      video
    )

    el.append(
      details
    )
    this.el = el
  }

  boxToggle = () =>{
    this.isBoxVisible = !this.isBoxVisible
    if(this.isBoxVisible){
      document.getElementById(`${this.imdbID}`).style.display = 'flex'
    }else{
      document.getElementById(`${this.imdbID}`).style.display = 'none'
    }
  }

}