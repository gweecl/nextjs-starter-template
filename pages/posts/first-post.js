import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { Counter } from '../../features/counter/Counter'


export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Posts - Counter</h1>
      <Counter />
    </>
  )
}

FirstPost.getLayout = function getLayout(page) {
  return (
    <Layout home>
      {page}
    </Layout>
  )
}