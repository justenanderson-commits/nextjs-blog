import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>A Very Interesting Title</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This website is what I build while self-teaching the Next.js framework. Check out this {' '}<a href='https://nextjs.org/learn'>Next.js tutorial if you'd like to build your own.</a></p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>  
          
          
          // <li className={utilStyles.listItem} key={id}>
          //     {title}
          //     <br />
          //     {id}
          //     <br />
          //     {date}
          //   </li>

          ))}
        </ul>
      </section>
    </Layout>  )
}