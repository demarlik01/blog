import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Main from '../components/main'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'

export default function Index({ allPosts }) {
  const mainImagePath = "/assets/blog/main/home.png";
  return (
    <>
      <Layout>
        <Head>
          <title>Hyoseok Kim.</title>
        </Head>
        <Container>
          <Intro />
          <Main title="mainImage" mainImage={mainImagePath}/>
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
