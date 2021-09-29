import React from 'react'

import {ReactComponent as Logo} from '../../../svg/logo.svg'
import {ReactComponent as Design} from "../../../svg/design.svg";
import {ReactComponent as Components} from "../../../svg/components.svg";
import {ReactComponent as Typography} from "../../../svg/typography.svg";
import {ReactComponent as Contact} from "../../../svg/contact.svg";
import {ReactComponent as About} from "../../../svg/about.svg";

export default function Footer() {
    return (

        <footer id="colophon" className="site-footer">
            <div className="sf_main">
                <div className="logo-footer">
                    <Logo/>
                </div>
                <div className="slogan">
                    <div className="up">
                        <span className="n1">Modern</span>
                        <span className="n2">Simple</span>
                        <span className="n3">Accessible</span>
                    </div>
                    <div className="down">
                        <span>Build your own unique web-app with mosimac</span>
                    </div>
                </div>
            </div>
            <div className="sf_copyright">
                <div className="flexcenter uniwrap">
                    <div className="footer-menu">
                        <a className=" " href="">
                            <div className="item design">
                                <Design/>
                            </div>
                            <span>
                                Design
                            </span>
                        </a>
                        <a className=" " href="">
                            <div className="item typography">
                                <Typography/>
                            </div>
                            <span>
                                Typography
                            </span>
                        </a>
                        <a className=" " href="">
                            <div className="item components">
                                <Components/>
                            </div>
                            <span>
                                Components
                            </span>
                        </a>
                        <a className=" " href="">
                            <div className="item about">
                                <About/>
                            </div>
                            <span>
                                About
                            </span>
                        </a>
                        <a className=" " href="">
                            <div className="item contact">
                                <Contact/>
                            </div>
                            <span>
                                Contact
                            </span>
                        </a>

                    </div>
                    <div className="footer-signature">
                        <div className="sfс_text">
                            © Mosimac Design 2020-{new Date().getFullYear()}
                        </div>
                        <span className="sfc_sep"> | </span>
                        <div className="sfс_text">
                            Site Cunstructing
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )

}