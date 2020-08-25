import React from 'react';
import { Image } from 'semantic-ui-react'
import "./AboutPage.scss";



export default function AboutPage(props) {
    const {id} = props;
    return (
        <div className="container"> 
        <div id={id} className="about-page">
            <div className="about-page__container">
            <div className="about-page__container__perfil">
            <Image className='about-page__container__perfil__foto' 
            />
            <div className="about-page__container__perfil__parrafo">
                <span>Geronimo López</span>
                <span>Software Developer</span>
            </div>
            </div>
            <p>
                "Aquél que puede conquista a los enemigos es fuerte. Aquél que se ha conquistado a sí mismo es poderoso"
                 Con esta frase de Lao Tse me presento. Mi nombre es Gerónimo Naum López y hago lo que amo... 
                 ¡Qué bonito poder decir eso! ¿no?. </p>
                   <p>Soy software developer, una profesión que me crucé por pura suerte, por casualidades o quizás
                 causalidades ¿quién sabe?, al día de hoy el debate entre la existencia o no del destino (y tantas cosas) debería dejar de ser el foco, y deberíamos
                 concentrarnos en el creer, una vez leí una frase que decía "Creo que cuando creo, creo". ¿Qué loco, no? </p>

                  <p>  Comencé en el año 2018 en la carrera Técnico Univeristario en Programación y al día de la fecha puedo decir 
                 que tengo la dicha de hacer algo que realmente me apasiona, algo que me mantiene vivo y me motiva a querer crecer, aprender
                 constantemente. </p>
                 <p>Creo que el Software y la programación pueden cambiar la vida de las personas. Estoy en un mundo muy basto,
                 con muchísimo para dar y un conocimiento completamente infinito y nuevo. </p>
                 <p>Un mundo donde cada día es un nuevo desafío y donde
                 todos pueden aportar. Donde trabajamos en conjunto, en equipo, para poder crear algo que va más allá de las capacidades, y ¡que sabio
                 fue Walt Disney! al decir "Los grandes logros de cualquier persona generalmente dependen de muchas manos, corazónes y mentes".</p>
                 <p>Bienvenidos a mi Portfolio, página que intentaré mantener actualizada constantemente con mis proyectos, conocimientos, experiencias y pensamientos.
                  Muchas gracias por darte una vuelta. Las puertas de mi casa siempre estarán abiertas.
                        </p>
            </div>
      
          
          
        </div>
              </div>
    )
}


 