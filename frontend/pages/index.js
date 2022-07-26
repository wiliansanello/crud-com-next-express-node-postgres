import React from 'react'
import useSWR from 'swr'
import Link from 'next/link'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {

  const extractDate = (birthDate) => {
    return birthDate.substring(8,10)+
          '/'+birthDate.substring(5,7)
          +'/'+birthDate.substring(0,4)
  }

  const { data, error } = useSWR('http://localhost:3001', fetcher)
  return (    
    <div>
      {!data && <p className='py-8'>Carregando...</p>}      
      <div className='bg-cyan-500 p-2 shadow-md text-center'>
        <div>
          <Link href='/registration'>
            <a className='px-2 hover:underline'>Incluir</a>
          </Link>
          <Link href='/buscar'>
            <a className='px-2 hover:underline'>Buscar</a>
          </Link>
          <Link href='/registration'>
            <a className='px-2 hover:underline'>Alterar</a>
          </Link>
          <Link href='/excluir'>
            <a className='px-2 hover:underline'>Excluir</a>
          </Link>
        </div>
      </div>      
      {data &&
        <table className="mt-8 table-auto mx-auto">
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Celular</th>
              <th>Data Nascimento</th>
              <th>Email</th>
              <th>Perfil</th>
            </tr>          
             {data.map(reg => {
              return (                               
               <tr className="hover:bg-sky-300">             
                <td>{reg.usr_nome}</td>
                <td>{reg.usr_telefone}</td>
                <td>{reg.usr_celular}</td>
                <td>{extractDate(reg.usr_nascimento)}</td>
                <td>{reg.usr_email}</td>
                <td>{reg.prf_descricao}</td>             
               </tr> 
             )})}          
        </table>
      }
    </div>
  )
}

export default Index