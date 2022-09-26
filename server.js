const express = require('express');
const app = express();
const port = 3000;
let bottles = 99;

app.get('/', (req, res) => {
// res.send(`<h1> Welcome to Take one Down and Pass It Around App`)
res.send(`<h1> Welcome to Take one Down and Pass It Around App <br> </br> <h1>${bottles} bottles of water on the wall </h1> <br> </br> <a href=/98> take one down, pass it around </a>`)
})

app.get('/:number_of_bottles', (req, res) => {
    // res.send(number[req.params.index]);
    // for (let i = 99; i <= 99; i--){
    //     // res.send(`<h1>There are ${i} bottles left <h1/>`)
    //       if  (i >0){

    //         res.send(`<h1>There are ${i} bottles left <h1/>`)
    //       }else{
    //             res.send(`There are no more bottles to drink`)
    //       }
    // }
    // res.send('<h1></h1>')

    console.log(req.params.number_of_bottles)
if(req.params.number_of_bottles == 0){
    res.send(`<h1>${req.params.number_of_bottles} bottles of water on the wall </h1><br> </br> <a href="/">restart</a>`)
}else if(req.params.number_of_bottles>0 && req.params.number_of_bottles < 100){
    res.send(`<h1>${req.params.number_of_bottles} bottles of water on the wall</h1> <br> </br>  <a href="/${req.params.number_of_bottles - 1}">take one down, pass it around</a>`)
}else{
    res.send("<h1>Too much water, return to the main page</h1>")
}

});

app.listen(port,() => {
    console.log('listening on port' , port);
});



