
import React from 'react';
import {
    BrowserRouter,
    Route, Switch
} from "react-router-dom";
import Design from './design';
import Typography from './typography'
import About from './about'
import Components from "./components/index";
import Contact from './contact'
import TopBar from "../mosimac-design/js/TopBar";
import Footer from "../mosimac-design/js/Footer";

export default function Webpages() {

    return (
        <BrowserRouter>
            <TopBar />
                <div id="content">
                    <Switch>
                        <Route exact path="/" component= {Design} />
                        <Route path = "/typography" component = {Typography} />
                        <Route path = "/components" component = {Components} />
                        <Route path = "/about" component = {About} />
                        <Route path = "/contact" component = {Contact} />
                    </Switch>
                </div>
            <Footer/>
        </BrowserRouter>
    );
};