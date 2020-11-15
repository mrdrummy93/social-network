import React from 'react';
import s from "./Friends.module.css";
import FriendItem from "./FriendItem/FriendItem"
import store from "../../redux/store";

const Friends = (props) => {
    let friendsElements = store.friends.map(f => <FriendItem id={f.id} name={f.name}/>)

    return (
        <div className={s.item}>
            <h3>Friends</h3>
            <div>
                {friendsElements}
            </div>
        </div>
    )
}

export default Friends;