
import React from "react";
import {NavLink} from "react-router-dom";


export default function PcButtItem(props) {
    return (
        <NavLink className="pcm-button" to={'./' + props.pcbutt.name}>
            <div className="item">
                {props.pcbutt.svg}
            </div>
            <span className="pcm-name">
                {props.pcbutt.name}
            </span>
        </NavLink>
    )
}