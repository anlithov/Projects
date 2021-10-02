import React from "react";


export default function Showdown({components, selectedTab}) {

    return (
        <div className="showdown-components">
            <h1>
                {components[selectedTab].name.replace('-',' ')}
            </h1>
            {components[selectedTab].content()}
        </div>

    )
}