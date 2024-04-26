// import { updateUser } from "@/app/lib/actions";
// import { fetchUser } from "@/app/lib/data";
// import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";

import SingleUserForm from "@/app/components/reUsable/singleUser/SingleUserForm";
import styles from "../../../components/ui/dashboard/users/singleUser/singleUser.module.css";

import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  const { id } = params;

  // const updateUser = () => {
  //   return 5;
  // };

  const fetchUser = (id) => {
    return id;
  };

  const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/avatar.png" alt="" fill />
        </div>
        {user.username}
      </div>
      <SingleUserForm user={user} />
    </div>
  );
};

export default SingleUserPage;
