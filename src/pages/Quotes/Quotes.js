/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Tecnologias} from '../tecnologias';

import "./Quotes.scss";

export default function Quotes(props) {

    const {id} = props;

    return (
        

        <div id={id} className="quote-page">
            <h1>CONOCIMIENTOS</h1>
            <div className="quote-page__container">
            {Tecnologias.map((tec, index) => 
             
             <div className="quote-page__container__card" key={index}>
            
             <img style={{backgroundImage: `url('${tec.img}')`}}  className="quote-page__container__card__item"/>
             <div className="quote-page__container__card__texto">
             <h2>{tec.nombre}</h2>
             <p>{tec.text.substring(0, 80) + "..."}</p>
             </div>
             </div>

            )}
          </div>
            
         
                 
     
        </div>
    )
}
