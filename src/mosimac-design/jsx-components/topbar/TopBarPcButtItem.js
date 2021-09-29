import {ReactComponent as Design} from "../../../svg/design.svg";
import React from "react";


export default function TopBarPcButtItem(props) {
    return (
        <div className={'pcm-button to-' + props.pcbutt.name}>
            <a className="">
                <div className="item">
                    {props.pcbutt.svg}
                </div>
                <span className="pcm-name">
                    {props.pcbutt.name}
                </span>
            </a>
        </div>
    )
}