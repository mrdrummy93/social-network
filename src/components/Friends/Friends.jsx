import React from 'react';
import s from "./Friends.module.css";
import FriendItem from "./FriendItem/FriendItem"
import store from "../../redux/store";
import sidebarReducer from "../../redux/sidebar-reducer";

const Friends = () => {
    let friendsElements = sidebarReducer.friends.map(f => <FriendItem id={f.id} name={f.name}/>)

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