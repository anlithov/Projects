import React from 'react'
import "./index.scss"
import {ReactComponent as Hamburger} from "../../../svg/hamburger.svg";
import PcButtList from "./PcButtonsList/PcButtList";



export default function TopBar({menuLogo, menuButtons, themeList}) {

    return (
        <div id="menu" className="menu_base">
            <div className="menu_in uniwrap">
                <div className="menu_content">
                    <div className="menu-pres">
                        <div className="logo">
                            <a className="logo-url">
                                {menuLogo.svg}
                            </a>
                        </div>
                    </div>
                    <div className="mobile menu-hamburger">
                        <div className="ic-menu">
                            <Hamburger />
                        </div>
                    </div>
                    <PcButtList pcbutts={menuButtons} togglers={themeList}/>
                </div>
            </div>
        </div>
    )
}