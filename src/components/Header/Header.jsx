import styles from "./Header.module.css";

export default function Header({ resultCount }) {
  return (
    <header className={styles.header}>
      <div className={`page-wrapper ${styles.inner}`}>
        <a href="/" className={styles.logo} aria-label="Internshala home">
          INTERN<span className={styles.logoAccent}>SHALA</span>
          <span className={styles.logoDot}></span>
        </a>

        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#" className={`${styles.navLink} ${styles.active}`}>Internships</a>
          <a href="#" className={styles.navLink}>Jobs</a>
          <a href="#" className={styles.navLink}>Courses</a>
        </nav>

        <div className={styles.right}>
          <span className={styles.count}>
            <span className={styles.countNum}>{resultCount}</span> internship{resultCount !== 1 ? "s" : ""} found
          </span>
          <button className={styles.loginBtn}>Login / Register</button>
        </div>
      </div>
    </header>
  );
}
