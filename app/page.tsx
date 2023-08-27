import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>

        <div className={styles.center}>
          <h1>Hello World</h1>
          <Link href="/posts">Go to Post</Link>
        </div>
      </div>
    </main>
  )
}
