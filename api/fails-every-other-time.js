let fs = require("fs")

module.exports = function(request, response){
  let shouldFail = JSON.parse(fs.readFileSync("should-fail.txt"), "utf8")

  if (shouldFail){
    return response.send("Failed!")
  } else {
    return response.send("Succeeded!")
  }

  shouldFail = !shouldFail
  fs.writeFileSync("should-fail.txt", JSON.stringify(shouldFail), "utf8")
}
