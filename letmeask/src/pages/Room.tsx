import { useState } from 'react';
import { useParams } from 'react-router-dom';
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { useAuth } from '../hooks/UseAuth';
import '../styles/room.scss';


//Aqui digo qual o tipo de parâmetro quero pegar da nossa pagina
type RoomParams = {
  id: string;
}
export function Room() {
  //apenas usuários autenticados podem fazer perguntas
  const user = useAuth();

  //O parâmetro id ficará armazenado na variável params  
  const params = useParams<RoomParams>();
  const roomId = params.id;

  // Aqui vamos guardar a pergunta digitada.
  const [newQuestion, setNewQuestion] = useState('');

  /*tendo a variável que guarda as perguntas, vamos verificar se ela está 
  vazia ou com alguma pergunta */
  async function handleSendQuestion() {
    if (newQuestion.trim() === '') {
      return;
    }
    // poderia usar para tratar esse erro => https://react-hot-toast.com/
    if (!user) {


    }
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          //Código da sala que veio dos params resgatados da pagina.
          <RoomCode code={roomId} />
        </div>
      </header>
      <main className="content">
        <div className="room-title">
          <h1>Sala do Visitante - React</h1>
          <span>4 perguntas</span>
        </div>
        <form>
          <textarea
            placeholder="O que você quer perguntar?"
            //Aqui vamos pegar a pergunta digitada pelo usuário de
            onChange={event => setNewQuestion(event.target.value)}
            value={newQuestion}
          />
          <div className="form-footer">
            <span>Para enviar uma pergunta,
              <button>faça seu login </button>
            </span>
            <Button type="submit">
              Enviar pergunta
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}


