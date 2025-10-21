import { useEffect } from 'react'
import './style.css'
import Trash from '../../assets/trash.png'
import api from '../../services/api'

function Home() {

  let users = []


  async function getUsers(){
    users = await api.get('/usuarios')

  }

  

  

  return (

    <div className='container'>
      <form>

        <h1>Cadastro de Usuário</h1>
        <input type="text" name="nome" placeholder='nome' />
        <input type="number" name="idade" placeholder='idade' />
        <input type="email" name="email" placeholder='e-mail' />
        <button type='button'>Cadastrar</button>

      </form>

      {users.map(user => (
        <div key={user.id} className='card'>
          <div >
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>

        </div>

      ))}


    </div>

  )
}

export default Home
   

//instalar o npm install axios para conectar com o backend onde faz requisições

// comando npm run dev para rodar o vite - primeiros comandos