module.exports = function(request, response){
  let shouldFail = Math.random() < 0.75

  if (shouldFail){
    return response.send("Failed!")
  } else {
    return response.send("Succeeded!")
  }
}
