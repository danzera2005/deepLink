const express = require("express")
const app = express()
const port = 3000

app.listen(port, ()=>{
  console.log(`Server rodando na prta ${port}`)
})

app.get('/.well-know/assetlinks.json', (req,res)=>{
  res.send(require("./assetlinks.json"))
})