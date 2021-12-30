import copyImg from '../assets/images/copy.svg'
import '../styles/room-code.scss';

//receber o código da sala como propriedades
type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps){
// criar uma função que copia o codigo da sala.
function copyRoomCodeToClipboard(){
  navigator.clipboard.writeText(props.code);
}

return(
<button className="room-code" onClick={copyRoomCodeToClipboard}>
<div className= "img-room-code">
  <img src={copyImg} alt="Copy room code" />
</div>
<span> Sala #{props.code} </span>
</button>
)
}

