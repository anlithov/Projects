import React from 'react'
import {ReactComponent as Hamburger} from "../../../svg/hamburger.svg";
import PcButtList from "./PcButtonsList/PcButtList";


export default function TopBar(props) {
    return (
        <div id="menu" className="menu_base">
            <div className="menu_in uniwrap">
                <div className="menu_content">
                    <div className="menu-pres">
                        <div className="logo">
                            <a className="logo-url">
                                {props.menuLogo.svg}
                            </a>
                        </div>
                    </div>
                    <div className="mobile menu-hamburger">
                        <div className="ic-menu">
                            <Hamburger />
                        </div>
                    </div>
                    <PcButtList pcbutts={props.menuButtons} togglers={props.themeList}/>
                </div>
            </div>
        </div>
    )
}