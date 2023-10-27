const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const userData = require('./users')






app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./public'))


app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/public/index.html')
})

app.get('/login', (req,res) =>{
    res.status(200).sendFile(__dirname + '/public/login.html')
})

app.get('/account-registration', (req, res) =>{
    res.status(200).sendFile(__dirname + '/public/acc-reg.html')
})


app.post('/reg', (req, res) => {
    console.log(req.body)

    //add to json file
    
})


app.post('/Home', (req, res) => {
    //User authentication process
    const {username, password } = req.body

    let isUserLoggidIn = false;
    
    
    for(user in userData){
        let isUserAdmin = username === userData[user].name && password === userData[user].password

        if(isUserAdmin) {
            console.log('user authenticated')
            isUserLoggidIn = true
        if(isUserLoggidIn){
            return res.redirect('/')
        }else {
            isUserLoggidIn = false;
            return res.redirect('/jail')
        }
    } 
}})

app.all('*', (req,res) =>{
    res.status(404).send('page not found')
})

app.listen(5000, ()=>{
    console.log('server is listnening')
})

//TODO: 
// user authentication processs should check from a json file that has all available usernames with corresponding passwords