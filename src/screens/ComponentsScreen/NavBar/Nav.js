import React from "react";

export default function Nav({components, selectedTab, handleNavChange}) {


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
                        <a className={navitem.name + ` nav-item ${index === selectedTab ? 'active' : '' }`} onClick={() => handleNavChange(index)} key={navitem.name}>
                            <span>{navitem.name.replace('-',' ')}</span>
                        </a>
                    )
                })}
            </div>
        </div>


)
}