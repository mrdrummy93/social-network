import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg"/>
            </div>
            <div className={s.description}>
                <img src={props.profile.photos.large} />
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.lookingForAJob}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    )
}

export default ProfileInfo