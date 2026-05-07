import Cardperfil from "../cardperfil/cardperfil";
import "./menu.css"    

function Menu() {
  return (
    <nav class="menu">
        <a href="#" class="menu__item">Home</a>
        <a href="#" class="menu__item">Quem Somos</a>
        <a href="#" class="menu__item">Contato</a>
        <a href="#" class="menu__item--success">Entrar</a>
        <a href="#" class="menu__item--buttom-default">Cadastrar</a>

        {/* colocar o cardperfil aqui!! */}
        <Cardperfil/>
    
    </nav>
  )
};





export default Menu;
