// Easy Going***********************************************8
// for (let i =0; i <=20; i++){

// console.log(i)


// }
// Get Even*****************************************************
// for (let i=0; i <= 200; i++){

// console.log(i)

// }
//Fizz Buzz*****************************************************
//  function brrR(){
//     for (let r = 1; r <= 100; r++) {
//             if (r % 5 === 0) {
//                 console.log('Buzz')
//             }
//             else if (r%3 === 0) {
        
        
//                 console.log('Fizz')
//             }
        
        
//             else if (r % 5 === 0 && r%3 === 0 ){
//                 console.log(r)
//             }
//             else{
//                 console.log(r)
//             }

//         }
//     }

//     console.log(brrR())

//Wild Wild Life************************************************8

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory" ]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant", 500, "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]

// plantee[2] = 21
// wolfy[3] = "Gotham City"
// dart[4] = "Hawkins"
// wolfy[0] = "Gameboy"

// Yell at the Ninja Turtles
// let turtles = ["Donatello", "Leonardo", "Raphael", "Michaelengo"]

// for (let i = 0; i < turtles.length; i++){
// let turtles2 = turtles[i]
// console.log(turtles2.toUpperCase())

// }

//Methods Revisited**********************************************************************************************************888

// const favMovies = ["Jaws", "The Fellowship of the Ring", "How\'s Moving Castle", "Titanic", "Django Unchained"]

// console.log(favMovies[4])
// favMovies.sort()
// favMovies.push("Guardians of the Galaxia")
// console.log(favMovies)
// console.log(favMovies.reverse())
// favMovies.shift()
// console.log(favMovies.unshift())
//  console.log(favMovies)
//  favMovies.splice([4])
//  console.log(favMovies)
//  favMovies.slice(1)
//  console.log(favMovies.slice(2))

// const whereIsWaldo = [["Timmy", "Frank"],"Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"]
//                     ["Petunia"["Backed Goods, Waldo"]]]

//  whereIsWaldo.splice(1,1)  
//  whereIsWaldo[1][2] = 'No one '    
// console.log(whereIsWaldo[2][1][1])
//Exited Kitten******************************************************************************
// const catTalk = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', '...why does the red dot always get away...']
// for (let i = 0; i <= 20; i++){
//     if (i % 2 === 0) {
//         let talk = Math.floor(Math.random() * catTalk.length)
//         console.log(catTalk[talk]);
//     } else {
//     console.log('Love me, pet me! HSSSSSS!')
//     }
// }
// Find the  Median************************************
// const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];

// console.log(nums.length);
// let med = Math.floor(nums.length/2);
// nums.sort();
// console.log(nums[med]);

// // Return of the 
// const krystynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
// ];
// const thomsCloset = [
//     [
//         "grey button-up",
//         "dark grey button-up",
//         "light blue button-up",
//         "blue button-up",
//     ], [
//         "grey jeans",
//         "jeans",
//         "PJs",
//     ], [
//         "wool mittens",
//         "wool scarf",
//         "raybans"
//     ]
// ];
// Alien Attire***************************************************************88
// const krystynsShoe = krystynsCloset.shift();

// thomsCloset[2].push(krystynsShoe);

// console.log(thomsCloset)

//Dress Up******************************************************************************8
// const krystynsFits = Math.floor(Math.random() * krystynsCloset.length, 1);
// const thomFits = Math.floor(Math.random() * thomsCloset[0].length, 1);

// for (let i = 0; i < 3; i++) {
// console.log("Krystyn's outfit is: " + krystynsCloset[krystynsFits] + ", " + krystynsCloset[krystynsFits] + ", and " + krystynsCloset[krystynsFits]);
// }
//Dirty Laundry*********************************************************************
// for (let i = 0; i < 7; i++) {
//     console.log("WHIRR: Now washing "+krystynsCloset[i]);
//     }
// Inventory**************************************************************************
// console.log(thomsCloset[0])
// console.log(thomsCloset[1])
// console.log(thomsCloset[2])