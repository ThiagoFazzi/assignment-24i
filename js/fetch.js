const httpReq = new XMLHttpRequest()

const fetchMovies = url => {
  return new Promise((resolve, reject) => {
  httpReq.open('GET', url)

  httpReq.onload = () => {
    if (httpReq.status === 200) {
      resolve(JSON.parse(httpReq.responseText))
    } else {
      reject(Error(httpReq.status))
    }
  }

  httpReq.send()
  })
}