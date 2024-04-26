"use server";

import { Users } from "./models";
import { connectToDB } from "./utils";
import bcrypt from "bcrypt";

const addUser = async (formData) => {
  console.log(formData, "hello");
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  //   return <div></div>;

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword, "helloji");

    const newUser = new Users({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    const savedUser = await newUser.save();
  } catch (error) {
    console.log(error);
  }
};

export default addUser;
