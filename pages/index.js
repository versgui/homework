import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Launch from "./launch";

const Home = ()  => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Homework Maespirit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          🚀
        </h1>

        <Launch></Launch>
      </main>

    </div>
  )
}

export default Home;