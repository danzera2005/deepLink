const express = require("express")
const app = express()
const port = 3000

app.listen(port, ()=>{
  console.log(`Server rodando na prta ${port}`)
})

app.get('/', (req,res)=>{
  res.send(require("./assetlinks.json"))
})