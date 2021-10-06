import React, {useEffect} from "react";
import Prism from "prismjs";


export default function Showdown({components, selectedTab}) {
    useEffect(() => {
        Prism.highlightAll();
    });
    return (
        <div className="showdown-components">
            <h1>
                {components[selectedTab].name.replace('-',' ')}
            </h1>
            {components[selectedTab].content()}
        </div>

    )
}