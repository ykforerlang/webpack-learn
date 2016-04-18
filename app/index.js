/**
 * Created by yk on 2016/4/12.
 */

var sub = require("./sub")

require('./main.css')

var app = document.createElement("div")
app.innerHTML = "<h1>hello world</h1>"
app.appendChild(sub())
document.body.appendChild(app)
$('body').append('<p> look at me</p>')