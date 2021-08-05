import React from 'react';
import PropTypes from 'prop-types'
import FriendListItem from '../FriendListItem/FriendListItem'
import styles from './FriendList.module.css'


const FriendList =({friends})=>{
    return(
        <ul className={styles.friendList}>
            {friends.map(({avatar, name, isOnline, id}) =><FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline}/>)}
        </ul>
    )
}

FriendList.propTypes ={
    friends: PropTypes.array.isRequired
}

export default FriendList;