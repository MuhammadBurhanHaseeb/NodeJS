

// when we use a node without express module or package
const http = require('http');
const fs = require('fs');
const moment = require('moment');
const port = 3000;
const hostman = 'localhost';





// const chrismis = '2022-12-12';
// console.log(chrismis);
// console.log("butt ji sohne lagde hoo ");
// console.log(moment(chrismis).format('LL'))

// const server =http.createServer((req,res)=>{

//     let route = "";
//     // console.log("Arequest is made");
//     // console.log("request url ",req.url);
//     // console.log("request method ",req.method);
//     // res.setHeader('Content-Type', 'text/plain' );
//     // res.write("welcom");

//     res.setHeader('Content-Type', 'text/html' );
//     // res.write('<body class= "app"></body>')
//     // res.write('<h3>hello butt sahab </h3>')
//     // res.write('<p>this my node practice seession</p>')
//     // res.end();

//     // fs.readFile('./index.html' , (err , data)=>{
//     //     if(err)
//     //     {
//     //         console.log (err);
//     //         res.end();
//     //     }
//     //     else
//     //     {
//     //         res.write(data);
//     //         res.end();
//     //     }
//     // }  )

//    // rendering based on the routes url 
//    switch(req.url)
//    {
//     case '/':
//         route += 'index.html';
//         res.statusCode = 200;
//         break;
//     case '/contact':
//         route = 'contact.html';
//         res.moment
//         console.log("hello");
//         res.statusCode = 200;
//         break;
//     case '/contact-us':
//         // route = 'contact.html';
//         console.log("hello world");
//         res.setHeader('Location', '/contact' ); // redirect the contact-us page  into the contact 
//         res.statusCode = 301;
//         res.end();
        
//         break;    
//     case '/about':
//         route += 'about.html';
//         res.statusCode = 200;
//         break;  
//     case '/profile':
//         route += 'profile.html';
//         res.statusCode = 200;
//         break;
//     default:
//         route += '404.html';
//         res.statusCode = 400;
//         break;           
//    } 
//     fs.readFile(route , (err , data)=>{
//         if(err)
//         {
//             console.log (err);
//             res.end();
//         }
//         else
//         {
//             res.write(data);
//             res.end();
//         }
//     }  )
   
// })
// server.listen(port,hostman , ()=>{
//     console.log(`listening on port ${port}`);
// })