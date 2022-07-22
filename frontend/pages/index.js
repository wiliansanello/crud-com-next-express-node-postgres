import React from 'react'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {

  const { data, error } = useSWR('/api/getUsersInDb', fetcher)
  return (
    <div className='m-10'>
      {!data && <p className='py-8'>Carregando...</p>}
      {data && <pre>{JSON.stringify(data)}</pre>}
      {data &&
        <table className="table-auto mx-auto">
          <thead>
            <tr class='p-2'>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Celular</th>
              <th>Data Nascimento</th>
              <th>Email</th>
              <th>Perfil</th>
            </tr>
          </thead>
          <tbody>
             {data.forEach(reg => {
                <div>
                   <pre>{JSON.stringify(reg)}</pre>
            <tr className="hover:bg-sky-300 text-center">             
              <td>{reg.name}</td>
              <td>{reg.phone}</td>
              <td>{reg.cellphone}</td>
              <td>{reg.birth}</td>
              <td>{reg.email}</td>
              <td>{reg.profile}</td>             
            </tr> 
            </div>})}
          </tbody>
        </table>
      }
    </div>
  )
}

export default Index