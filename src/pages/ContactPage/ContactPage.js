import React from 'react';

import {contactData} from "./icons"; 

import "./ContactPage.scss";

export default function ContactPage(props) {
    const {id} = props;

 
    return (
        <div id={id} className="contact-page">
             <h1>Datos de contacto</h1>
            <div className="contact-page__info">
                    {contactData.map(data => (
                        <div className="contact-page__info__item">
                            <data.icon/>
                            <h3>{data.texto}</h3>
                        </div>
                    ))}
             </div>
        </div>
    )
}
