import Head from 'next/head'
import { Fira_Sans } from 'next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const inter = Fira_Sans({
  weight: ['500'],
  subsets: ['latin']
})

export default function Home() {
  return (
    <>
      <Head>
        <title>0001 - Palette</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Link href="/palette">01. Palette Copy To Clipboard</Link>
      </main>
    </>
  )
}
