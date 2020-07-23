import React from 'react';

import {socialMedia} from "./socialMedia";

import "./RepoPage.scss";
 
export default function RepoPage(props) {
    const {id} = props;
    return (
        <div id={id} className="repo-page ">
         {socialMedia.map(media => (
             <a href={media.url} target="_blank" rel="noopener noreferrer"><media.icon/></a>
         ))}
       
        </div>
    )
}
