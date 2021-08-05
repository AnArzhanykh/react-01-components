import React from 'react';
import PropTypes from 'prop-types'
import styles from './Statistics.module.css';


const Statistics = ( {title, stats}) =>{
    return(
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.statList}>
                {stats.map(({id, label, percentage}) =>{
                    const color = {backgroundColor: randColor()}
                    return(<li className={styles.item} style={color} key={id}>
                            <span className={styles.label}> {label}</span>
                            <span className={styles.percentage}> {percentage}%</span>
                        </li>
                )})}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired
}


function randColor() {
                    const r = Math.floor(Math.random() * (256)),
                    g = Math.floor(Math.random() * (256)),
                    b = Math.floor(Math.random() * (256)),
                    color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
                return  color;
            }




export default Statistics;