const { random, seed } = require("@jrc03c/js-math-tools")

module.exports = function (request, response) {
  if (typeof request.query.seed !== "undefined") {
    const s = parseFloat(request.query.seed)

    if (isNaN(s)) {
      return response
        .status(400)
        .send(
          "ERROR: Malformed request. The '/get-random-number' endpoint takes an optional query string parameter called 'seed' that must have a numerical value. For example: https://guidedtrack-demos.vercel.app/api/get-random-number/?seed=12345"
        )
    }

    seed(s)
  }

  return response.status(200).send(random())
}
