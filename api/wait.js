module.exports = function (request, response) {
  const ms = parseInt(request.query.ms)
  setTimeout(() => response.send(true), ms)
}
