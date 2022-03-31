// ENUNCIADO
// Un maestro desea saber que porcentaje de hombres y que procentajes de mujeres hay en un grupo de estudiantes.

// Numero total de los etudiantes 100%
// Cuantas mujeres hay

//   10      22  = 0.45 * 100 = 45.45
// mujer / total = 

// 22    100%
// 10     x   =  45.45

let total = Number(prompt("Ingrese el numero total de estudiantes"))
let girls = Number(prompt("Ingrese la cantidad de Chicas"))

let porChicas = girls * 100 / total

console.log("el porcentaje de chicas es " + porChicas + "%")
console.log("el porcentaje de chicos es " + (100 - porChicas) + "%")
