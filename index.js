const express = require("express");
const path = require("path");
const app = express();
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');

const members = require('./Members');
// const { loginUser } = require("./routes/api/logIn");
// app.get('/', (req, res)=>{
//     // res.send('<h1> Hello World!!</h1>');
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });


// Init middleware
// app.use(logger);

//Handlebars Middleware

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')

// Body Parser Middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Homepage Route
app.get('/', (req, res) => res.render('index', {
    title: 'Member App',
    members
}));
const {
    loginUser
} = require('./routes/api/logIn')
// const {
//     getAllList
// } = require('./routes/api/todos')
// Members API Routes
app.use('/api/members', require('./routes/api/members'))
// Users
app.post('/login', loginUser);

// List
app.use('/list', require('./routes/api/todos'));

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));