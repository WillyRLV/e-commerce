import "bootstrap/dist/css/bootstrap.min.css";
import "./blog.css";

import imgBlog1 from "../../assets/imgBlog1.jpg";

const Blog = () => {
  return (
    
  <div  class="blog-page ">
    
    <div class="banner-top mt-5 d-flex   ">
          <h1>Blog</h1>
    </div> 

    <div class="container mt-5 d-flex ">
    <div class="row">
  
    <div class="col-md-12">
    <nav aria-label="breadcrumb">
    <ol class="breadcrumb col-md-12">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Blog</li>
    </ol>
    </nav>
    </div>

    <div class="col-md-8 post-content">
    <div class="content-blog"> <img src={imgBlog1} alt="image"  class="col-md-12 "/>
    <div class="blog-nota  mt-4 mb-5">
          <div class="datos"> <h6> <b> Carolina Pinedo </b> | 16 marzo 2021 </h6> </div>
          <h1 class="mt-3 mb-5">Método Montessori: qué es y qué deben saber los padres a la hora de elegirlo para sus hijos</h1>
          <p>Cada vez más colegios públicos en España aplican esta pedagogía que, según los expertos, permite que el menor se desarrolle con libertad, autonomía y a su ritmo</p>
        
          <p> Cada vez hay más corrientes pedagógicas que se alejan del modelo prusiano de educación, aquel que se basa en la idea de que todos los niños deben de ir a la escuela,
          superar ciertos niveles y obtener cierto grado de conocimiento. Nuevas corrientes que, en contraposición, ponen a los menores en el centro, tienen un ambiente preparado 
          que permite que el alumno se desarrolle libremente y en la que el adulto es acompañante, no dirigente. Una de estas pedagogías, cada vez más instaurada en nuestro país, 
          es la Escuela Montessori, desarrollada por María Montessori, “una mujer que defendía la infancia como la etapa más importante de la vida del ser humano, la que más debemos
           cuidar y proteger, y hoy en día la neurociencia demuestra lo que ella predecía en función de su método científico y años de observación”, explica Míriam Escacena, ingeniera 
           de profesión, guía Montessori, autora del libro Comunicación con bebés. Mis manitas hablan y organizadora del próximo Congreso Internacional que se celebra entre el 5 y el 9 
           de julio. ¿En qué consiste este método y qué deben saber los padres y madres a la hora de elegirlo para la educación de sus hijos?
          </p><p> 
          “Esta pedagogía está basada en una mirada de profundo respeto a la infancia, en admirar la individualidad de cada niño, en respetar sus tiempos, confiar en sus capacidades y 
          potenciar su autonomía”, sostiene Escacena. “Por eso a veces se habla de este método como la autoeducación”, prosigue, “se confía en el niño y en su maestro interior, ya que guiado por 
          sus intereses, y aprovechando sus periodos sensibles, logrará conquistar grandes aprendizajes”.
Efectivamente, “muchas familias eligen la escuela Montessori buscando un lugar respetuoso donde los niños sean atendidos de manera individualizada. Después lo conocen y se suelen enamorar del mismo,
 pero en un principio la motivación es buscar espacios amables y cercanos”, añade Dácil Martín Petrini, directora técnica en Montessori Gran Canaria. Según explica la experta, el miedo más habitual 
 de los padres es si sus hijos podrán adaptarse a otras realidades educativas cuando pasen de etapa, por ejemplo, el paso del colegio al instituto: “A esto les respondemos que la escuela Montessori trabaja
  los mismos contenidos y objetivos que el resto de escuelas, lo que cambia es la forma de enseñarlo. Otra duda usual, por desconocimiento, es que se trata de una escuela en la que los niños no tienen
   normas y son indisciplinados. Y no es cierto. Montessori en general es muy estructurada y se trabaja la disciplina interna y el orden de manera sistemática. Los niños y niñas tienen libertad de movimiento
    y elección, pero siempre con una supervisión previa del adulto. Con lo cual hay una percepción de libertad, pero es controlada”, prosigue la experta.
</p><p> 
Según mantiene, “desde edades muy tempranas se trabaja la motivación interna para que no dependan del adulto en cada paso. Esto hace que el alumnado destaque por su elevada 
autonomía y autoestima. La mayoría trabajan con la etapa de infantil, algunas, como la nuestra, llegan a primaria y hay unos pocos proyectos de secundaria, que van en auge”. 
Por ejemplo, en la etapa de infantil destacan las áreas de vida práctica, donde los pequeños aprenden destrezas de la vida cotidiana de cuidado personal 
(vestirse, desvestirle, lavarse las manos, gracia y cortesía…), cuidado del ambiente (cuidar una planta, barrer, limpiar el mobiliario…): “También es muy importante él área sensorial, donde a 
través de materiales manipulativos los niños estimulan sus sentidos y dan respuesta y vocabulario al mundo que les rodea sintiendo las cualidades de los mismos. Lenguaje y matemáticas también se 
trabajan con materiales sensoriales”.

</p>
    </div>
    </div>    
    </div> 
 

    <div class="notas col-md-3  " >
    
  <div class="nota border-bottom p-4 bg-light" id="">
  <div class="datos"> <h6> <b> 16 marzo 2021 </b> </h6> </div>
  <img src={imgBlog1} alt="image"  class="img-fluid"/>
  <p class="mb-2"><a href="#">How to Avoid Distraction and Stay Focused During Video Calls?</a></p>
 
   
    <span class="author mb-3 d-block">Jenny Wilson</span>
    </div>

  <div class="nota border-bottom p-4 bg-light" id="">
  <div class="datos"> <h6> <b> 16 marzo 2021 </b> </h6> </div>
  <img src={imgBlog1} alt="image"  class="img-fluid"/>
  <p class="mb-2"><a href="#">How to Avoid Distraction and Stay Focused During Video Calls?</a></p>
 
    <span class="author mb-3 d-block">Jenny Wilson</span>
  </div>


  
    </div>
    </div>
    


  </div>

  </div> 
  );
};

export default Blog;