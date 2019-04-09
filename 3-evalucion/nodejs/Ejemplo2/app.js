var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hola');
});



tiempo = [
  {Dia: "Miercoles", Nº: "13", cielo: "Chubascos", Temperatura: 9},
  {Dia: "Jueves", Nº: "14", cielo: "Nublado",Temperatura: 12},
  {Dia: "Viernes", Nº:"15", cielo: "Soleado",Temperatura: 15},
  {Dia: "Sabado", Nº:"16", cielo: "Soleado",Temperatura: 11},
  {Dia: "Domingo", Nº:"17", cielo: "Lluvia",Temperatura: 12},
  {Dia: "Lunes", Nº:"18", cielo: "Lluvia",Temperatura: 24},
  {Dia: "Martes", Nº:"19", cielo: "Lluvia", Temperatura: 9},
  {Dia: "Miercoles", Nº:"20", cielo: "Soleado",Temperatura: 16},
  {Dia: "Jueves", Nº:"21", cielo: "Nublado",Temperatura: 12},
  {Dia: "Viernes", Nº:"22", cielo: "Lluvia",Temperatura: 16},
  {Dia: "Sabado", Nº:"23", cielo: "Lluvia",Temperatura: 24},
  {Dia: "Domingo", Nº:"24", cielo: "Nublado",Temperatura: 11},
  {Dia: "Lunes", Nº:"25", cielo: "Lluvia",Temperatura: 11}
  ]
  
  app.get('/web', function (req, res) {

  var r=[];
  for (var i = 0; i < tiempo.length;i++
    ){
      if (tiempo[i].Dia  == "Sabado") {
        r[r.length] = (tiempo[i].Dia + " " + tiempo[i].Nº + " " + tiempo[i].cielo + " " + tiempo [i].Temperatura)
        
       
       
  }}
  res.send(r)
});
  


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});