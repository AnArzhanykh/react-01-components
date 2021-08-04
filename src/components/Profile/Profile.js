import React from 'react';
import user from '../../json/user'
import ReactDOM from 'react-dom'
import styles from './Profile.module.css'

console.log(styles);

const {name, tag, location, avatar, stats} = user


const Profile = (props) => {
    return(
        <div className="styles.profile">
            <div className="description">
                <img
                src={avatar}
                alt="Аватар пользователя"
                className="avatar"
                />
                <p className="styles.name"> {name}</p>
                <p className="tag"> {tag}</p>
                <p className="location"> {location}</p>
            </div>

            <ul className="stats">
                <li>
                <span className="label">Followers</span>
                <span className="quantity"> {stats.followers}</span>
                </li>
                <li>
                <span className="label">Views</span>
                <span className="quantity"> {stats.views}</span>
                </li>
                <li>
                <span className="label">Likes</span>
                <span className="quantity"> {stats.likes}</span>
                </li>
            </ul>
    </div>
    )
}

export default Profile;