import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = ()  => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Homework Maespirit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome !
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

      </main>

    </div>
  )
}

export default Home;