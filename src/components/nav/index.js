import styles from './style.module.css';
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoBox}>
        <svg className={styles.logo} width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className={styles.logotext}>Tailwind CSS</span>
      </div>
      <div className={styles.contentBox}>
        <div className={styles.itemBox}>
          <a href="#" className={styles.item}>
            Home
          </a>
          <a href="#r" className={styles.item}>
            About
          </a>
          <a href="#responsive-header" className={styles.item}>
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
