const fs = require('fs');
//reading files
fs.readFile('./docs/blog.txt', (err, data) =>{
     if(err){
         console.log('Error');
     }
     console.log(data.toString());
});

//writing files


//directories


//deleting