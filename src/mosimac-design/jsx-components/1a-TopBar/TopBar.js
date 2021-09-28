import React from 'react'

import { ReactComponent as Logo } from '../../../svg/logo.svg'
import { ReactComponent as Hamburger} from "../../../svg/hamburger.svg";
import { ReactComponent as Design} from "../../../svg/design.svg";
import { ReactComponent as Components} from "../../../svg/components.svg";
import { ReactComponent as Typography} from "../../../svg/typography.svg";
import { ReactComponent as Contact} from "../../../svg/contact.svg";
import { ReactComponent as About} from "../../../svg/about.svg";
import { ReactComponent as ThemeTogg } from '../../../svg/theme-toggler.svg'


function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
function toggleTheme(theName) {
    if (!(localStorage.getItem('theme') === theName)) {
        setTheme(theName);
    }
}
export default function TopBar() {
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
                    <nav className="pc pc-butts">
                        <div className="pcm-button to-design">
                            <a className="" href="">
                                <div className="item design">
                                    <Design />
                                </div>
                                <span className="pcm-name">
                                Design
                            </span>
                            </a>
                        </div>
                        <div className="pcm-button to-typography">
                            <a className=" " href="">
                                <div className="item typography">
                                    <Typography />
                                </div>
                                <span className="pcm-name">
                                Typography
                            </span>
                            </a>
                        </div>
                        <div className="pcm-button to-components">
                            <a className=" " href="">
                                <div className="item components">
                                    <Components />
                                </div>
                                <span className="pcm-name">
                                Components
                            </span>
                            </a>
                        </div>
                        <div className="pcm-button to-about">
                            <a className="" href="">
                                <div className="item about">
                                    <About />
                                </div>
                                <span className="pcm-name">
                                About
                            </span>
                            </a>
                        </div>
                        <div className="pcm-button to-contact">
                            <a className=" " href="https://mosimac.com/contact">
                                <div className="item contact">
                                    <Contact />
                                </div>
                                <span className="pcm-name">
                                Contact
                            </span>
                            </a>
                        </div>
                        <div className="theme-panel">
                            <div className="item theme">
                                <ThemeTogg />
                            </div>
                            <div className="theme-triangle"></div>
                            <div className="theme-boxlist">
                                <div className="theme-item latico" onClick={() => toggleTheme('theme-latico')}></div>
                                <div className="theme-item martin" onClick={() => toggleTheme('theme-martin')}></div>
                                <div className="theme-item clary" onClick={() => toggleTheme('theme-clary')}></div>
                                <div className="theme-item ricco" onClick={() => toggleTheme('theme-ricco')}></div>
                                <div className="theme-item hyggo" onClick={() => toggleTheme('theme-hyggo')}></div>
                                <div className="theme-item patri" onClick={() => toggleTheme('theme-patri')}></div>
                                <div className="theme-item vermir" onClick={() => toggleTheme('theme-vermir')}></div>
                                <div className="theme-item risana" onClick={() => toggleTheme('theme-risana')}></div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}