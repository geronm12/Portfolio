import React from 'react';
import "./HomePage.scss";
import {DownloadOutlined}from '@ant-design/icons';
import PDF from "../../downloads/CV-GeronimoLopez.pdf";

export default function HomePage(props) {

    const {id} = props;
    
    return (
        <div id={id} className="home-page">
            <div className="home-page__container">
            <h1>GERONIMO NAUM</h1>
            </div>
            <h3 style={{color: 'black'}}>DESCARGAR CURRICULUM</h3>
            <a href={PDF} download><DownloadOutlined/></a>
        </div>
    )
}
