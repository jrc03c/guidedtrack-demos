module.exports = function(request, response){
  let shouldFail = Math.random() < 0.75

  if (shouldFail){
    return response.status(500).send("Failed!")
  } else {
    return response.status(200).send("Succeeded!")
  }
}
