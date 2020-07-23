import React from 'react';
import {Tecnologias} from "./tecnologias";

import "./AboutPage.scss";



export default function AboutPage(props) {
    const {id} = props;
    return (
        <div className="container"> 
        <div id={id} className="about-page">
            <div className="about-page__container">
             
            <p>
                "Mi nombre es Gerónimo Naum López, tengo 25 años y soy desarrollador de software.
                Me inicié en el mundo de la programación hace casi 2 años y medio y desde entonces dedique todo mi tiempo
                a profundizar mis conocimientos.    
                Amo programar y me divierte muchísimo pero también soy muy ambicioso con el conocimiento, me gusta aprender constantemente,
                soy proactivo, creativo y carismático. Mi mayor virtud es mi capacidad de resilencia y mi mayor defecto es mi tenacidad.
                Me gusta trabajar en equipo y soy muy comunicativo."
            </p>
            </div>
      
            <div className="about-page__tecnologias">
              {Tecnologias.map(tecnologia => {
                
              return (<>
                  <Card imagen={tecnologia.img} texto={tecnologia.text}></Card>
                  
                </>
              );

              })}
            </div>
          
        </div>
              </div>
    )
}


function Card (props){

    const {imagen, texto} = props;

    return(
        <div className="card-parent">
        <div className="card-container">
        <div className="card">
            <img src={imagen} alt="imagen"/>
        </div>
             <p>
                {texto}
             </p>
        </div>
        <div className="card-container mirror">
        <div className="card">
            <img src={imagen} alt="imagen"/>
        </div>
             <p>
                {texto}
             </p>
        </div>
        </div>
    )


}