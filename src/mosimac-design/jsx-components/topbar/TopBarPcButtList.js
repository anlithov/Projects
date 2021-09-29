import React from 'react'
import TopBarPcButtItem from './TopBarPcButtItem'
import {ReactComponent as ThemeTogg} from "../../../svg/theme-toggler.svg";
import TopBarPcTogList from "./TopBarPcTogList";


export default function TopBarPcButtList(props) {
    return (
        <nav className="pc pc-butts">
            {props.pcbutts.map(pcbutt => {
                return <TopBarPcButtItem pcbutt={pcbutt}/>
            })}
            <div className="theme-panel">
                <div className="item theme">
                    <ThemeTogg />
                </div>
                <div className="theme-triangle"></div>
                <TopBarPcTogList togglers={props.togglers} />
            </div>
        </nav>
    )
}