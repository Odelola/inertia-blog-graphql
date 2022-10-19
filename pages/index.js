import { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { GraphQLClient } from 'graphql-request'
import { Blur1, Blur2 } from '../components/Blur';
import { PostCards } from '../components';
import { BASE_URL, HOMEQUERY } from '../utils/queries';
import styles from "../styles/Home.module.scss"


const graphCms = new GraphQLClient(BASE_URL);

export default function Home({ posts }) {
  const [somePosts, setSomePosts] = useState(posts.length / 2);

  return (
    <>
      <Head>
        <title>INERTIA BLOG | GRAPHQL </title>
        <meta name="description" content="This is Inertia Blog made with NextJS and GraphQL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Blur1 left="-5%" top="45%" />
      <Blur2 right="0%" bottom="-100%" />
      <PostCards posts={posts.slice(0, somePosts)} />
      <div className={styles.readMoreContainer}>
        <Link href={`/articles`} passHref>
          <button className={styles.readMore}>
            <div className={styles.readMoreInner}>
              All Articles
            </div>
          </button>
        </Link>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { posts } = await graphCms.request(HOMEQUERY);
  return {
    props: {
      posts
    }
  }
}