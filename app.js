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

app.post('/Home', (req, res) => {
    let isUserLoggidIn = false
    console.log(req.body)
    //User authentication process
    const {username, password }= req.body
    
    for(user in userData){
        if(userData.hasOwnProperty(user)){
            if(username === userData[user].name && password === userData[user].password) {
                console.log('user authenticated')
                isUserLoggidIn = true
            }else {
                res.redirect('/jail')
            }
            if(isUserLoggidIn){
                res.redirect('/')
            }
    } 
}


})

app.all('*', (req,res) =>{
    res.status(404).send('page not found')
})

app.listen(5000, ()=>{
    console.log('server is listnening')
})

//TODO: 
// user authentication processs should check from a json file that has all available usernames with corresponding passwords