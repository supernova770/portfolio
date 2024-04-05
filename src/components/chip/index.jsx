import {React} from 'react';
import "./chip.css"

export const Chip = ({href, name, color}) => {
    return (
        <div className="chip">
            <a href={href} style={{backgroundColor:color}} className="chip__a" target="_blank" rel="noopener noreferrer">{name}</a>
        </div>
    )
}