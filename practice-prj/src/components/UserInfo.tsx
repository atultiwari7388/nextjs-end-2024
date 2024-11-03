import { FC } from "react";
import { Info } from "../types/info_types";

type UserInfoProp = {
  user: Info;
};

export const UserInfo: FC<UserInfoProp> = ({ user }) => {
  return (
    <div>
      <h2>User Information</h2>
      <p>Id:{user.id}</p>
      <p>Name:{user.name}</p>
      <p>Email:{user.email}</p>
    </div>
  );
};
