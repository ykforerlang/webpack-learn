/**
 * Created by yk on 2016/4/19.
 */
require('./main.css')

$(document).ready(function() {
    var app = document.createElement("div")
    app.innerHTML ='<h1>Hello World</h1>'

    document.body.appendChild(app)
    $('h1').greenify()
})