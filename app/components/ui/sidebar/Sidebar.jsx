import Image from "next/image";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image src="/logo.jpeg" alt="logo" width="50" height="50" />
        <div className={styles.userDetails}>
          <span className={styles.userName}>Hello</span>
          <span className={styles.userTitle}>World</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
