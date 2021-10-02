import React from 'react'
import PcButtTogglerItems from './PcButtTogglerItems'


export default function PcButtToggler(props) {
    return (
        <div className="theme-boxlist">
            {props.togglers.map(toggler => {
                return <PcButtTogglerItems toggler={toggler}/>
            })}
        </div>
    )
}