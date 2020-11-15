import React from 'react';
import s from "./FriendItem.module.css"

const FriendItem = (props) => {
    return (
        <div className={s.item}>
            <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png"/>
            <div>
                {props.name}
            </div>
        </div>
    )
}

export default FriendItem;