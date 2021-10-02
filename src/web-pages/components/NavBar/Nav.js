import React from "react";
import NavItem from "./NavItem";

export default function Nav({components, selectedNav, onNavClick}) {

    function handleClick(index) {
        onNavClick(index)
    }

    return (

        <div className="nav-components">
            <div className="nav-title">
                <span>
                    Components
                </span>
            </div>
            <div className="nav-list">
                {components.map( (navitem, index) => {
                    return (
                        <NavItem navitem={navitem} onClick={() => handleClick(index)} active={index === selectedNav}/>
                    )
                })}
            </div>
        </div>


)
}