import React from "react";

import Posts from "./Post/Posts";
import s from './MyPosts.module.css'

const MyPosts = (props) => {

    let posts = [
        {id: 1, message: 'hi, my post', likesCount: 2},
        {id: 2, message: 'Good', likesCount: 15},
        {id: 3, message: 'sasdsdas', likesCount: 3},
        {id: 4, message: 'Congratulations', likesCount: 50}
    ];

    let postsElements =
        posts.map(p => <Posts message={p.message} likesCount={p.likesCount}/>
        );

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;