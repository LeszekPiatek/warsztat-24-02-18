console.log('Hello Leszek!')

//primitives

var textVariable = "Mateusz"

var numberVariable = 555

//true || false
var boolVariable = true

//zawsze null 
var nullVariable = null

//zawsze undefined
var undefinedVariable = undefined

console.log(textVariable)
console.log(numberVariable)
console.log(boolVariable)
console.log(nullVariable)


//objects

var simplestObject = {
    name: "Leszek",
    lastname: "Piatek"
}
console.log(simplestObject)

var nestedObject = {
    name: "car",
    cartype: {
        brand: "Audi",
        type: "A6"
    }
}
console.log(nestedObject)
console.log(nestedObject.cartype.brand)


//arrays (tablice)

var simpleArray = [
    1, 
    2, {
        tablicawtablicy: "a"
    },
    3, 
    4, 
    'tekst']
console.log(simpleArray)
console.log(simpleArray[4])