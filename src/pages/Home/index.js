import "../Home/home.css";
import ButtonDefault from "../../components/Button";
import Title from "../../components/Title/index";
import { useNavigate, useLocation } from "react-router-dom";
import assets from "../../assets/tecnologia-lluni-2.svg";
import Img from "../../components/Img/index";
import Count from "../../components/Count";
import { useEffect, useState } from "react";
import SubTitle from "../../components/Subtitle";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [counterDouble, setCounterDouble] = useState(counter);
  const [storageAccount, setStorageAccount] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const { listEmail } = location.state;

  const clickAction = () => {
    return navigate("/");
  };
  useEffect(() => {
    localStorage.setItem("Account", "Raniel");
    setStorageAccount((prev) => localStorage.getItem("Account"));
    return function () {
      localStorage.removeItem("Account");
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
          </ul>

          <p>Que nota esse exercício merece (entre 0 e 10)?</p>
          <div>
            <div className="div-count">
              <button
                onClick={() => {
                  if (counter === 0) return;
                  setCounter(counter - 1);
                }}
              >
                -
              </button>
              <Count count={counter} />
              <button
                onClick={() => {
                  if (counter === 10) return;
                  setCounter(counter + 1);
                }}
              >
                +
              </button>
            </div>
            <SubTitle
              text={`*O valor da nota fornecida será convertida para o dobro para ser enviado em dolares para a conta de ${storageAccount}
              `}
            />

            <Count count={`USD ${counterDouble}`} />
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
