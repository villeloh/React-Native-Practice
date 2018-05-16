export default (url, customHeaders = {}) => {

  const defaultHeaders = {

    Method: 'GET',
    Accept: 'application/json',
    'Content-type': 'application/json' // hipsut hyphenin takia
  }

  // add all key-value pairs to new object!
  const headers = {
    ...defaultHeaders,
    ...customHeaders
  }

  return fetch(url, headers)
  .then(response => { 
    
    if (response.status >= 400) {
        Promise.reject(null, response.status)
        // OR: throw new Error(null, response.status) // params might be incorrect
    }
    return response.json() })
  .catch((error, statusCode) => {
    // do stuff with statusCode
  })
}
