import "./App.css"
import MyComponent from "./components/children/mycomponent";
import Saudacao from "./components/exercicio01/saudacao"
import Produto from "./components/exercicio02/produto";
import Perfil from "./components/exercicio03/perfil";
import Botao from "./components/exercicio04/botao";
import Filme from "./components/exercicio05/filme";
import foto from "./assets/react.svg";
import Aluno from "./components/exercicio06/aluno"
import Card from "./components/exercicio07/card";
import Contato from "./components/exercicio08/contato";
import Jogo from "./components/exercicio09/jogo";
import ItemLoja from "./components/exercicio10/itemLoja";

const App = () => {
  return (
    // <Saudacao nome="Maria" />
    // <Saudacao nome="Lucas" />
    <>
      <MyComponent>
        <Saudacao nome="Eduardo" />
        <Produto nome="Computador"
          preco={1200}
          descricao="Ele é rosa pink CHOQUE"
        />

      </MyComponent>
      <MyComponent>
        <Perfil nome="Stephani"
          idade={15}
          profissao="pedreira"
        />
      </MyComponent>
      <MyComponent>
        <Botao texto="Botão" cor="pink" />
      </MyComponent>
      <MyComponent>

        <Filme titulo="A pequena sereia"
          ano="1989"
          genero="Infantil"
          nota="10"
        />
        <Filme titulo="Creed"
          ano="2015"
          genero="Esporte/Ação"
          nota="10"
        />
        <Filme titulo="Crepúsculo eclipse"
          ano="2010"
          genero="Romance/Fantasia"
          nota="10"
        />
      </MyComponent>

      <MyComponent>
        {/*Exercicio 05 */}
        <Aluno
          nome="Nathan Policarpo"
          curso="Desenvolvimento de Sistemas"
          imagem={foto}
        />
      </MyComponent>
      <Card>
        <Botao cor="red" texto="texto do Botão"
        />
        <Botao cor="green" texto="texto do Botão"
        />

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quas aperiam expedita vel! Nostrum hic autem placeat enim, in obcaecati dolores eligendi deserunt, assumenda, tempore labore debitis expedita officia exercitationem.</p>
      </Card>
      <MyComponent>
        <Contato nome="João" email="joao@email.com" telefone="(11) 99999-9999" />
        <Contato nome="Maria" email="maria@email.com" telefone="(11) 88888-8888" />
        <Contato nome="Carlos" email="carlos@email.com" telefone="(11) 77777-7777" />
        <Contato nome="Ana" email="ana@email.com" telefone="(11) 66666-6666" />
        <Contato nome="Pedro" email="pedro@email.com" telefone="(11) 55555-5555" />
      </MyComponent>
      <MyComponent>
        <Jogo nome="The Legend of Zelda: Breath of the Wild" plataforma="Nintendo Switch" preco={299.99} imagem={foto} />
        <Jogo nome="Memphis the game" plataforma="PlayStation 4" preco={199.99} imagem={foto} />
      </MyComponent>
      <MyComponent>
      <ItemLoja nome="Camiseta" preco={49.99} categoria="Roupas" estoque={10} />
      <ItemLoja nome="Tênis" preco={199.99} categoria="Calçados" estoque={0} />
      <br />
      <hr style={{ width: "100%", height: "3px", border: "none", backgroundColor: "black" }} />
      <br />
      </MyComponent>
    </>

  )
}

export default App;