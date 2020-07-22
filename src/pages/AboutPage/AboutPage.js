import React from 'react';
import {Divider} from 'antd';
import {Tecnologias} from "./tecnologias";

import "./AboutPage.scss";



export default function AboutPage(props) {
    const {id} = props;
    return (
        <div id={id} className="about-page">
            <div className="about-page__container">
                <img src={"Foto"}/>
            <p>
                Mi nombre es Gerónimo Naum López, tengo 25 años y soy desarrollador de software.
                Me inicié en el mundo de la programación hace casi 2 años y medio y desde entonces dedique todo mi tiempo
                a profundizar mis conocimientos.    
                Amo programar y me divierte muchísimo pero también soy muy ambicioso con el conocimiento, me gusta aprender constantemente,
                soy proactivo, creativo y carismático. Mi mayor virtud es mi capacidad de resilencia y mi mayor defecto es la terquedad.
                Me gusta trabajar en equipo y soy muy comunicativo.
            </p>
            </div>
      
            <div className="about-page__tecnologias">
              {Tecnologias.forEach(tecnologia => {
                
                <Card imagen={tecnologia.img} text={tecnologia.text}/> 

              })}
            </div>
          
        </div>
    )
}


function Card (props){

    const {imagen, texto} = props;

    return(
        <div className="card-container">
        <div className="card">
            <img src={imagen}/>
            
        </div>
             <p>
                {texto}
             </p>
        </div>
    )


}