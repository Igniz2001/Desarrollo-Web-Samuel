console.log("Hola Mundo")
console.log("---------");

const edad = 55;
let nombre = "Juan"
const esEstudiante = false
const altura = 1.70
const semestres = []
const materiaPreferida = {nombre:"Calculo",id:0}
const universidad = null
const carrera = undefined;
console.log( "Tipo de Dato es: " + typeof nombre)
console.log( "Tipo de Dato es: " + typeof edad)

console.log("---Conversion de string a number---")
const precioMatricula="5000000.5"
console.log(parseInt(precioMatricula))
console.log(parseFloat(precioMatricula))

console.log("---- == ----");
console.log("Doble igual: "+"45" == 45);
console.log("triple igual: "+"45" === 45);

console.log("---concatenacion---")
console.log(nombre + " " + apellido);
console.log('${nombre}$ ${apellido}$');

console.log("---- operador ternario (exp ? verdadero : falso ) ----");
console.log(edad >= 18 ? "Es mayor de edad" : "es menor de edad");
let condition = edad > 18
if (condition){}
if (condition){}else{}

const dia = "LUNESJASD"
switch (dia) {
    case "LUNES":
        console.log("LUNES");
    case "MARTES":
        console.log("MARTES");
    default:
        console.log("NO ES VALIDO");
        break;
}

console.log("---ciclos---")
for(let index = 0; index < 18; index++){

}

for(const item of [1,2,3]){
    console.log(item)
}

for(const key in materiaPreferida){
    console.log(key)
}

[1,2,3].forEach(element =>{
    console.log(element)
});

console.log("---FUNCIONES---");

function imprimirNombre(nombre){
    console.log(nombre);
}

imprimirNombre(nombre)

const imprimirNombreApellido = (nombre,apellido) =>{
    console.log('${nombre}${apellido}')};

imprimirNombreApellido(nombre,apellido)


const crearNombreCompleto = (nombre,apellido) => {
    console.log("---GLOBAL SCOPE FAKE---");
    console.log(nombre,apellido);
    let name = nommbre
    if (nombre.legth > 3) {
        let name = nombre[0] + " " + apellido
        console.log("94 "+name);
    }
    console.log("92 "+name);
}

crearNombreCompleto(nombre,apellido)

const estudiantes=[]


estudiantes.push({"nombre":"Juan",id:123})
estudiantes.push({"nombre":"Emmanuel",id:1234})

estudiantes.forEach((x) => console.log(x.nombre))
for(let i= 0; i < estudiantes.length; i++){
    if(estudiantes[i].nombre == "Emmanuel"){
        console.log(estudiantes[i].id);
    }
}
const emmanuel = estudiantes.find(x=>x.nombre == "Emmanuel")
console.log(estudiantes);

const emmanueles = estudiantes.filter(x=>x.nombre == "Emmanuel")
console.log(estudiantes);


estudiantes = estudiantes.map(x=>{return{...x,edad:null}})
console.log(estudiantes);