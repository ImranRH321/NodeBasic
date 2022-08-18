//----> os, path ----> build din module

// const os = require('os')
// console.log(os.userInfo());    ei pc jonno je user info set kora ase oi gula
// console.log(os.homedir());   // ---> home decretory
// console.log(os.hostname());   // ---> user name
// console.log(os.totalmem());   // ---> total memory
// console.log(os.freemem());   // ---> free memory

// destructure kore babohar kara jay *******

// const {totalmem, freemem} = require('os')
// console.log(totalmem());
// console.log((freemem()));

// ___
// console.log(__dirname);  // --> ami je folder ar bitor kaj korsi ei folder ta
// console.log(__filename);  // --> ami je folder ar bitor je file kaj korsi oi file js ta

// _________path_____

// const path = require("path");

// const extensionName = path.extname('index.html') // --> extname--> ei file ar extension khoje dibe
// console.log(extensionName);

// const joinName = path.join(__dirname + "/../views"); // --> folder ar sate noton akta url jog korci /views
// console.log(joinName);


/* ********************Os-path-pk_code******************* */

const os = require('os') 

// console.log(os.userInfo());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.totalmem());
// console.log(os.freemem());


// console.log(__dirname);
// console.log(__filename);

const path = require('path')

const extensionName = path.extname('index.js')
// console.log(extensionName);

// const joinName = path.join(__dirname + '/../../views') 
// console.log(joinName);

