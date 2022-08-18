/* 
// fs moulde --> file system babohar korar jonno use kori
------------async function----------
writeFile() --> file toiri kora 
appendFile()--> file update kora 
readFile() --> file read kora 
rename() ---> file ar name change kora  
Unlink()---> kono file delete kora
Exists()---> kono file ase kina check kora
*/

// const fs = require('fs') 

// fs.writeFile('demo.txt', 'Hi My imran hossin I am 21 years old', (err) =>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log('success');
//     }
// })


// fs.appendFile('demo.txt', 'Hi My imran hossin I am 21 years old', (err) =>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log('success');
//     }
// })



// fs.readFile('demo.txt', 'utf-8', (err, data) =>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log(data);
//     }
// })


// fs.rename('demo.txt', 'demo2.txt', (err) =>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log('success');
//     }
// })


// fs.unlink('demo2.txt', (err) =>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log('success');
//     }
// })

// exists--> true/false
// fs.exists('demo2.txt', (result) =>{
//     if(result){
//         console.log('found');
//     } else{
//         console.log('not found');
//     }
// })


// sync-----> 
// fs.existsSync('demo2.txt') ---> // sync



// cal back lagbe na -> nijer gula lagbe ar last a sync  bole dite hobe

// (result) =>{
//         if(result){
//             console.log('found');
//         } else{
//             console.log('not found');
//         }
//     })

// ****************************pk_code*************************

const fs = require('fs') 

// fs.appendFile('demo.txt', 'I am First laver is my Self ', (err) => {
//     if(err){
//         console.log(err.message);
//     }
//     else{
//         console.log('successFull');
//     }
// })


// fs.readFile('demo.txt', 'utf-8', (err, data) => {
//     if(err){
//         console.log(err.message);
//     }
//     else{
//         console.log(data);
//     }
// })


// fs.rename('views.txt', 'hello.txt', (err) => {
//     if(err){
//         console.log(err.message);
//     }
//     else{
//         console.log('successfull');
//     }
// })


// fs.unlink('./demo/hello.txt', (err) => {
//     if(err){
//         console.log(err.message);
//     }
//     else{
//         console.log('succesful delted ');
//     }
// })


fs.exists('demo.txt', (data) => {
    if(data){
        console.log('found');
    }else{
        console.log('not Found');
    }
})