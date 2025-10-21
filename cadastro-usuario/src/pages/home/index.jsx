import { useEffect, useState, useRef } from 'react' //react hooks
import './style.css'
import Trash from '../../assets/trash.png'
import api from '../../services/api'


function Home() {
const [users, setUsers] = useState([])

const inputName = useRef()
const InputAge = useRef()
const InputEmail = useRef()
  


  async function getUsers(){
    const usersFromApi = await api.get('/usuarios')
    
    
    setUsers(usersFromApi.data)
    

  }

   async function createUsers(){
    
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: InputAge.current.value,
      email: InputEmail.current.value

    })

    getUsers() //adciona um novo usuario na tela automaticamente
    
    
   
  }

  async function deleteUsers(id){
    await api.delete(`/usuarios/${id}`)
    
    
    
    getUsers()

  }

  useEffect(() => {
    getUsers()
  
  }, [])
    

  

  

  return (

    <div className='container'>
      <form>

        <h1>Cadastro de Usuário</h1>
        <input type="text" name="nome" placeholder='nome' ref={inputName} />
        <input type="number" name="idade" placeholder='idade' ref={InputAge} />
        <input type="email" name="email" placeholder='e-mail' ref={InputEmail}/>
        <button type='button' onClick={createUsers}>Cadastrar</button>

      </form>

      {users.map(user => (
        <div key={user.id} className='card'>
          <div >
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button onClick={() => deleteUsers(user.id)}> 
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