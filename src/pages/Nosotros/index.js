import "bootstrap/dist/css/bootstrap.min.css";
import "./nosotros.css";

import imgBlog1 from "../../assets/imgBlog1.jpg";

const Nosotros = () => {
  return (
    
  <div  class="blog-page ">
    
    <div class="banner-top mt-5 d-flex   ">
          <h1>Blog</h1>
    </div> 

    <div class="container mt-5 d-flex ">
    <div class="row">
    <div class="col-md-12">
    <nav aria-label="breadcrumb ">
    <ol class="breadcrumb col-md-12">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Nosotros</li>
    </ol>
    </nav>
    </div>
    
    <div class="col-md-8 post-content">
    <div class="blog-nota  mt-4 mb-5">
      <h1 class="mt-3 mb-5">Acerca de</h1>
         <h3 class="mt-3 mb-3">Método Montessori: qué es y qué deben saber los padres a la hora de elegirlo para sus hijos</h3>
          <p> Cada vez hay más corrientes pedagógicas que se alejan del modelo prusiano de educación, aquel que se basa en la idea de que todos los niños deben de ir a la escuela,
          superar ciertos niveles y obtener cierto grado de conocimiento. Nuevas corrientes que, en contraposición, ponen a los menores en el centro, tienen un ambiente preparado 
          que permite que el alumno se desarrolle libremente y en la que el adulto es acompañante, no dirigente. Una de estas pedagogías, cada vez más instaurada en nuestro país, 
          </p>
    </div>
    </div> 

    <div class="col-lg-8 mt-5 mt-lg-0">
    <h1 class="mt-3 mb-5">Contáctanos </h1>

            <form action="" method="post" role="form" class="email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="nombre" class="form-control" id="name" placeholder="Nombre" required/>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Correo" required/>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="asunto" id="subject" placeholder="Asunto" required/>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="mensaje" rows="5" placeholder="Mensaje" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">El mensaje fue enviado</div>
              </div>
              <div class="text-center"><button type="submit">Enviar mensaje</button></div>
            </form>

          </div>


    </div> 
 

<div class="col-lg-4">
  <div class="info">
    <div class="address">
      <i class=" "></i>
      <h4>Ubicación:</h4>
      <p>A108 Adam Street, New York, NY 535022</p>
    </div>

    <div class="email">
      <i class=" "></i>
      <h4>Correo:</h4>
      <p>info@example.com</p>
    </div>

    <div class="phone">
      <i class=""></i>
      <h4>Teléfono:</h4>
      <p>+51 5589 55488 55s</p>
    </div>

  </div>

</div>

   
  </div>

  </div>

 
  );
};

export default Nosotros;