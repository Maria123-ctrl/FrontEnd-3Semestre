import "./cardperfil.css"
import people from "../../assets/react.svg"
function Cardperfil() {
    return (
         <div class="card-perfil">
        <img class="card-perfil__image"  
        src={people} alt="foto de perfil do usuário" 
        />
        </div>
    );
}

export default Cardperfil;