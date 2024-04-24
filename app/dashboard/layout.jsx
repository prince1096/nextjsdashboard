import Sidebar from "../components/ui/sidebar/Sidebar";

import styles from "../components/ui/dashboard/dashboard.module.css";
import Navbar from "../components/ui/navbar/Navbar";

const DashLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default DashLayout;
