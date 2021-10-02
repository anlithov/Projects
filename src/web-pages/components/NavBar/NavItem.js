import React from "react";

export default function NavItem({navitem, active, onClick}) {

    function handleClick() {
        onClick()
    }
    return (
        <a className={navitem.name + ` nav-item ${active ? 'active' : '' }`} onClick={handleClick}>
            <span>{navitem.name.replace('-',' ')}</span>
        </a>

    )
}