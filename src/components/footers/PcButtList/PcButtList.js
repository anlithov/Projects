import PcButtItem from "../../navbars/TopBar/PcButtItem";
import React from "react";

export default function PcButtList(props) {
    return (
        <nav className="footer-menu">
            {props.pcbutts.map(pcbutt => {
                return <PcButtItem key={pcbutt.name} pcbutt={pcbutt}/>
            })}
        </nav>
    )
}