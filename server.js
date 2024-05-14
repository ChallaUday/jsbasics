const express = require('express')

const app = express()

const PORT = 5000 

app.get('/',(req,res)=>{
   return res.send('Hello world')
})

app.get('/newapp',(req,res)=>{
   return res.send('Hello world')
}
   )
   app.listen(PORT, () =>{
      return console.log("server is running on port "+ PORT)
   })