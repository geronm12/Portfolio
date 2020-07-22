import React from 'react';
import "./AboutPage.scss";

export default function AboutPage(props) {
    const {id} = props;
    return (
        <div id={id} className="about-page animate__animated animate__bounce">
            <h1>ABOUT PAGE</h1>
        </div>
    )
}
