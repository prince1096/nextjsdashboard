"use client";

// const { default: Image } = require("next/image");
// const { default: Link } = require("next/link");

import Image from "next/image";
import Link from "next/link";

// import styles from "../../components/ui/dashboard/users/users.module.css";

import styles from "../../components/ui/dashboard/users/users.module.css";

const UserForm = ({ user }) => {
  const deleteUser = () => {
    return 5;
  };

  return (
    <tr key={user.id}>
      <td>
        <div className={styles.user}>
          <Image
            src="/logo.jpeg"
            // src={user.img}
            width={40}
            height={40}
            className={styles.userImage}
            alt="logo"
          />
          {user.username}
        </div>
      </td>
      <td>{user.email}</td>
      <td>{user.createdAt?.toString().slice(4, 16)}</td>
      <td>{user.isAdmin ? "Admin" : "Not Admin"}</td>
      <td>{user.isActive ? "online" : "offline"}</td>
      <td>
        <Link href={`/dashboard/users/${user.id}`}>
          <button className={`${styles.button} ${styles.view}`}>View</button>
        </Link>
        <form action={deleteUser}>
          <input type="hidden" name="id" value={user.id} />
          <button className={`${styles.button} ${styles.delete}`}>
            Delete
          </button>
        </form>
      </td>
    </tr>
  );
};

export default UserForm;
