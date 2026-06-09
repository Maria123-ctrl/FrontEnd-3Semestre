import "./Login.css";
import Logo from "../../assets/img/logo.svg";
import Botao from "../../components/botao/Botao";
import Header from "../../components/header/Header";
import Fotter from "../../components/footer/Footer";
import { EmailContext } from "../../context/email/EmailContext";
import { SenhaContext } from "../../context/senha/SenhaContext";
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
    const { email, setEmail } = useContext(EmailContext);
    const [ novoEmail, setNovoEmail ] = useState("");
    const { senha, setSenha } = useContext(SenhaContext);
    const [ novoSenha, setNovoSenha ] = useState("");
    const navigate = useNavigate();
    const login = () =>{
        localStorage.setItem("email", JSON.stringify(novoEmail));
        localStorage.setItem("senha", JSON.stringify(novoSenha));
        setEmail(novoEmail);
        setSenha(novoSenha);
        setNovoEmail("");
        setNovoSenha("");
    }
    return (
        <div className="container">
            <main className= "main_login">
          <div className="banner"></div>
          <section className="section_login">
            <img src={Logo} alt="Logo do Filmoteca"/>
            <form action="" className="form_login">
                <h1>Login</h1>
                <div className="campos_login">
                    <div className="campo_input">
                        <label htmlFor="email">Email:</label>
                        <input value={novoEmail} onChange={(e) => {setNovoEmail(e.target.value)}} type="email" name="email" placeholder="Digite seu e-mail"/>
                    </div>
                    <div className="campo_input">
                        <label htmlFor="senha">Senha:</label>
                        <input value={novoSenha} onChange={(e) => {setNovoSenha(e.target.value)}} type="password" name="senha" placeholder="Digite sua senha"/>
                    </div>
                </div>
                <Botao nomeDoBotao="Entrar"  
                onClick={(e) => {
                    e.preventDefault();
                    login()
                    navigate("/filme");
                }}    
                    />
            </form>
          </section>
        </main>
        </div>
    );
}

export default Login;