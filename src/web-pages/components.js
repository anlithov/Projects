import React from 'react';
import ComponentsNav from './_components/ComponentsNav'
import ComponentsShowdown from './_components/ComponentsShowdown'

export default function Components() {
    const components = [
        {name: 'components-intro'},
        {name: 'buttons'},
        {name: 'cards'},
        {name: 'checkboxes'},
        {name: 'chips'},
        {name: 'lists'},
        {name: 'icons'},
        {name: 'pagination'},
        {name: 'radio-buttons'},
        {name: 'select'},
        {name: 'text-fields'},
    ]
    return (
        <div className="page-components">
            <ComponentsNav components={components}/>
            <ComponentsShowdown components={components}/>
        </div>

    )
}