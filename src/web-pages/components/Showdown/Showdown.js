import React from "react";


export default function Showdown({components, selectedNav}) {

    return (
        <div className="showdown-components">
            <h1>
                {components[selectedNav].name.replace('-',' ')}
            </h1>
            {components[selectedNav].content()}
        </div>

    )
}