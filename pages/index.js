import { useState } from 'react';
import Head from 'next/head'
import { GraphQLClient, gql } from 'graphql-request'
import { PostCards } from '../components';
import { BASE_URL, HOMEQUERY } from '../utils/queries';

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
      <PostCards posts={posts.slice(0, somePosts)} />
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