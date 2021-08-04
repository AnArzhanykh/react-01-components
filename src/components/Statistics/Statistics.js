import React from 'react';
import ReactDOM from 'react-dom'
import data from '../../json/statistical-data.json'



const Statistics = ( {title, stats}) =>{
    console.log(stats);
    return(
        <section className="statistics">
            <h2 className="title">{title}</h2>

            {/* <ul className="stat-list">
                stats.map(elem => {
                    <li className="item" key="elem.id">
                        <span className="label">{elem.label}</span>
                        <span className="percentage">{elem.percentage}</span>
                    </li>
                })

            </ul> */}
        </section>
    )
}


export default Statistics;