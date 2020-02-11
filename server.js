const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get('/message', function(req, res) {
  console.log(req.headers);
  res.header({
    'custom-header': 'Nuestro valor personalizado',
  });
  res.send('Hola desde get');
});

router.post('/message', function(req, res) {
  console.log(req.query);
  console.log(req.body);
  //res.send('Mensage' + req.body.text + ' añadido correctamente');
  res.status(201).send({
    error: '',
    body: 'Creado correctamente',
  });
});

// app.use('/', function(req, res) {
//   res.send('Hola');
// });

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');
