const http= require('http');
const fs= require('fs');


const server=http.createServer( (req,res)=>{

  let path= './views/';
  const url=req.url;
  const _ =require('lodash');

  const num= _.random(1,20);
  console.log(num);

  const greet = _.once( ()=>{
  console.log('ok');
  });

greet();
greet();

  res.setHeader('Content-Type', 'text/html');   //set header content type

  switch(url){
   case '/': path+='index.html';
             res.statusCode=200;
             break;
   case '/about': path+='about.html';
                  res.statusCode=200;
                   break;
   case '/about-me': res.statusCode=301;
                     res.setHeader('Location', '/about');
                     res.end();
   default: path+='404.html';
            res.statusCode=404;
  }



  //send html file
  fs.readFile(path,(err,data)=>{
       if(err)
        { console.log(err);
        res.end();
        }

       else{
         res.write(data);
         res.end();
       }
  })


})

server.listen(3000, 'localhost', ()=>{
  console.log( 'listening for server on 3000 port');
})