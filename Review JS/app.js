// Variables and Datatypes

// A Q+ A
/* 1.- How do we assign a value to a variable?

We declare the value ex: 
var = git

*/

/*2  How do we change the value of variable?
We have to de declare de value using let or var and then redeclaring de value below 

for example:

let A = 'jUAN'
let A = 'PEPE'
*/
/*3  How do we  assign an existing variable to a new variable?
using an assigment operator

for example:
let A
 A = 'jUAN'
let B 
B = A 
*/

/*4 Remind me, what are declare, assign, and define
Declare: let A
Assign: A = 'Rose'
Define = is an string


*/

/*5 What is pseudocoding and why should you do it? 
pseudo coding is coding without any language in specefic is just write arguments
based in logic that can later be traaslated in the solution of a problem using an
actual coding language


*/

/*6 What percentage of the time shoul;d be spent thinking about how you are going to solve the a problem vs actually typing in code to solve it
80% thinking in how to solve it 
20% wrtting actual coding

*/

// B.Strings

// let firstVariable = 'Hello World'
// firstVariable = 15

// secondVariable = firstVariable
// secondVariable = 'Jauan'
// console.log(secondVariable)

// let yourName = "Daniel"

// console.log('Hello, my name is '+ yourName)

//C. Booleans
// const a =4;
// const b = 53;
// const c =57;
// const d = 16;
// const e = 'Kevin'

// console.log(a!=b);
// console.log(c!=d);
// console.log('Kevin' === e);
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false === false);
// console.log(e==='Kevin');
// console.log(a !=b !=c);
// console.log(a===a !=d);
// console.log(48 !== '48');

//D The farm

// let animal = 'cow'

// if(animal === 'co'){
// console.log('mooooo')

// }else{
// console.log('You are not a cow')

// }

// E. Driver's Ed 

// let age = 34

// if (age>= 16){
//     console.log('Here are the keys')

// }
// else {
// console.log('Sorry you are too young')

// II. Loops ************************************************************
//A. The Basics
//1
// for (let i = 0; i <= 10; i++) {

//     console.log(i)
// }
//2 
// for (let n = 10; n <= 400; n++) {

//     console.log(n)
// }
//3
// for (let j = 12; j <= 400; j++) {
//     if (j % 3 === 0)
//         console.log(j)
// }
//B. Get Even

// for (let t = 1; t <= 100; t++) {
//     if (t % 2 === 0) {
//         console.log(t + ' is even number')
//     } else {
//         console.log(t)
//     }
// }

//C Give me Five 
// for (let r = 1; r <= 100; r++) {
//     if (r % 5 === 0) {
//         console.log('I found a ' + r + ' High five!')
//     }
//     else if (r%3 === 0) {


//         console.log('I found a ' + r + ' Three is a crowd!')
//     }


//     else {
//         console.log(r)
//     }
// }
//D Savings account
// let nums = [1,2,3,4,5,6,7,8,9,10]
// let  bankAccount= 0 
// for (let g = 1; g <= nums.length;g++){

// bankAccount += g

// }

// console.log(bankAccount)


// let  pay= 0 
// for (let t = 1; t <= 100; t++){

// pay += t*2

// }

// console.log(pay)

// Arrays & Control Flow 

//1 What are the things in an Array called? 
// Elements 

//2 Do Arrays guarantee those things will be in order? 

//Yes*** ask just in case

// 3 What real-life thing could you model with an array? 
// A list of employees

//B. Easy Does it
//  let arr = ['q', 'b', 'c']

//c. Accesing Elements 

//  const randomThings = [1, 10, 'Hello', true]

//1 How do you acces the first elemnt in the array 

// console.log(randomThings[0])

//2 Change the value of 'Hello' to 'World'

// randomThings[2] = 'World'

//3console.log(randomThings)

//D. Change Values

// const ourClass = ['Slaty', 'Zoom', 'Sardine', 'Slack', 'Github']
// 1 Acces 3 item
// ourClass[2] 

//2 change value
// ourClass[4] = 'Octotat'

//3 Add new Element

// ourClass[5] = 'CLoud City'

// console.log(ourClass)

// E. Mix Up

// let myArray = ['Bob Marley',5,10, 500, 20, 'Aegon','Juan']

// myArray.reduce[6]

// console.log(myArray.reverse())

//the array mutated because we were able to change the array in something different.
//reverse() does not return anything for itself. however it returns sooemthing when combined with 
//console.log

//F. Biggie Smalls
// number = 120
// if(number<100){
//     console.log('little number')

// }else {
// console.log('big number')

// }

//G. Monkey in the Middle 
// number = 3
//     if(number<5){
//         console.log('little number')

//     }else if(number > 10){
//     console.log('big number')

//     }

// H. What it is in your closet?

// const kristyCloset = [
//     'left shoe',
//     'cowboy boots',
//     'right sock',
//     'GA hoodie',
//     'green pants',
//     'yellow knit hat',
//     'marsmallow peeps',
// ];

