"use client";

import Image from "next/image";
// import styles from "../components/ui/dashboard/users/users.module.css";
import styles from "../../components/ui/dashboard/users/users.module.css";

import Link from "next/link";
import UserForm from "@/app/components/reUsable/userForm";
// import { fetchUsers } from "@/app/lib/data";
// import { deleteUser } from "@/app/lib/actions";

const UserPage = () => {
  // const users = await fetchUsers();
  // const users = [];
  // console.log(users, 44);

  const deleteUser = () => {};

  const users = [
    {
      id: "1",
      username: "john_doe",
      email: "john@example.com",
      password: "password123",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Si64x0i5uRHy-OOYo6qn60oKSSdS0qYdtw&usqp=CAU",
      isAdmin: false,
      isActive: true,
      phone: "123-456-7890",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: "2",
      username: "jane_smith",
      email: "jane@example.com",
      password: "password456",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Si64x0i5uRHy-OOYo6qn60oKSSdS0qYdtw&usqp=CAU",
      isAdmin: true,
      isActive: true,
      phone: "987-654-3210",
      address: "456 Elm St, Othertown, USA",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <UserForm user={user} key={user.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;
