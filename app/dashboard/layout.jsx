import Sidebar from "../components/ui/sidebar/Sidebar";

import styles from "../components/ui/dashboard/dashboard.module.css";

const DashLayout = ({ children }) => {
  return (
    <div className={styles.menu}>
      <Sidebar />
      {children}
    </div>
  );
};

export default DashLayout;
