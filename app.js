const express = require('express')
const app = express()
const path = require('path')
app.use(express.static('./public'))

// app.get('/', (req, res) =>{
//     res.sendFile(path.resolve(__dirname, './Navbar-app/index.html'))
    
// })

// app.get('/about', (req, res) =>{

// })

app.all('*', (req,res) =>{
    res.status(404).send('page not found')
})

app.listen(5000, ()=>{
    console.log('server is listnening')
    
})