import "../../pages/Login/login.css";
import AnchorDefault from "../../components/Anchor/index";
import ButtonDefault from "../../components/Button/index";
import InputLogin from "../../components/Input/index";
import Title from "../../components/Title/index";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SubTitle from "../../components/Subtitle";

const Login = () => {
  const navigate = useNavigate();

  const goHome = () => {
    const find = user.find((u) => u.email === email && u.password === pass);
    if (find) {
      navigate("/home", { state: { listEmail: user } });
    } else {
      setError(true);
      setInputColor("rgb(190, 41, 41)");
    }
  };

  const [user, setUser] = useState([
    {
      id: 1,
      email: "ivina@gmail.com",
      password: "123456",
    },
    { id: 2, email: "joao@gmail.com", password: "654321" },
    {
      id: 3,
      email: "maria@gmail.com",
      password: "111111",
    },
  ]);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [state, setState] = useState("Login");
  const [error, setError] = useState(false);
  const [inputColor, setInputColor] = useState("rgba(255, 255, 255, 0.795)");

  return (
    <div className="App">
      <section className="App-section">
        <div className="div-login">
          <Title id="title-login" title={state} styleTitle="title" />
          {error ? (
            <SubTitle
              style={{
                color: "rgb(190, 41, 41)",
                width: "100%",
                wordBreak: "break-all",
                textAlign: "right",
              }}
              text={"*credenciais inválidas"}
            />
          ) : null}

          <InputLogin
            style={inputColor}
            type="text"
            label="Usuário"
            dataLogin={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputLogin
            style={inputColor}
            type="password"
            label="Senha"
            dataLogin={(e) => {
              setPass(e.target.value);
            }}
          />
          <ButtonDefault name="Entrar" redirection={goHome} />
          <ButtonDefault
            name="Alterar título"
            redirection={() => setState("Bem vindo!")}
          />
          <AnchorDefault
            href="https://www.google.com/"
            name="Esqueceu sua senha?"
          />
        </div>
      </section>
    </div>
  );
};

export default Login;
