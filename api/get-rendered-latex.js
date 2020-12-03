const katex = require("katex")
const storedSecret = process.env.GT_SECRET

module.exports = function(request, response){
  try {
    let receivedSecret = request.headers.secret

    if (receivedSecret !== storedSecret) return response.json({error: "Incorrect secret!"})

    let html = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">
      ${katex.renderToString(request.query.latex)}
    `
  
    return response.json({html: html.trim()})
  } catch(e) {
    return response.json({error: e})
  }
}