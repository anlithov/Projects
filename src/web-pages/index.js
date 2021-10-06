
import React from 'react';
import {
    BrowserRouter,
    Route, Switch
} from "react-router-dom";
import Design from './design';
import Typography from './typography'
import About from './about'
import Components from "./components";
import Contact from './contact'

import TopBar from "../mosimac-design/js/TopBar";
import Footer from "../mosimac-design/js/Footer";
import {ReactComponent as DesignSvg} from "../svg/design.svg"
import {ReactComponent as TypographySvg} from "../svg/typography.svg";
import {ReactComponent as ComponentsSvg} from "../svg/components.svg";
import {ReactComponent as ContactSvg} from "../svg/contact.svg";
import {ReactComponent as AboutSvg} from "../svg/about.svg";
import {ReactComponent as Logo} from "../svg/logo.svg";

export default function Webpages() {
    const menuLogo = {
        svg: <Logo />,
    }
    const menuButtons = [
        {name: 'design', svg: <DesignSvg />},
        {name: 'typography', svg: <TypographySvg />},
        {name: 'components', svg: <ComponentsSvg />},
        {name: 'about', svg: <AboutSvg />},
        {name: 'contact', svg: <ContactSvg />},
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
    return(
        <BrowserRouter>
            <TopBar menuLogo={menuLogo} menuButtons={menuButtons} themeList={themeList}/>
            <div id="content">
                <Switch>
                    <Route exact path="/" component= {Design} />
                    <Route path = "/typography" component = {Typography} />
                    <Route path = "/components" component = {Components} />
                    <Route path = "/about" component = {About} />
                    <Route path = "/contact" component = {Contact} />
                </Switch>
            </div>
            <Footer menuLogo={menuLogo} menuButtons={menuButtons} />
        </BrowserRouter>
    );
};