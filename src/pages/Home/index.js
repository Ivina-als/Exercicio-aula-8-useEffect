import "../Home/home.css";
import ButtonDefault from "../../components/Button";
import Title from "../../components/Title/index";
import { useNavigate, useLocation } from "react-router-dom";
import assets from "../../assets/tecnologia-lluni-2.svg";
import Img from "../../components/Img/index";
import Count from "../../components/Count";
import { useEffect, useState } from "react";

/*
1. Faça com que o nosso componente da página Home inicialize um item no localstorage:
https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage

2. Exiba esse item dentro da nossa div principal.

3. Faça alterações no useEffect usando o useState do contador através do observador do useEffetct:

  useEffect(() => {

  }, [contador]);


  const [contador, setContador] = useState(0);

 4. Exiba o valor do contador e altere ao clicar no button:
<h1>Contador: {contador}</h1>
        <button onClick={() => setContador(contador + 1)}>+</button>

5. Ao desmontar o nosso componente, apague o item criado no localstorage>


useEffect(() => {
    return () => console.log("Aqui é quando o componente será desmontado!");
  }, []); 
*/

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [counterDouble, setCounterDouble] = useState(counter);
  const [storageEmail, setStorageEmail] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const { listEmail } = location.state;

  const clickAction = () => {
    return navigate("/");
  };
  useEffect(() => {
    localStorage.setItem("email", "raniel@gmail.com");
    setStorageEmail((prev) => localStorage.getItem("email"));
    return function () {
      localStorage.removeItem("email");
    };
  }, []);

  useEffect(() => {
    setCounterDouble((prev) => counter * 2);
  }, [counter]);

  return (
    <div className="App">
      <section className="section-home">
        <Img assets={assets} />
        <div className="div-collumn">
          <Title title="Home" styleTitle="style-title" />
          <ul>
            {listEmail.map((u) => (
              <li key={u.id} className="style-title">
                {u.email}
              </li>
            ))}
            <li>{storageEmail}</li>
          </ul>

          <p>Que nota esse exercício merece?</p>
          <div>
            <Count count={counter} />
            <Count count={counterDouble} />

            <div>
              {" "}
              <button
                onClick={() => {
                  if (counter === 0) return;
                  setCounter(counter - 1);
                }}
              >
                -
              </button>
              <button onClick={() => setCounter(counter + 1)}>+</button>
            </div>
          </div>
          <ButtonDefault
            redirection={clickAction}
            name="Voltar"
            divButton="button-home"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
