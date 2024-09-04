// // module 2
console.log('ckmobile');

const message =  ()=> {
    console.log('heloo how are you');
}
message();

// // module 3

console.log(global);
global.setTimeout(() => {
    console.log(5);
}, 5000);
console.log(global);
setTimeout(() => {
    console.log(5 + "with out ");
}, 5000);

// console.log (document)
console.log(__dirname);
console.log(__filename);

// module 4
const importedStuff = require('./user');
const {user , burhan} = require('./user');
// console.log(importedStuff.burhan);
// console.log(importedStuff.user);
console.log(user);
console.log(burhan);


// module 5 file system 
const fs = require('fs');

// //read file 

// if another directory 
// fs.readFile('./anotherFolder/node.text');

// if same directory
fs.readFile('node.txt', (err , data) => {
    if(err)
    {
        console.log(err);

    }
    else{
        console.log(data.toString());
    }
} );

// write file 
// overWrte issue 
fs.writeFile('node.txt',('he;lo bhi hbwkjnw\r\n') , (err , data) => {
    if(err)
    {
        console.log(err);

    }
    else{
        console.log("data is written in node file ");
    }
} );

//append file 

fs.appendFile('node.txt',('heloo new one added as append file \r\n') , (err , data) => {
    if(err)
    {
        console.log(err);

    }
    else{
        console.log("data is written append in node file ");
    }
} );

// create new folder if it is not present 

if(!fs.existsSync("Burhan"))// to check either it is present or not 
{
    fs.mkdir('Burhan' ,(err , data) => {
        if(err)
        {
            console.log(err);
    
        }
        else{
            console.log("folder is created  ");
        }
    } )

}
else
{
    console.log("alredy folder exist with same name ");
}


// remove folder 
if(fs.existsSync("Burhan"))// to check either it is present or not 
{
    fs.rmdir('Burhan' ,(err , data) => {
        if(err)
        {
            console.log(err);
    
        }
        else{
            console.log("folder is removed  ");
        }
    } )

}
else
{
    console.log("folder already deleted  ");
}

// delete the file 
if(fs.existsSync("new.txt"))// to check either it is present or not 
{
    fs.unlink('new.txt' ,(err , data) => {
        if(err)
        {
            console.log(err);
    
        }
        else{
            console.log("file is removed  ");
        }
    } )

}
else
{
    console.log("file alredy deleted");
}

// module 6 buffer and stream 
// if yoy want to read the large data 
const readStream = fs.createReadStream('largeText.txt' , {encoding:'utf-8'});

readStream.on('data' , chunk=>{
    // console.log(chunk.toString());
    console.log(chunk); // alternate way 
    console.log('data is readed');
} );


// if yoy want to write the large data 
const writeStream = fs.createWriteStream('writeStream.txt' );

readStream.on('data' , chunk=>{
    // console.log(chunk.toString());
   // console.log(chunk); // alternate way 

    console.log('data is writed');
    writeStream.write('\n nes chunk baby \n' );
    writeStream.write(chunk);
} );

const team = fs.createWriteStream('team.txt' );
team.write("hello how are you ");

 readStream.pipe(team);
console.log("yes yamun katita ");