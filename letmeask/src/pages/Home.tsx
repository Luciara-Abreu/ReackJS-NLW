import { useHistory } from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import GoogleImg from '../assets/images/google-icon.svg';
import { Button } from '../components/Button';
import '../styles/auth.scss';
import { useAuth } from '../hooks/UseAuth';



export function Home() {
  // roock ou hoock
  const history = useHistory();
  const { user, singInWithGoogle } = useAuth()


  async function handleCreateRoom() {
    if (!user) {
      await singInWithGoogle();
    }

    history.push('/rooms/new');

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
          <button onClick={handleCreateRoom} className="create-room">
            <img src={GoogleImg} alt="botão do google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala" />
            <Button type="submit"> Entrar na sala </Button>
          </form>
        </div>
      </main>
    </div>
  )
}