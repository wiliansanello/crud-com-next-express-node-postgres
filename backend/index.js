const express = require('express')
const app = express()
const cors = require('cors')
const getUsers = require('./src/api/getAllUsersData')
const dbOperation = require('./src/api/dbOperation')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.get('/',async (req,res) => {
  res.send(await getUsers(req, res))  
})

app.get('/registration',async (req,res) => {
  /*const {name, phone, cellphone,birth, email, profile } = req.query
  const dataUser = {
    usrName: req.body.name,
    phone: req.body.phone,
    cell: req.body.cellphone,
    birth: req.body.birth,
    email: req.body.email,
    profile: req.body.profile
  }*/
  console.log(req.body)
  /*const qry = `insert into usuarios 
  (usr_nome, usr_telefone, usr_celular, usr_nascimento, usr_email, usr_prf_id)
  values(${req.body.name},${req.body.phone},${req.body.cellphone},${req.body.birth},
    ${req.body.email},${req.body.profile})`
  res.send(await dbOperation(qry))*/  
})


const port = process.env.PORT || 3001
app.listen(port, (err) => {
  if(err){
    console.log('Erro ao iniciar servidor na porta ', port, err)
  } else {
    console.log('Servidor rodando na porta ', port)
  }
})

