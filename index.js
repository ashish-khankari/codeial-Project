const express = require('express');
const cookieParser = require('cookie-parser');
const app= express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts'); 
const db = require('./config/mongoose')

// app.get('/', function(req, res) {
//     res.send('Hello This is a GET function Trial');
//     })

app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static('./assets'))

app.use(expressLayouts);

// extract style and sub pages into the layout

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);



//import Router
app.use('/', require('./routes'));

//set ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

app.listen(port, function(err){
    if(err){
        console.log(`There is error in displaying data`)
    }else{
        console.log(`Server is succesfully started on:http://localhost:${port}`)
    }
});

// Step-1 Install express ( line 1 to 4 and line 10 to 16 - Crating server through port)
//Step-2 (Routing)
// Step-3 Controllers
//Step-4 Install Ejs and set it line 17 & 18

//step -5 Create ejs files and instead of directle rendering files 
//through controllers display content through ejs files

//<%%> Syntax is used to acces another file text
// Step-5 - Parials - used to add same code in differnt files
// when click on link it takes another page the page has same header and footer or Table from prevoious file, we do this through partials


// Step 6 -Create Partials files with'_header' and '_footer' and include them in required files with <%- include('(file name)')%>

// Step 7 - Install Express Ejs Layouts and import it line no 4 and use it
//          line no 28 before routes

// Step-8 - use Static files to access sytatic files
            //  static files - to access html, css and js

// Step-9 - use app.use(extractStyles and extractScripts to access js and css files)

// Step-10 - Create Mongoose Folder to connect to database and make it require in index.js
// Step - 11 - Create User Schema in models folder with user.js file
//  Step-11 Create Sign and Sign Up PAges
//  Step-12 Install Cookies Library Syntax- npm isntall  cookie-parser and make it require, and add line 12 and 13 
// Step-13  to create cookie add (res.cookie('name', 'add anything', 'add anything')) in controllers