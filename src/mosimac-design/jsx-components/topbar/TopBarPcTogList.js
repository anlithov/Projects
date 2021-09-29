import React from 'react'
import TopBarPcTogItem from './TopBarPcTogItem'


export default function TopBarPcTogList(props) {
    return (
        <div className="theme-boxlist">
            {props.togglers.map(toggler => {
                return <TopBarPcTogItem toggler={toggler}/>
            })}
        </div>
    )
}