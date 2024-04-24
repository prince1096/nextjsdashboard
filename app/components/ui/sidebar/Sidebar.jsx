import Image from "next/image";
import styles from "./Sidebar.module.css";
import {
  MdAttachMoney,
  MdDashboard,
  MdShoppingBag,
  MdSupervisedUserCircle,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";

const Sidebar = () => {
  const menuItems = [
    {
      title: "Users",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transaction",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          src="/logo.jpeg"
          alt="logo"
          width="50"
          height="50"
          className={styles.image}
        />
        <div className={styles.userDetails}>
          <span className={styles.userName}>Hello</span>
          <span className={styles.userTitle}>World</span>
        </div>
      </div>

      <ul className={styles.list}>
        {menuItems?.map((item) => (
          <li key={item.title}>
            <span className={styles.item}>{item.title}</span>
            {item?.list.map((i) => (
              <MenuLink item={i} key={i.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
