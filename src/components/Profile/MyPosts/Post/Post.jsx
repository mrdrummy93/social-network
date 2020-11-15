import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"/>
            {props.message}
            <div>
                <span>Like </span>
                {props.likes}
            </div>
        </div>
    )
}

export default Post