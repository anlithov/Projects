import React from "react";
import ShowdownItem from "./components-showdown/ShowdownItem";

export default function ComponentsShowdown(props) {

    return (
        <div className="showdown-components">
            {props.components.map(shdwncomp => {
                return ShowdownItem(shdwncomp={shdwncomp})
            })}
            <a href="" className={props.components[0].name + ' shdwn-component'}>
                <span>{props.components[0].name.replace('-',' ')}</span>

            </a>
        </div>

    )
}