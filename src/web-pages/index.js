
import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Design from './design';
import Typography from './typography'
import About from './about'
import Components from "./components/index";
import Contact from './contact'

export default function Webpages() {

    return(
        <div id="content">
            <Router>
                <Route exact path="/" component= {Design} />
                <Route path = "/typography" component = {Typography} />
                <Route path = "/components" component = {Components} />
                <Route path = "/about" component = {About} />
                <Route path = "/contact" component = {Contact} />
            </Router>
        </div>
    );
};