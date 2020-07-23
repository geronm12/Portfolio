import React from 'react';

import "./Quotes.scss";

export default function Quotes(props) {

    const {id} = props;

    return (
        <div id={id} className="quote-page">
            <h1>"What we do in life echoes in eternity"</h1>
            <p> -Máximo Décimo Meridio</p>
        </div>
    )
}
