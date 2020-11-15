import React from 'react';
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <img src="https://image.flaticon.com/icons/png/512/147/147144.png" />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;