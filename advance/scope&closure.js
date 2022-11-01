// global scope
// Local scope
// Lexical scope



// function localScope() {
//   let a = 10
//   function localScope2() {
//     let b = 10
//     console.log(a + b)
//   }
//   return localScope2
// }

// let returned = localScope()
// returned()

// Closer

// let a = 10

// function sum() {
//   let b = 20
//   return function sum() {
//     let c = 20
//     return function sum() {
//       return a + b + c
//     }
//   }
// }

// console.dir(sum()())

// let s = 10

// function sum() {
//   console.log(s)
// }

// console.dir(sum)


// function stopWatch() {
//   var startTime = Date.now()
//   return function diley(){
//     console.log(Date.now() - startTime)
//   }
// }
// var timer = stopWatch()

// for (var i = 0; i < 10000000; i++){
//   Math.random * 10000000
// }
// timer()

// for (var i = 0; i < 3; i++){
//   function myFunc() {
//     console.log(i)
//   }
//   console.dir(myFunc)
//   setTimeout(myFunc, 3000)
// }
