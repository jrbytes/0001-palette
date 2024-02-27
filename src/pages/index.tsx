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
        <Link href="/conditional-rendering">04. Conditional Rendering</Link>
        <Link href="/lists-and-keys">05. Lists And Keys</Link>
        <Link href="/components-and-props">06. Components And Props</Link>
        <Link href="/usecallback-star-trek-mission">07. useCallback - Star Trek Mission</Link>
        <Link href="/usememo-star-trek-crew">08. useMemo - Star Trek Crew</Link>
        <Link href="/useeffect-star-trek-enterprise">09. useEffect - Star Trek Enterprise</Link>
        <Link href="/follow-pointer-framer-motion">10. Follow Pointer - Framer Motion</Link>
        <Link href="/variants-framer-motion">11. Variants - Framer Motion</Link>
      </main>
    </>
  )
}
