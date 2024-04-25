// import Transactions from "./transactions/page";

import Transactions from "../components/ui/transactions/transactions";
import styles from "../components/ui/dashboard/dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Transactions />
      </div>
    </div>
  );
};

export default Dashboard;
