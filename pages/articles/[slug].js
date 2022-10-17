import Head from 'next/head'
import { GraphQLClient } from 'graphql-request'
import { BASE_URL, EACHPOSTQUERY, SLUGSQUERY } from '../../utils/queries';
import styles from "../../styles/Post.module.scss"
import { DateIcon, TimeIcon } from '../../images/icons';
const graphCms = new GraphQLClient(BASE_URL);

export default function Article({ post }) {
    const { title, excerpt, datePublished, coverPhoto, author, content, readingTime } = post;
    return (
        <>
            <Head>
                <title>Article | {title}</title>
                <meta name="description" content="This is Inertia Blog made with NextJS and GraphQL" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className={styles.mainInner}>
                    <div className={styles.articleHeader}>
                        <div className={styles.articleInfo}>
                            <div>
                                <DateIcon />
                                {datePublished}
                            </div>
                            <div>
                                <TimeIcon />
                                {readingTime}{readingTime == 1 ? " min read" : " mins read"}
                            </div>
                        </div>
                        <div className={styles.articleText}>
                            <h1 className={styles.articleHeading}>{title}</h1>
                            <p className={styles.articleDescription}>{excerpt}</p>
                        </div>
                        <div className={styles.articleAuthor}>
                            <div className={styles.articleAuthor_image}>
                                <img src={author.avatar.url} alt={`Image of ${author.name}`} />
                            </div>
                            <div className={styles.articleAuthor_info}>
                                <h3>{author.name}</h3>
                                <p>{author.profession}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.articleBanner}>
                        <div className={styles.articleBanner_image}>
                            <img src={coverPhoto.url} alt={`Cover Photo of ${title}`} />
                        </div>
                    </div>
                    <div className={styles.articleContent}>
                    <div className={styles.articleContentIinner} dangerouslySetInnerHTML={{__html: content.html}}>

                    </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export async function getStaticPaths() {
    const { posts } = await graphCms.request(SLUGSQUERY);
    return {
        paths: posts.map((post) => ({ params: { slug: post.slug } })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const slug = params.slug;
    const data = await graphCms.request(EACHPOSTQUERY, { slug });
    const post = data.post
    return {
        props: {
            post,
        },
        revalidate: 10,
    }
}