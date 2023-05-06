module.exports = function (request, response) {
  const ms = parseInt(request.query.ms)

  if (isNaN(ms)) {
    return response
      .status(400)
      .send(
        "This endpoint requires a query string parameter called 'ms' with a numerical value. To wait for 5 seconds, for example, use: https://guidedtrack-demos.vercel.app/api/wait/?ms=5000"
      )
  } else {
    return setTimeout(() => response.send(true), ms)
  }
}
