import React from 'react';
import PropTypes from 'prop-types'
import styles from './Profile.module.css'


const Profile = ({name, tag, location, avatar, stats}) => {
    return(
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    className={styles.avatar}
                />
                <p className={styles.name}> {name}</p>
                <p className={styles.tag}> {tag}</p>
                <p className={styles.location}> {location}</p>
            </div>

            <ul className={styles.stats}>
                <li>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}> {stats.followers}</span>
                </li>
                <li>
                    <span className={styles.label}>Views</span>
                    <span className={styles.quantity}> {stats.views}</span>
                    </li>
                <li>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}> {stats.likes}</span>
                </li>
            </ul>
    </div>
    )
}

Profile.defaultProps  = {
    name: 'what is your name',
    tag: 'how do you want that people to reach out to you',
    location: 'where are you ',
    avatar: 'https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg',
    stats: {followers: 0, views: 0, likes: 0}
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired
}


export default Profile;