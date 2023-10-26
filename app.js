const express = require('express')
const app = express()
const path = require('path')
const serviceWorker = require('./service-worker.js')

app.use(express.static('./public'))

// app.get('/', (req, res) =>{
//     res.sendFile(path.resolve(__dirname, './Navbar-app/index.html'))
    
// })

// app.get('/about', (req, res) =>{

// })

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
}

app.all('*', (req,res) =>{
    res.status(404).send('page not found')
})

app.listen(5000, ()=>{
    console.log('server is listnening')
    
})