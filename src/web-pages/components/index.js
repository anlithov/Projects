import React, {useState} from 'react';
import Nav from './NavBar/Nav'

import ComponentsIntro from './Showdown/Items/ComponentsIntro'
import Buttons from "./Showdown/Items/Buttons";
import Cards from "./Showdown/Items/Cards";
import Checkboxes from "./Showdown/Items/Checkboxes";
import Chips from "./Showdown/Items/Chips";
import Lists from "./Showdown/Items/Lists";
import Icons from "./Showdown/Items/Icons";
import Pagination from "./Showdown/Items/Pagination";
import RadioButtons from "./Showdown/Items/RadioButtons";
import Select from "./Showdown/Items/Select";
import TextFields from "./Showdown/Items/TextFields";
import Showdown from "./Showdown/Showdown";

export default function Components() {
    const components = [
        {name: 'components-intro', content: () => <ComponentsIntro />},
        {name: 'buttons', content: () => <Buttons/>},
        {name: 'cards', content: () => <Cards/>},
        {name: 'checkboxes', content: () => <Checkboxes/>},
        {name: 'chips', content: () => <Chips/>},
        {name: 'lists', content: () => <Lists/>},
        {name: 'icons', content: () => <Icons/>},
        {name: 'pagination', content: () => <Pagination/>},
        {name: 'radio-buttons', content: () => <RadioButtons/>},
        {name: 'select', content: () => <Select/>},
        {name: 'text-fields', content: () => <TextFields/>},
    ]

    const [selectedNav, setSelectedNav] = useState(0)

    function handleNavClick(index) {
        setSelectedNav(index)
    }
    return (
        <div className="page-components">
            <Nav selectedNav={selectedNav}
                 components={components}
                 onNavClick={handleNavClick}/>
            <Showdown
                components={components}
                selectedNav={selectedNav}/>
        </div>

    )
}