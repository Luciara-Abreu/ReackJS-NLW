import { Link, useHistory } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import GoogleImg from '../assets/images/google-icon.svg';
import { Button } from '../components/Button';
import '../styles/auth.scss';
import { useAuth } from '../hooks/UseAuth';
import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';



export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  //Estado que armazenará o valor do input digitado pelo usuário logado.
  const [newRoom, setNewRoom] = useState('');


  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    //vamos criar as salas...
    //Caso o usuário digitou só espaços,não será possível criar a sala. 
    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorID: user?.id,
    })
    //history.push(`/rooms/${firebaseRoom.key}`);
    history.push(`/admin/rooms/${firebaseRoom.key}`);
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração Perguntas e Respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas de sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit"> Criar sala </Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
        </div>
      </main>
    </div>
  )
}