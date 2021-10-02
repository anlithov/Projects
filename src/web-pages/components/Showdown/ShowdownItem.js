import React from "react";

export default function ShowdownItem({item}) {
    return (
        <div className={item.name + ' shdwn-item'}>
            <h1>{item.name.replace('-',' ')}</h1>
            {item.content}
        </div>
    )
}
