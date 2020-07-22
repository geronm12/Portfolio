import React from 'react';
import "./HomePage.scss";

export default function HomePage(props) {

    const {id} = props;
    
    return (
        <div id={id} className="home-page">
            <h1>GERONIMO LOPEZ</h1>
        </div>
    )
}
