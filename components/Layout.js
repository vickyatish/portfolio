import Link from 'next/link';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <ul className={styles.navList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Me</Link></li>
            <li><Link href="/experience">Experience</Link></li>
            <li><Link href="/projects">Projects</Link></li>
          </ul>
        </nav>
      </header>
      <main className={styles.mainContent}>
        {children}
      </main>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} My Portfolio</p>
      </footer>
    </div>
  );
};

export default Layout;