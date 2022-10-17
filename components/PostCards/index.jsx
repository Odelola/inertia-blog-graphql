import React from "react";
import PostsCard from "../PostCard";
import styles from "./PostCards.module.scss"

const PostCards = ({ posts }) => {

    return (
        <div id={styles.postCards}>
            <div className={styles.postsCardsInner}>
                {posts.map(eachPost => (<PostsCard key={eachPost.id} post={eachPost} />))}
            </div>
        </div>
    )
}

export default PostCards;