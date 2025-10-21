import './style.css'
import Trash from '../../assets/trash.png'

function Home() {

  const users = [{
    id: '34ldfldl',
    name: 'Edson',
    age: 30,
    email: 'edsonsize@gmail.com'
  },
  {
    id: '34ldf56l',
    name: 'Nay',
    age: 35,
    email: 'nayara@gmail.com',
  },
  {
    id: '9384hkfhf',
    name: 'Paulo',
    age: 45,
    email: 'paulo@email.com'

  }]

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
