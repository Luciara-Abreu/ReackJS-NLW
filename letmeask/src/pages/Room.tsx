import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { useAuth } from '../hooks/UseAuth';
import { database } from '../services/firebase';
import '../styles/room.scss';


//Aqui digo qual o tipo de parâmetro quero pegar da nossa pagina
type RoomParams = {
  id: string;
}
export function Room() {
  //apenas usuários autenticados podem fazer perguntas
  const { user } = useAuth();

  //O parâmetro id ficará armazenado na variável params  
  const params = useParams<RoomParams>();
  const roomId = params.id;

  // Aqui vamos guardar a pergunta digitada.
  const [newQuestion, setNewQuestion] = useState('');

  /*tendo a variável que guarda as perguntas, vamos verificar se ela está 
  vazia ou com alguma pergunta */
  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();


    if (newQuestion.trim() === '') {
      return;
    }
    // poderia usar para tratar esse erro => https://react-hot-toast.com/
    if (!user) {
      throw new Error('You must be logged in');
    }

    // Esse objeto vai guardar todas as infomações das perguntas.
    const question = {
      content: newQuestion,
      author: {
        name: user?.name,
        avatar: user?.avatar,
      },
      isHighlighted: false,
      isAnswer: false,
    };
    await database.ref(`rooms/${roomId}/question`).push(question);

    setNewQuestion('');

  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />

          <RoomCode code={roomId} />
        </div>
      </header>
      <main className="content">
        <div className="room-title">
          <h1>Sala do Visitante - React</h1>
          <span>4 perguntas</span>
        </div>
        <form onSubmit={handleSendQuestion}>
          <textarea // área para formular uma pergunta
            placeholder="O que você quer perguntar?"
            //Aqui vamos pegar a pergunta digitada pelo usuário de
            onChange={event => setNewQuestion(event.target.value)}
            value={newQuestion}
          />
          <div className="form-footer">
            {user ? (
              <div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
            ) : (
              <span>Para enviar uma pergunta,
                <button>faça seu login </button>
              </span>
            )}
            <Button type="submit" disabled={!user}>
              Enviar pergunta
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}


