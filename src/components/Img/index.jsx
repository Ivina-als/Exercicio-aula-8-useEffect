import "../Img/img.css";

function Img({ assets }) {
  return (
    <div className="container-img">
      <img src={assets} alt="tech" />
    </div>
  );
}

export default Img;
