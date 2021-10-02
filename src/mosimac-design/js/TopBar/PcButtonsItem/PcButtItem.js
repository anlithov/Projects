
import React from "react";


export default function PcButtItem(props) {
    return (
        <div className={'pcm-button to-' + props.pcbutt.name}>
            <a href={'./' + props.pcbutt.name} className="">
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