
const home = function(req, res){
    // return res.end('<h1>This is Home Profile</h1>')
    //without ejs we can directly access this file
    return res.render('home', {
       
        title: "Home",
        heading: "This is Home file rendered through home.ejs and router and controllers"
    })
}


// const action = function(req, res){
//     return res.end('This is Action part')
// }

// const Contact = function(req, res){
//     return res.send('This is Contact List')
// }

module.exports = home;
// module.exports = action;
// module.exports = Contact;
