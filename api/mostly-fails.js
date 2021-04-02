module.exports = function(request, response){
  let shouldFail = Math.random() < 0.75

  if (shouldFail){
    return response.status(500).json({message: "Failure!"})
  } else {
    return response.status(200).json({message: "Success!"})
  }
}
