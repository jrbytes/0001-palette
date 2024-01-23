import Head from 'next/head'
import { Fira_Sans } from 'next/font/google'
import styles from '../styles/wrapper.module.css'
import Link from 'next/link'

const inter = Fira_Sans({
  weight: ['500'],
  subsets: ['latin']
})

export default function Home() {
  return (
    <>
      <Head>
        <title>jrbytes/react-examples</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.wrapper} ${inter.className}`}>
        <Link href="/palette">01. Palette Copy To Clipboard</Link>
        <Link href="/draft-js">02. Draft.js: Rich Text Editor Framework</Link>
        <Link href="/async-button">03. Async Button: Async Button With Feedback</Link>
      </main>
    </>
  )
}
