const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const path =  require('path');
const PORT = process.env.port || 5000;

//SET handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//SET handlebars routes
app.get('/', function (req, res) {
    res.render('home', {
        stuff: "tings"
    });
});
 
//SET static folder
app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => console.log('Server listening on port: '+PORT));





// app.listen(5000);
