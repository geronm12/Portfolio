import React from 'react';

import "./RepoPage.scss";
 
export default function RepoPage(props) {
    const {id} = props;
    return (
        <div id={id} className="repo-page ">
           <h1 className="animate__animated animate__backInDown">REPO PAGE</h1> 
        </div>
    )
}