// const thomsCloset = [
//     [
//         'grey button-up',
//         'dark grey button-up',
//         'light blue button',
//         'blue button-up',
//     ], [

//         'grey jeans',
//         'jeans',
//         'PJs',],
//     [
//         'wool mittens',
//         'wool scarf',
//         'raybans'

//     ]

// ];
//1
// console.log('Krysty is rocking that ' + kristyCloset[2] + ' today!')
//2

// kristyCloset.splice(6,0,'raybans')


//3 

// kristyCloset[5] = 'stained knit hat'
// console.log(kristyCloset)
//4, 5 ,6

// thomsCloset[0][0]
// thomsCloset[1][0]
// thomsCloset [2][1]
//7
// console.log('Thom is looking fierce in '+thomsCloset[1][0]+' '+thomsCloset[2][0]+' and '+thomsCloset [2][1])
 //8
  
//  thomsCloset[1][2] = 'Footie Pajamas'
//  console.log(thomsCloset)

//IV. Functions

//A 

// function printGreeting(name){
// return console.log('Hello ' + name)

// }

// printGreeting('Pedro')

//B
// function printCool (name){

// return console.log(name+ ' is cool')

// }

// printCool('Jeff')

//C 

// function calculateCube(num){

// return console.log( num*num*num)

// }

// calculateCube(8)

//D isVowel

// function isVowel(letter){
// let vowel = ['a', 'e', 'i', 'o', 'u','A', 'E','I','O','U']
//     for(let i=0;i <vowel.length; i++ ){
// if(letter === vowel[i]){
// return console.log(true)

// }else {
// return console.log(false)
// }

// }
// }

// isVowel('a')

//E getTwoLengths

// function getTwoLengths(length1, length2){
//     let arr = []
// length1 = length1.length 

// length2 = length2.length 
//  arr=[length1, length2]

//  return console.log(arr)

// }

// getTwoLengths('jose', 'hrctor')

//F getMultipleLenghts

// function multipleLengths(word){
//  const   newword = []
// for(let i = 0; i < word.length ; i++){

//     newword.push(word[i].length)
// }

//  return newword

// }

// console.log(multipleLengths(['jose', 'hrctor','l,ld,cld,']))

//G maxofThree 

// function maxofThree(a,b,c){

//     if (a>=b && a>=c){
// return a 
   
//     }else if(b>=a && b>=c){
//     return b 
//     }
// else{
// return c

// }
// }

// console.log(maxofThree(98,87,114))

//H.printLongesWord
// function findLongestWord(str =string.split('') ) {
   
//    let longest = 0;
//    let longestword = null
// for (let i = 0; i < str.length; i++){
// if( longest < str[i].length){
//     longest = str[i].length
//     longestword =str[i]

// }}
// return longestword
 
// }  
//   console.log(findLongestWord("My name is Jeiueicneiun"))

//  function longestWord(str) {
//     let string = str.split(" ");
//     let longest = 0;
//     let longestword = null; // null means the intentional absense of qny object value
//     for (let i = 0; i < string.length; i++) {
//       if (longest < string[i].length) {
//         longest = string[i].length;
//         longestword = string[i];
//       }
//     }
//     return longestword;
//   };
   
//   console.log(
//     longestWord(
//       "My name is Juan Andrade a student learning how to programing "
//     )
//   );

//Objects
//A. Make a user object
// const  user=  {
// name: "Juan",
// email: 'jr@gmail.com',
// age : 23,
// purchased: [],

// }
//  //B. Update the user 
//  user.email = "to@hotmail.com"

//  user.age++
 
 

//  //C. Adding Key  and Values

//  user.location = 'Quito'


//  //D. Shopaholic!!

// user.purchased.push('carbohydrates')
// user.purchased.push('peace of mind')
// user.purchased.push('Merino jodhpurs')
// console.log(user.purchased[2])

// //E. Object-within-object

// user.friend = {
// name: 'Mark',
// age: 42,
// location: 'Aruba',
// purchased: [],
// }

// console.log(user.friend.name)
// console.log(user.friend.location)
// user.friend.age = 55
// user.friend.purchased.push('The One Ring')
// user.friend.purchased.push('A latte')
// console.log(user.friend.purchased[1])

// //F. Loops 
// let r=['']
//  for(let i=0; i <user.purchased.length; i++){
// r = user.purchased[i]
// console.log(r)
//  }

//  let j=['']
//  for(let i=0; i <user.friend.purchased.length; i++){
// j = user.purchased[i]
// console.log(j)
//  }
//  //G. Functions can operate objects
//  function updateUser(){

//     user.age++
//     user.name.toUpperCase()

//  }

// updateUser();
// console.log(user)

// function oldAndLoud(user) {
// person = user
// user.age++
// console.log(user.name.toUpperCase())
// }

// oldAndLoud(user)
// console.log(user)
// user.name.toUpperCase()
// console.log(user)