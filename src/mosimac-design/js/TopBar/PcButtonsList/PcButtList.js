import React from 'react'
import PcButtItem from '../PcButtonsItem/PcButtItem'
import {ReactComponent as ThemeTogg} from "../../../../svg/theme-toggler.svg";
import PcButtToggler from "../PcButtonsItem/PcButtToggler";


export default function PcButtList(props) {
    return (
        <nav className="pc pc-butts">
            {props.pcbutts.map(pcbutt => {
                return <PcButtItem pcbutt={pcbutt}/>
            })}
            <div className="theme-panel">
                <div className="item theme">
                    <ThemeTogg />
                </div>
                <div className="theme-triangle"></div>
                <PcButtToggler togglers={props.togglers} />
            </div>
        </nav>
    )
}