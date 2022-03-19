import React from "react";

import s from './Posts.module.css'

const Posts = (props) => {


    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src='https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg'/>
                {props.message}
                <div>
                    <span>like</span>
                </div>

            </div>
        </div>
    )
}

export default Posts;