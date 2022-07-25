import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const { user } = useSelector((state) => state.userInfo);
  return (
    <div className="profile">
      <p> User: {user.name}</p>
      <p> MyEmail: {user.email}</p>
      <p> MyPhone: {user.phone}</p>
      <p> MyAddress: {user.location}</p>
    </div>
  );
}

export default Profile;
