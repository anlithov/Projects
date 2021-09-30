import React from "react";

export default function ShowdownItem(props) {
    return (
        <a href="" className={props.shdwncomp.name + ' shdwn-component'}>
            <span>{props.shdwncomp.name.replace('-',' ')}</span>
        </a>
    )
}