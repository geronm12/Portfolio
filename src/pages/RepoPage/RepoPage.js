import React from 'react';

import "./RepoPage.scss";
 
export default function RepoPage(props) {
    const {id} = props;
    return (
        <div id={id} className="repo-page ">
           <h1>
            <h1> MIS REPOSITORIOS DE GITHUB</h1>    
           </h1> 
        </div>
    )
}
