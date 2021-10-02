import React from "react";

export default function Nav({components, selectedTab, handleNavChange}) {

    function handleNavClick(index) {
        handleNavChange(index)
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
                        /*<NavItem navitem={navitem} onClick={() => handleNavChange(index)} active={index === selectedTab}/>*/
                        <a className={navitem.name + ` nav-item ${index === selectedTab ? 'active' : '' }`} onClick={handleNavClick} >
                            <span>{navitem.name.replace('-',' ')}</span>
                        </a>
                    )
                })}
            </div>
        </div>


)
}