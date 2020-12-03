const katex = require("katex")

module.exports = function(request, response){
  try {
    let html = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">
      ${katex.renderToString(request.query.latex)}
    `
  
    return response.json({html})
  } catch(e) {
    return response.json({error: e})
  }
}