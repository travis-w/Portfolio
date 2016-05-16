// CSS
require('./scss/main.scss');

// Elm
var Elm = require('./Main.elm')
Elm.Main.embed(document.getElementById('container'));
