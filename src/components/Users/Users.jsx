import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={styles.pagesNumber}>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={() => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <section>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                 className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </section>
                <section>
                    <section>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </section>
                    <section>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </section>
                </section>
            </div>)
        }
    </div>
}

export default Users