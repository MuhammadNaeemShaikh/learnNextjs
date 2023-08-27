'use client'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Post() {

    const router = useRouter()
    return (
        <main className={styles.main}>
            <div className={styles.description}>

                <div className={styles.center}>
                    <h1>Post</h1>
                </div>
                <Link href="/">Back to Home</Link>
                <button onClick={()=>router.push('/')}>Go to Home</button>
            </div>
        </main>
    )
}
