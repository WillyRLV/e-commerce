import React from "react";
import TestiMonials from "../../components/TestiMonials/TestiMonials";
import "./home.css";
import kid from "../../assets/image/img-kid.png"

const Home = () => {
  return (
    <div className="sec-home">
      <div className="container-home">
        <div className="content-home">
          <div className="content-first">

          <h3>PARA UN MEJOR FUTURO</h3>
            <h2>
              PRODUCTOS SALUDABLES Y ALTERNATIVOS PARA LOS MENORES DEL HOGAR
            </h2>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              congue sed et leo, dignissim odio justo.
            </p>
          </div>

          <div>
              <img className="img-kid" src={kid} style={{width:"500px"}} />
          </div>
        </div>
        <div className="carousel">
          <TestiMonials />
        </div>
      </div>
    </div>
  );
};

export default Home;
