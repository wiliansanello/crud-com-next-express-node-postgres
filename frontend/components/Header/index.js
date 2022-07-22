import React from 'react'
import Link from 'next/link'


const Header = () => {
  return (
    <React.Fragment>
      <div className='p-4 bg-cyan-400 p4 text-center font-bold text-2xl'>
        <h1>Cadastro de usuários</h1>
      </div>
      <div className='bg-cyan-500 p-2 shadow-md text-center'>
        <div>
          <Link href='/incluir'>
            <a className='px-2 hover:underline'>Incluir</a>
          </Link>
          <Link href='/buscar'>
            <a className='px-2 hover:underline'>Buscar</a>
          </Link>
          <Link href='/alterar'>
            <a className='px-2 hover:underline'>Alterar</a>
          </Link>
          <Link href='/excluir'>
            <a className='px-2 hover:underline'>Excluir</a>
          </Link>
        </div>
      </div>
    </React.Fragment >
  )
}

export default Header