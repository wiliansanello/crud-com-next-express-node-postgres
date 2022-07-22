const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.post('/gravar', (req,res) => {
  const formUser = {
    usrName: req.body.name,
    phone: req.body.phone,
    cell: req.body.cellphone,
    birth: req.body.birth,
    email: req.body.email,
    profile: req.body.profile
  }
  console.log(formUser)
  res.json({
    ok: true
  })
})

app.get('/',(req,res) => {
  res.json({
    ok: true
  })
})

const port = process.env.PORT || 3001
app.listen(port, (err) => {
  if(err){
    console.log('Erro ao iniciar servidor na porta ', port, err)
  } else {
    console.log('Servidor rodando na porta ', port)
  }
})

