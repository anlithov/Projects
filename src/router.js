import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {TopBar} from "./components/navbars";
import Footer from "./components/footers";
import {AboutScreen, ContactScreen, ComponentsScreen, DesignScreen, TypographyScreen} from "./screens";
import {AboutSvg, ComponentsSvg, ContactSvg, DesignSvg, Logo, TypographySvg} from "./assests/icons";



export default function ScreensRouter() {
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
                    <Route exact path="/" component= {DesignScreen} />
                    <Route path = "/typography" component = {TypographyScreen} />
                    <Route path = "/components" component = {ComponentsScreen} />
                    <Route path = "/about" component = {AboutScreen} />
                    <Route path = "/contact" component = {ContactScreen} />
                </Switch>
            </div>
            <Footer menuLogo={menuLogo} menuButtons={menuButtons} />
        </BrowserRouter>
    );
};