let shouldFail = true

module.exports = function(request, response){
  if (shouldFail){
    return response.send("Failed!")
  } else {
    return response.send("Succeeded!")
  }

  shouldFail = !shouldFail
}
