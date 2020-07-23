import React from 'react';
import "./HomePage.scss";
import {DownloadOutlined}from '@ant-design/icons';

export default function HomePage(props) {

    const {id} = props;
    
    return (
        <div id={id} className="home-page">
            <div className="home-page__container">
            <h1>GERONIMO NAUM</h1>
            <h1 className="home-page__transparente">GERONIMO NAUM</h1>
            </div>
            <h3>Software Developer</h3>
            <a href="../../downloads/CV-GeronimoLopez.pdf" download><DownloadOutlined /></a>
        </div>
    )
}
