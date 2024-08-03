import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">Your Food</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a
          href="https://github.com/FatemehSalimi-777"
          target="_blank"
          rel="noreferrer"
        >
          Developed by Fatemeh Salimi from 🌎
        </a>{" "}
        Next.js | Your Food Project &copy;
      </footer>
    </>
  );
}

export default Layout;
