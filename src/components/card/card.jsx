import {React} from 'react';
import "./card.css"
import { Chip } from '../chip';

export const Card = ({href, name}) => {
    return (
        <div className="card">
            <div className='innerCard'>
            <h2 id="portfolio-text-title">Sietze v.d. Star</h2>
            <p id="portfolio-text-body">Hi 👋 I am a digital designer working on user-centered experiences with my UX design and frontend development skills.</p>
            <div className="chip-container">
                <Chip name={"LinkedIn"} href={'https://www.linkedin.com/in/sietze-van-de-star/'}/>
                <Chip name={"Behance"} href={'https://www.behance.net/sietzevanda20e'}/>
                <Chip name={"Codepen"} href={'https://codepen.io/svandes'}/>
                <Chip name={"GitHub"} href={'https://github.com/supernova770'}/>
            </div>
            </div>
        </div>
    )
}