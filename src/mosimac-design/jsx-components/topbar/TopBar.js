import React from 'react'
import {ReactComponent as Logo} from '../../../svg/logo.svg'
import {ReactComponent as Hamburger} from "../../../svg/hamburger.svg";
import {ReactComponent as Design} from "../../../svg/design.svg";
import {ReactComponent as Components} from "../../../svg/components.svg";
import {ReactComponent as Typography} from "../../../svg/typography.svg";
import {ReactComponent as Contact} from "../../../svg/contact.svg";
import {ReactComponent as About} from "../../../svg/about.svg";
import TopBarPcButtList from "./TopBarPcButtList";


export default function TopBar() {
    const pcbutts = [
        {name: 'design', svg: <Design />},
        {name: 'typography', svg: <Typography/>},
        {name: 'components', svg: <Components/>},
        {name: 'about', svg: <About/>},
        {name: 'contact', svg: <Contact/>},
    ]
    const togglers = [
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
                                <Logo />
                            </a>
                        </div>
                    </div>
                    <div className="mobile menu-hamburger">
                        <div className="ic-menu">
                            <Hamburger />
                        </div>
                    </div>
                    <TopBarPcButtList pcbutts={pcbutts} togglers={togglers}/>
                </div>
            </div>
        </div>
    )
}