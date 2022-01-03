import { useParams } from 'react-router-dom'
import logoImg from '../assets/images/logo.svg';
import deleteImage from '../assets/images/delete.svg'

import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
//import { useAuth } from '../hooks/UseAuth';
import { UseRoom } from '../hooks/UseRoom';
import { Question } from '../components/Question';


import '../styles/room.scss';
import { database } from '../services/firebase';


type RoomParams = {
  id: string;
}

export function AdminRoom() {
  //const { user } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { title, questions } = UseRoom(roomId);

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que deseja excluir essa pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutline>Encerrar sala</Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>
        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id} //algoritmo de reconciliação
                content={question.content}
                author={question.author}
              >
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}

                >
                  <img src={deleteImage} alt="Remover Pergunta" />
                </button>
              </Question>
            );
          })}
        </div>
      </main>
    </div>
  );
}