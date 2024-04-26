"use client";

import styles from "../../ui/dashboard/users/singleUser/singleUser.module.css";

const SingleUserForm = ({ user }) => {
  const updateUser = () => {
    return 5;
  };

  return (
    <div className={styles.formContainer}>
      <form action={updateUser} className={styles.form}>
        <input type="hidden" name="id" value={user.id} />
        <label>Username</label>
        <input type="text" name="username" placeholder={user.username} />
        <label>Email</label>
        <input type="email" name="email" placeholder={user.email} />
        <label>Password</label>
        <input type="password" name="password" placeholder="password" />
        <label>Phone</label>
        <input type="phone" name="phone" placeholder={user.phone} />
        <label>Address</label>
        <textarea name="address" id="" placeholder={user.address}></textarea>
        <label>is Admin?</label>
        <select name="isAdmin" id="isAdmin">
          <option value={true} selected={user.isAdmin}>
            Yes
          </option>
          <option value={false} selected={!user.isAdmin}>
            No
          </option>
        </select>
        <label>Is Active</label>
        <select name="isActive" id="isActive">
          <option value={true} selected={user.isActive}>
            Yes
          </option>
          <option value={false} selected={!user.isActive}>
            No
          </option>
        </select>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default SingleUserForm;
