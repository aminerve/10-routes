const express = require('express')
const app = express()


app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

app.use((req, res, next) => {
    console.log(req.url)
    next()
})

app.use(express.urlencoded({extended: false}))


// Route 1
app.get('/', (req,res) => {
    res.send('<h1>Home Page</h1>')
})

// Route 2
app.get('/pets', (req,res) => {
    res.render('Index')
})

// Route 3
app.post('/pets',(req,res) => {
    console.log(req.body)
    pets.push(req.body)
    res.redirect('/pets')
})
// Route 4
app.get('/pets/new', (req,res) =>{
    res.render('New')
})

// Route 5
app.get('*', (req, res) => {
    res.render('404')
})

// Route 6
app.get('/pet', (req,res) => {
    res.render('Show')
})

app.listen(3000, () => {
    console.log('Server is running at port 3000...')
})