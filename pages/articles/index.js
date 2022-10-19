import Head from 'next/head'
import { GraphQLClient } from 'graphql-request'
import { PostCards } from '../../components';
import { BASE_URL, HOMEQUERY } from '../../utils/queries';


const graphCms = new GraphQLClient(BASE_URL);

export default function Articles({ posts }) {

  return (
    <>
      <Head>
        <title>All Articles | INERTIA BLOG </title>
        <meta name="description" content="This is Inertia Blog made with NextJS and GraphQL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostCards posts={posts} />
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