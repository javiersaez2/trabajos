tiempo = [
{Dia: "Miercoles, 13", cielo: "Chubascos", Temperatura: 9},
{Dia: "Jueves, 14", cielo: "Nublado",Temperatura: 12},
{Dia: "Viernes, 15", cielo: "Soleado",Temperatura: 15},
{Dia: "Sabado, 16", cielo: "Soleado",Temperatura: 11},
{Dia: "Domingo, 17", cielo: "Lluvia",Temperatura: 12},
{Dia: "Lunes, 18", cielo: "Lluvia",Temperatura: 24},
{Dia: "Martes, 19", cielo: "Lluvia", Temperatura: 9},
{Dia: "Miercoles, 20", cielo: "Soleado",Temperatura: 16},
{Dia: "Jueves, 21", cielo: "Nublado",Temperatura: 12},
{Dia: "Viernes, 22", cielo: "Lluvia",Temperatura: 16},
{Dia: "Sabado, 23", cielo: "Lluvia",Temperatura: 24},
{Dia: "Domingo, 24", cielo: "Nublado",Temperatura: 11},
{Dia: "Lunes, 25", cielo: "Lluvia",Temperatura: 11}
]


var i;
for (i = 0; i < tiempo.length;i++){
    if(tiempo[i].cielo  == "Lluvia", tiempo [i].Temperatura  == "24") {
    console.log (tiempo[i].Dia + " " + tiempo[i].cielo + " " + tiempo [i].Temperatura)} 
}
