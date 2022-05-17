import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Clock from '../components/clock'
import Countdown from '../components/countdown'
import Editor from '../components/editor'
import { createPattern, fillText } from '../components/pattern'
import ScrollText from '../components/scrollText'
import Timer from '../components/timer'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Victory Countdown</title>
        <meta name="description" content="Countdown clock by Victory.rs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <Editor /> */}
        <Timer></Timer>
        <div className={styles.footer}>Countdown clock by <img src="https://m.victory.rs/assets/images/logo/brand-logo-landing-full.svg" alt="victory.rs" /></div>
      </main>
    </div>
  )
}

export default Home
