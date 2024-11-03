import React from "react";
import { AdminInfo } from "../types/info_types";

type AdminProps = {
  admin: AdminInfo;
};

export const AdminInfoComponent: React.FC<AdminProps> = ({ admin }) => {
  return (
    <div>
      <h1>Admin Information</h1>
      <p>Id: {admin.id}</p>
      <p>Name: {admin.name}</p>
      <p>Email: {admin.email}</p>
      <p>Role: {admin.role}</p>
      <p>Last Login Date: {admin.lastLogin.toLocaleString()}</p>
    </div>
  );
};
