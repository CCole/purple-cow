import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import PurpleCounter from '../src/features/purple-counter/purple-counter';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <PurpleCounter />
      </main>

      <footer className={styles.footer}>
        Powered by Purple Sauce{' '}
        <span className={styles.logo}>
          <Image
            src="/purple-sauce1.svg"
            alt="Vercel Logo"
            width={216}
            height={48}
          />
        </span>
      </footer>
    </div>
  );
}
