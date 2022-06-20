// const http = require('http');

// const { default: chalk } = require("chalk");

// const  dataControl = (req ,res) =>{
//     res.write("<h1> Hello Rahul !! ");
//     res.end();
// }

// http.createServer(dataControl).listen(5000);
// const colors = require('colors');
// // console.log("hello".red);
// console.log("package.json".bgRed);

// Importing module
// const chalk=require("chalk");

// Printing the text
// console.log(chalk.red("Shivansh"))
// console.log(chalk.red.underline("Shivansh"))

// create a server and data
// const http = require("http");
// const data = require("./data");

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "applicationjson" });
//     res.write(JSON.stringify(data));
//     res.end();
//   })
//   .listen(8000);


// Create File Delete File 
// const fs = require('fs');

// input = process.argv;
// // node index.js add "test.js" "this is just test"   
// if(input[2] == 'add'){
//     fs.writeFileSync(input[3] , input[4])
// }
// //  node index.js remove "test.js"
// else if(input[2] == 'remove'){
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log("Invalid Input")
// }
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files' );

// create 4 files 
// for(i =0 ; i<5 ; i++){
//     fs.writeFileSync(dirPath+"/hello"+i+".txt ", "a simple text  file")
// }


// console.log(dirPath)


// fs.readdir(dirPath , (err , files) =>{
//     files.forEach((item)=>{
//         console.log("file name is " , item)
//     })
// })


// crud Create Rename Update Delete 

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'crud');
// const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath,'this is a type of fruit');

// fs.readFile(filePath,'utf8',(err,item) =>{
//     console.log(item);
// });

// fs.appendFile(filePath, 'and file name is appple.txt' , (err) =>{
//     if(!err)
//     console.log("file is updated")
// })

// fs.rename(filePath,`${dirPath}/fruit.txt` , (err) =>{
//     if(!err)
//     console.log("file name is updated")
// })


// fs.unlinkSync(`${dirPath}/fruit.txt`);


//Ex:- Asynchronous

// console.log("Start exe....");

// setTimeout(()=>{
//     console.log("Logic exe....");
// },2000)



// console.log("complete exe....");

// // Error :- Asynchronous 
// let a = 10;
// let b = 0;

// setTimeout(()=>{
//     b=20;
// },2000)

// console.log(a+b); //can't get updated value Here

// // To Avoid this error
// let m = 10;
// let n = 0;

// // Promises
// let waitingData = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//     },2000)
// })

// waitingData.then((data)=>{
//     console.log(m+data);
// })

// // Express Js
// const express = require('express');
// const app = express(); //making Executable to express()

// //render Html page
// app.get('',(req,res)=>{
//     res.send(`<h1>Welcome to Home Page </h1> <a href = "/about">Go to about</a>`);

// })

// // read query params and render page to Home
// app.get('/about',(req,res)=>{
//     res.send(`
//     <input type = "text" placeholder = "User Name  " value=${req.query.name} />
//     <button>Click Here </button> 
//     <a href="/" > Go to Home </a> 
//     `);

// })

// // show json data
// app.get('/help',(req,res)=>{
//     res.send({
//         name : 'Shivansh' ,
//         email : 'shivansh@shiva.com',
//         contact :'8210559878'
//     });

// })

// Make HTML pages
const express = require('express');
const path = require('path');

const app = express();


const publicPath = path.join(__dirname,'public');

// // app.use(express.static(publicPath));
// // console.log(__dirname)

// // Remove extension from URL

// //Render Home page
// app.get('',(req,res)=>{
//     res.sendFile(`${publicPath}/index.html`)
// })

// // Render Help page
// app.get('/help',(req,res)=>{
//     res.sendFile(`${publicPath}/help.html`)
// })

// // Render about page
// app.get('/about',(req,res)=>{
//     res.sendFile(`${publicPath}/about.html`)
// })

// // Render 404page
// app.get('*',(req,res)=>{
//     res.sendFile(`${publicPath}/page404.html`)
// })

// Setup Dynamic routing

// set view engine:-like here :- ejs
app.set('view engine','ejs');

app.get('/profile',(req,res) => {
   const user = {
    name : 'Shivansh Kumar Shiva',
    email : 'shivansh@shiva.com',
    city :'Rajasthan',
    skills:['java' , 'php' , 'javascript' , 'python' , 'node'],

    }
    res.render('profile' , {user} )
})


app.get('/login',(req,res) => {

    res.render('login' );
})

app.listen(8000);


