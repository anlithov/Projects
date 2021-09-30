import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Design from './design';
import Typography from './typography'
import Components from './components'
import About from './about'
import Contact from './contact'

const Webpages = () => {
    return(
        <Router>
            <Route exact path="/" component= {Design} />
            <Route path = "/typography" component = {Typography} />
            <Route path = "/components" component = {Components} />
            <Route path = "/about" component = {About} />
            <Route path = "/contact" component = {Contact} />
        </Router>
    );
};
export default Webpages;