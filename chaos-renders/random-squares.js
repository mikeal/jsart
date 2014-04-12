var keycode = require('keycode')
  , chaosjs = require('../../chaosjs')
  ;

window.onload = init

function init() {

  var chaos = chaosjs()

  document.body.addEventListener("keyup", function(event) {
    var key = keycode(event.keyCode)
    if (key === 'space') draw()
    else if (key === 'p') chaos.popImage()
  })

  function draw() {
    var x = Math.random() * (chaos.width - 100)
      , y = Math.random() * (chaos.height - 100)
      , w = 20 + Math.random() * 100
      , h = 20 + Math.random() * 100
      , r = Math.floor(Math.random() * 256)
      , g = Math.floor(Math.random() * 256)
      , b = Math.floor(Math.random() * 256)
      ;

    chaos.context.fillStyle = "rgb(" + r + "," + g + "," + b + ")"
    chaos.context.fillRect(x, y, w, h)
  }
}
