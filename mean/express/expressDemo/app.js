const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
console.log(__dirname);
app.use(express.static(__dirname + '/static/'));

app.get('/:c', (request, response) => {
  const { c } = request.params; 
  const c2 = request.params['c'];
  console.log(request.params);
  console.log(c);
  const message = "a message from the server";
  response.render("index", {a_message: message});
})

app.get('/test', (request, response) => {
  response.send("message from test route");
})

app.listen(8888, () => {
  console.log('listening on port 8888');
})