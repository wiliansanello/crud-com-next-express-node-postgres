import makeQUery from '../../../backend/makeQuery'

export default async (req, res) => {

  const txtQry = `SELECT usr.usr_nome,
                  usr.usr_telefone,
                  usr.usr_celular,
                  usr.usr_nascimento,
                  usr.usr_email,
                  prf.prf_descricao
                  FROM usuarios usr join perfil_usuarios prf
                  on usr.usr_prf_id = prf.prf_id`
  const resUsers = await makeQuery.queryData(txtQry)
    
  const jsonQry = []
  
  resUsers.forEach(attribute => {
    jsonQry.push({
        usrName: attribute.usr_nome,
        phone: attribute.usr_telefone,
        cellphone: attribute.usr_celular,
        birth: attribute.usr_nascimento,
        email: attribute.usr_email,
        profile: attribute.prf_descricao
      })
    })  

  res.end(JSON.stringify(
    jsonQry
  )
  )

}