import React from "react";
import Link from "next/link"
import { ArrowIcon, TimeIcon, DateIcon } from "../../images/icons";
import styles from "./PostCard.module.scss"


const PostCard = ({ post: { title, datePublished, slug, coverPhoto, readingTime } }) => {
    return (
        <Link href={`/articles/${slug}`}>
            <div className={styles.postCard}>
                <div className={styles.postCardImage}>
                    {/* <div className={styles.postCardImageInner}> */}
                    <img alt={title} src={coverPhoto.url} />
                    {/* </div> */}
                </div>
                <div className={styles.postCardInner}>
                    <h2 className={styles.postCardTitle}>{title}</h2>
                    <div className={styles.postCardInfo}>
                        <div>
                        <DateIcon />
                        {datePublished}
                        </div>
                        <div>
                            <TimeIcon />
                            {readingTime}{readingTime == 1 ? " min read": " mins read"}
                        </div>
                    </div>
                    <div className={styles.postCardLinkContainer}>
                        <Link href={`#0`}>
                            <a className={styles.postCardLink}>Read More <ArrowIcon /> </a>
                        </Link>
                        <div className={styles.postCardLinkLine}>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default PostCard;