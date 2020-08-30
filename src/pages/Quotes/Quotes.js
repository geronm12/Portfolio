/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';
import {Tecnologias} from '../tecnologias';
import { Image, Modal, Button } from 'semantic-ui-react';


import "./Quotes.scss";

export default function Quotes(props) {

    const {id} = props;

    const [open, setOpen] = useState(false);
    const [tecnologia, setTecnologia] = useState(Tecnologias[0]);

    const handleModal = (tec) => {
        setTecnologia(tec);
        setOpen(true);
    }


    return (
        

        <div id={id} className="quote-page">
            <h1>CONOCIMIENTOS - PAGINA EN CONSTRUCCION</h1>
            <div className="quote-page__container">
            {Tecnologias.map((tec, index) => 
             
             <div className="quote-page__container__card" key={index} onClick={() => handleModal(tec)}>
             <img style={{backgroundImage: `url('${tec.img}')`}}  className="quote-page__container__card__item"/>
             </div>
            )}
              

            <TecnologiaModal open={open} setOpen={setOpen} tecnologia={tecnologia}/>
          </div>
            
         
                 
     
        </div>
    )
}


function TecnologiaModal (props) {

    const {setOpen, open, tecnologia} = props;
 
    return (
    <Modal onClose={() => setOpen(false)} open={open} className="modal">
     <Modal.Header className="modal__title">{tecnologia.nombre} - PAGINA EN CONSTRUCCION</Modal.Header>
      <Modal.Content  className="modal__content">
        <div style={{backgroundImage: `url('${tecnologia.img}')`}} className="modal__content__image"></div>
        <Modal.Description>
         <div className="modal__content__description">
            <div className="modal__content__description__p">
                <p>
                    {tecnologia.text}
                </p>
            </div>
           </div>
        
        </Modal.Description>
          </Modal.Content>
    </Modal>
);
}