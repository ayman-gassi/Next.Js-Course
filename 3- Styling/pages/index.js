import styles from '@/styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Welcome to <span>My Next.js App</span>
        </h1>
        <p className={styles.description}>
          This is a simple homepage built with Next.js.
        </p>
      </section>
  </div>
  );
}
