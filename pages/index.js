import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Compare <a href="https://poto.com">Forms!</a>
        </h1>

        <label className={styles.form}>
          <label className={styles.routes}>Routes</label>
          <code className={styles.code}>Json-Schema-Form - /json</code><br/>
          <code className={styles.code}>React-Hook-Form - /formHook</code>

        </label>
      </main>
    </div>
  )
}
