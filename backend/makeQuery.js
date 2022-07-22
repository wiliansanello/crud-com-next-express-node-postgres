const access = require('./accessDb')
access()

const queryData = async (qry) => {
  let result = ''

  try {
    const response = await client.query(qry)
    result = response.rows
    if(result) {
      await client.end()
    }    
  } catch (err) {
    console.log(err.stack)
  }
  
  return result
}

module.exports = queryData