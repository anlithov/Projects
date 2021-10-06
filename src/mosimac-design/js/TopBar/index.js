import React from 'react'
import './index.scss'

import {ReactComponent as Hamburger} from "../../../svg/hamburger.svg";
import PcButtList from "./PcButtonsList/PcButtList";
import {ReactComponent as Logo} from "../../../svg/logo.svg";
import {ReactComponent as Design} from "../../../svg/design.svg";
import {ReactComponent as Typography} from "../../../svg/typography.svg";
import {ReactComponent as Components} from "../../../svg/components.svg";
import {ReactComponent as About} from "../../../svg/about.svg";
import {ReactComponent as Contact} from "../../../svg/contact.svg";


export default function TopBar() {
    const menuLogo = {
        svg: <Logo />,
    }
    const menuButtons = [
        {name: 'design', svg: <Design />},
        {name: 'typography', svg: <Typography/>},
        {name: 'components', svg: <Components/>},
        {name: 'about', svg: <About/>},
        {name: 'contact', svg: <Contact/>},
    ]
    const themeList = [
        { name: 'theme-latico' },
        { name: 'theme-martin' },
        { name: 'theme-clary' },
        { name: 'theme-ricco' },
        { name: 'theme-hyggo' },
        { name: 'theme-patri' },
        { name: 'theme-vermir' },
        { name: 'theme-risana' },
    ]

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