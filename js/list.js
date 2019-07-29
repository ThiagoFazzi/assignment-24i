class List{
  constructor(className){
    this.className = className
    var el = document.createElement('ul')
    el.setAttribute("class", `${this.className}`)
    this.el = el
    this.pages = 1
    this.currentPage = 1
  }

  addItem = (item) => {
    return this.el.append(item)
  }

  fetchItems = (title) => {
    if(this.currentPage <= this.pages ){
      if(title){
        fetchMovies(`http://www.omdbapi.com/?apikey=338f9a63&type=movie&s=${title}&page=${this.currentPage}`)
        .then(resp => {
          if(this.pages > 1){
            resp.Search.map(item => {
              var itemList = new Item(item.Title, 'item', item.Poster, item.Type, item.Year, item.imdbID)
              return this.addItem(itemList.el)
            })
  
          } else {
              this.pages = (resp.totalResults /10).toFixed(0)
              resp.Search.map(item => {
                var itemList = new Item(item.Title, 'item', item.Poster, item.Type, item.Year, item.imdbID)
                return this.addItem(itemList.el)
              })
          }
          this.currentPage ++
        }).catch(error => {
          throw new Error('Something gone wrong!, try again')
        })
      }
    }
  }
  
  clearList = () => {
    let listItems = document.getElementsByTagName('li')
    for (var i = listItems.length -1; i >= 0; i--){
      listItems[i].remove()
    }
  }

}

